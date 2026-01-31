import React from 'react';
import { Helmet } from 'react-helmet-async';

const Publications = () => {
  return (
    <>
      <Helmet>
        <title>Publications - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Research publications under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Publications
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Research and academic publications are integral to the NEP 2020 implementation, fostering a culture of inquiry, innovation, and knowledge dissemination.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Publication Categories</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Research papers in peer-reviewed journals</li>
                <li>Conference proceedings and presentations</li>
                <li>Books and book chapters</li>
                <li>Working papers and policy briefs</li>
                <li>Student research publications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Research Support</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Internal Quality Assurance Cell (IQAC) support</li>
                <li>Research methodology workshops</li>
                <li>Publication assistance and guidance</li>
                <li>Collaboration with research institutions</li>
                <li>Funding for research projects</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Faculty and student publications are regularly updated on the college website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;
