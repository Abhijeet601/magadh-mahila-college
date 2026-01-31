import React, { useState } from 'react';

const Committees = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const years = ['2020-21', '2021-22', '2022-23', '2023-24', '2025-26'];

  const academicAuditCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal University Professor', department: '—————' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Associate Professor', department: 'Chemistry' },
    { sl: '03', name: 'Prof. Anjum Fatma', designation: 'University Professor', department: 'HoD, Chemistry' },
    { sl: '04', name: 'Dr. Bandana Singh Convener', designation: 'University Professor', department: 'Home Science' },
    { sl: '05', name: 'Dr. Pushpa Sinha', designation: 'Associate Professor', department: 'HoD, Economics' },
  ];

  const advisoryCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Coordinator-B.Com.', department: '' },
    { sl: '03', name: 'Dr. Kumari Aruna', designation: 'HoD, Hindi', department: '' },
  ];

  const buildingCommittee202021 = [
    { sl: '1', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '2', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar, Coordinator-B.Com.', department: 'Chemistry' },
    { sl: '3', name: 'Mr. Parimal Kumar Khan', designation: 'Development Officer, PU', department: '' },
  ];

  const disciplineCommittee202526 = [
    { sl: '1', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '2', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Coordinator IQAC', department: 'Convener' },
    { sl: '3', name: 'Dr. Rishu Raj', designation: 'HOD, Political Science', department: 'In-charge: North Corridor' },
    { sl: '4', name: 'Dr. Asha Kumari', designation: 'Dept. of Hindi', department: 'In-charge: East Corridor' },
  ];

  const academicAuditCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar', department: '' },
    { sl: '03', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Coordinator IQAC', department: 'Political Science' },
    { sl: '04', name: 'Dr. Surendra Kumar Prasad', designation: 'Convener', department: 'Botany' },
  ];

  const buildingCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar', department: '' },
    { sl: '03', name: 'Dr. Khagendra Kumar', designation: 'Development Officer, P. U.', department: '' },
    { sl: '04', name: 'Er. Sachin Dayal', designation: 'University Engineer, P. U.', department: '' },
  ];

  const naacCommittee202526 = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal', department: '' },
    { sl: '02', name: 'Prof. (Dr.) Pushpalata Kumari', designation: 'Professor', department: 'Coordinator, IQAC and NAAC' },
    { sl: '03', name: 'Dr. Pushpanjali Khare', designation: 'Associate Prof. & HOD, Botany', department: 'Member' },
    { sl: '04', name: 'Dr. Archana Jaiswal', designation: 'Associate Prof. & HOD, English', department: 'Member' },
  ];

  const allCommittees = {
    '2020-21': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 },
    ],
    '2021-22': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 },
    ],
    '2022-23': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 },
    ],
    '2023-24': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 },
    ],
    '2025-26': [
      { title: 'Discipline Committee', data: disciplineCommittee202526 },
      { title: 'Academic Audit Committee', data: academicAuditCommittee202526 },
      { title: 'Building Committee', data: buildingCommittee202526 },
      { title: 'NAAC Committee', data: naacCommittee202526 },
    ],
  };

  const TableComponent = ({ data, columns }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="border border-gray-400 px-4 py-2 text-left text-sm">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="border border-gray-400 px-4 py-2 text-sm">
                  {row[col.toLowerCase().replace(/\s+/g, '')] || row[col.toLowerCase()] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">College Committees</h1>
      <p className="text-gray-600 mb-8">Administrative Structure and Committee Compositions</p>

      <div className="space-y-4">
        {years.map((year) => (
          <div key={year} className="border rounded-lg shadow-md">
            <button
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg flex justify-between items-center hover:bg-blue-700 transition"
            >
              <span>Academic Year {year}</span>
              <span className="text-xl">{expandedYear === year ? '−' : '+'}</span>
            </button>

            {expandedYear === year && (
              <div className="px-6 py-6 bg-white">
                {allCommittees[year].map((committee, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">{committee.title}</h3>
                    <TableComponent 
                      data={committee.data} 
                      columns={['Sl', 'Name', 'Designation', 'Department']}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Committee Structure Overview</h2>
        <p className="text-gray-700 mb-4">
          The college maintains various committees to ensure effective administration and academic excellence. These committees include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Academic Audit Committee - Monitors academic quality and performance</li>
          <li>Advisory Committee - Comprises heads of departments and coordinators</li>
          <li>Building Committee - Oversees infrastructure and maintenance</li>
          <li>Discipline Committee - Maintains campus discipline and conduct</li>
          <li>NAAC Committee - Manages accreditation and quality assurance</li>
          <li>Finance and Development Committee - Handles financial matters</li>
          <li>Grievance Redressal Committees - Addresses student and staff concerns</li>
          <li>Research and Publication Committees - Promotes scholarly activities</li>
        </ul>
      </div>
    </div>
  );
};

export default Committees;
