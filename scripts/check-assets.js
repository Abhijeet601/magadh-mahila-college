/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const PUBLIC_DIR = path.join(ROOT, 'public');

const ASSET_REF_REGEX = /['"](\/[A-Za-z0-9_\-./% ()]+\.(?:pdf|jpg|jpeg|png|webp|mp4|doc|docx|gif|svg|ppt|pptx))['"]/gi;

const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.json']);
const LFS_HEADER = 'version https://git-lfs.github.com/spec/v1';

const walkFiles = (dir) => {
  const output = [];
  if (!fs.existsSync(dir)) {
    return output;
  }

  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else {
        output.push(fullPath);
      }
    }
  }

  return output;
};

const normalizeSlash = (value) => value.replace(/\\/g, '/');

const isLFSPointerFile = (filePath) => {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(120);
    const bytesRead = fs.readSync(fd, buffer, 0, 120, 0);
    fs.closeSync(fd);
    const header = buffer.toString('utf8', 0, bytesRead);
    return header.startsWith(LFS_HEADER);
  } catch {
    return false;
  }
};

const sourceFiles = walkFiles(SRC_DIR).filter((file) => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));
const publicFiles = walkFiles(PUBLIC_DIR);

const publicRelative = publicFiles.map((file) =>
  normalizeSlash(path.relative(PUBLIC_DIR, file))
);
const publicSet = new Set(publicRelative);

const missingRefs = [];

for (const sourceFile of sourceFiles) {
  const content = fs.readFileSync(sourceFile, 'utf8');
  const matches = content.matchAll(ASSET_REF_REGEX);

  for (const match of matches) {
    const raw = match[1];
    let relativePath = raw.replace(/^\/+/, '');
    try {
      relativePath = decodeURIComponent(relativePath);
    } catch {
      // keep as-is if URL decoding fails
    }

    if (!publicSet.has(relativePath)) {
      missingRefs.push({
        source: normalizeSlash(path.relative(ROOT, sourceFile)),
        ref: raw
      });
    }
  }
}

const lfsPointers = publicFiles
  .filter((file) => /\.(pdf|mp4)$/i.test(file))
  .filter(isLFSPointerFile)
  .map((file) => normalizeSlash(path.relative(ROOT, file)));

if (missingRefs.length === 0 && lfsPointers.length === 0) {
  console.log('Asset check passed. No missing asset references and no LFS pointer files in public/.');
  process.exit(0);
}

if (missingRefs.length > 0) {
  console.error(`Missing asset references: ${missingRefs.length}`);
  for (const item of missingRefs) {
    console.error(`- ${item.source} -> ${item.ref}`);
  }
}

if (lfsPointers.length > 0) {
  console.error(`LFS pointer files detected in public/: ${lfsPointers.length}`);
  for (const pointer of lfsPointers) {
    console.error(`- ${pointer}`);
  }
  console.error('Run: git lfs pull && git lfs checkout');
}

process.exit(1);
