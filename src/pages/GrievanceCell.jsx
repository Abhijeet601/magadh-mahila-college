import React from 'react';
import { useTranslation } from 'react-i18next';

const GrievanceCell = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Grievance Cell
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('pages.grievanceCell')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Types of Grievances Handled</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Academic Grievances</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Course content, evaluation, faculty issues</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Administrative Grievances</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Admission, fees, certificates</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Infrastructure Grievances</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Facilities, maintenance, amenities</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Other Grievances</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Any other student concerns</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Grievance Redressal Process</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Submit grievance through online portal or suggestion box</li>
                <li>Acknowledgment within 3 working days</li>
                <li>Investigation and resolution within 15 working days</li>
                <li>Appeal process available if unsatisfied</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> grievance@magadhmahilacollege.org<br />
                <strong>Phone:</strong> +91-612-2219454<br />
                <strong>Office Hours:</strong> Monday to Friday, 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievanceCell;
