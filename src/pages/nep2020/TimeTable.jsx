import React from 'react';
import { Helmet } from 'react-helmet-async';

const TimeTable = () => {
  return (
    <>
      <Helmet>
        <title>Time Table - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Academic time table under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Time Table
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Academic time tables are designed to optimize learning outcomes and provide a balanced schedule for students under the NEP 2020 framework.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Time Table Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Flexible scheduling for multidisciplinary courses</li>
                <li>Balanced distribution of theory and practical sessions</li>
                <li>Incorporation of co-curricular activities</li>
                <li>Regular assessment and feedback sessions</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Semester Structure</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Two semesters per academic year</li>
                <li>Mid-semester and end-semester examinations</li>
                <li>Continuous assessment through assignments and projects</li>
                <li>Summer internships and field work</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Current semester time tables are available in the respective departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
