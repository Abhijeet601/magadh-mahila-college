import React from 'react';
import { Helmet } from 'react-helmet';

const AcademicInfrastructure = () => {
  return (
    <>
      <Helmet>
        <title>Academic Infrastructure - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Academic Infrastructure under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Academic Infrastructure
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Magadh Mahila College boasts state-of-the-art academic infrastructure designed to support the implementation of NEP 2020 and provide an optimal learning environment.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Facilities Available</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Smart classrooms with modern teaching aids</li>
                <li>Well-equipped laboratories for science and computer education</li>
                <li>Digital library with e-resources</li>
                <li>Wi-Fi enabled campus</li>
                <li>Auditorium and seminar halls</li>
                <li>Sports and recreational facilities</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Technology Integration</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Interactive whiteboards and projectors</li>
                <li>Computer labs with latest software</li>
                <li>Online learning platforms</li>
                <li>Virtual classrooms for remote learning</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Infrastructure details and specifications will be updated regularly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicInfrastructure;
