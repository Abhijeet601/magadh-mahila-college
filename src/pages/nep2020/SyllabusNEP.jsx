import React from 'react';
import { Helmet } from 'react-helmet-async';

const SyllabusNEP = () => {
  return (
    <>
      <Helmet>
        <title>Syllabus (NEP) - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="NEP-aligned syllabus under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Syllabus (NEP)
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The syllabus under NEP 2020 is designed to provide holistic education, focusing on skill development, critical thinking, and interdisciplinary learning.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">NEP 2020 Syllabus Structure</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>4-year undergraduate programs with multiple exit options</li>
                <li>Choice-based credit system (CBCS)</li>
                <li>Multidisciplinary and flexible curriculum</li>
                <li>Focus on Indian knowledge systems and languages</li>
                <li>Integration of vocational and skill-based courses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Curriculum Components</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Discipline-specific core courses</li>
                <li>Interdisciplinary and elective courses</li>
                <li>Ability enhancement courses</li>
                <li>Skill enhancement courses</li>
                <li>Internship and project work</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> NEP-aligned syllabi are being implemented progressively across all programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SyllabusNEP;
