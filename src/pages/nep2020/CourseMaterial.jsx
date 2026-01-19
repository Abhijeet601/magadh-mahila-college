import React from 'react';
import { Helmet } from 'react-helmet';

const CourseMaterial = () => {
  return (
    <>
      <Helmet>
        <title>Course Material (E-Contents) - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Course materials and e-contents under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Course Material (E-Contents)
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Digital course materials and e-contents are integral to modern education, providing accessible and interactive learning resources.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">E-Content Types</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Interactive video lectures</li>
                <li>E-books and digital textbooks</li>
                <li>Multimedia presentations</li>
                <li>Online assessment tools</li>
                <li>Virtual labs and simulations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Platforms & Tools</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Learning Management System (LMS)</li>
                <li>MOOC platforms integration</li>
                <li>Open educational resources</li>
                <li>Mobile learning applications</li>
                <li>Collaborative online platforms</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> E-contents are regularly updated and accessible through the college portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseMaterial;
