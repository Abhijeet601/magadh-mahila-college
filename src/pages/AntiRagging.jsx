import React from 'react';
import { useTranslation } from 'react-i18next';

const AntiRagging = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t('nav.aboutSub.studentsRollOfHonor')}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('pages.antiRagging')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Committee Members</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Chairperson</h3>
                <p className="text-gray-700 dark:text-gray-300">Dr. Principal Name</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Faculty Coordinator</h3>
                <p className="text-gray-700 dark:text-gray-300">Prof. Faculty Name</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> antiragging@magadhmahilacollege.org<br />
                <strong>Phone:</strong> +91-612-2219454<br />
                <strong>Helpline:</strong> Available 24/7 for students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
