import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const NEP2020 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Learn about the National Education Policy 2020 implementation at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-[#800000] mb-6 text-center">
              National Education Policy 2020
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Magadh Mahila College is committed to implementing the National Education Policy 2020,
                which aims to transform India's education system to meet the needs of the 21st century.
              </p>

              <h2 className="text-2xl font-semibold text-[#800000] mb-4">Key Initiatives at MMC</h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Multidisciplinary curriculum development</li>
                <li>Focus on skill-based learning and vocational education</li>
                <li>Emphasis on research and innovation</li>
                <li>Integration of technology in teaching-learning processes</li>
                <li>Holistic development of students</li>
                <li>Industry-academia collaboration</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#800000] mb-4">Implementation Status</h2>

              <p className="text-gray-700 mb-4">
                Our college is actively working towards the full implementation of NEP 2020 guidelines,
                with regular updates on curriculum restructuring, faculty development programs, and
                infrastructure enhancements.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> This page is under development. For detailed information about
                  NEP 2020 implementation at Magadh Mahila College, please contact the administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NEP2020;
