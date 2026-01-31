import React from 'react';
import { Helmet } from 'react-helmet-async';

const Syllabus = () => {
  return (
    <>
      <Helmet>
        <title>Syllabus - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Academic syllabus under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Syllabus
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The academic syllabus at Magadh Mahila College is structured to align with NEP 2020 guidelines, providing comprehensive learning experiences across all disciplines.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Syllabus Components</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Core courses in respective disciplines</li>
                <li>Elective courses for specialization</li>
                <li>Skill enhancement courses</li>
                <li>Ability enhancement courses</li>
                <li>Value-added and vocational courses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Assessment Methods</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Continuous internal assessment</li>
                <li>End-semester examinations</li>
                <li>Project work and assignments</li>
                <li>Practical and lab assessments</li>
                <li>Presentation and viva voce</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Updated syllabus documents are available for download from respective departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
