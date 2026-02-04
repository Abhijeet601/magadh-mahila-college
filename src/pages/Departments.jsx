import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Departments = () => {
  const { t } = useTranslation();

  const departments = [
    {
      name: 'Humanities',
      path: '/nep2020/humanities',
      description: 'Programs in languages, literature, history, and social sciences'
    },
    {
      name: 'Fine Arts',
      path: '/nep2020/fine-arts',
      description: 'Creative arts programs including visual arts, music, and performing arts'
    },
    {
      name: 'Science',
      path: '/nep2020/science',
      description: 'Programs in physical sciences, life sciences, and mathematics'
    },
    {
      name: 'Social Science',
      path: '/nep2020/social-science',
      description: 'Programs in sociology, psychology, economics, and political science'
    },
    {
      name: 'Vocational (Commerce)',
      path: '/nep2020/vocational-commerce',
      description: 'Commerce and business-related vocational programs'
    },
    {
      name: 'Vocational (Computer Application)',
      path: '/nep2020/vocational-computer-application',
      description: 'Computer application and IT-related vocational programs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Departments - Magadh Mahila College</title>
        <meta name="description" content="Explore the various academic departments at Magadh Mahila College under NEP 2020." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Academic Departments
            </h1>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-6 text-lg">
                Magadh Mahila College offers comprehensive programs across various academic disciplines,
                aligned with the National Education Policy 2020 guidelines. Explore our departments below
                to learn more about the courses and opportunities available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Link
                  key={index}
                  to={dept.path}
                  className="block bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary rounded-lg p-6 transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80">
                        {dept.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <p className="text-blue-800">
                <strong>Note:</strong> All departments follow the NEP 2020 curriculum framework,
                emphasizing interdisciplinary learning, skill development, and holistic education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
