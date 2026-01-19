import React from 'react';
import { Helmet } from 'react-helmet';

const Humanities = () => {
  return (
    <>
      <Helmet>
        <title>Humanities - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Humanities programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Humanities
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Humanities department at Magadh Mahila College offers comprehensive programs aligned with NEP 2020 guidelines, focusing on critical thinking, cultural understanding, and interdisciplinary learning.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Programs Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Bachelor of Arts (BA) - 4 Year Program</li>
                <li>Master of Arts (MA) in various disciplines</li>
                <li>Certificate and Diploma courses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Interdisciplinary curriculum</li>
                <li>Focus on skill development</li>
                <li>Research-oriented learning</li>
                <li>Cultural and ethical studies</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Detailed curriculum and course information will be available here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Humanities;
