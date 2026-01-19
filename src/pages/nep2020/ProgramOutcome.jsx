import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const ProgramOutcome = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('nav.nep2020Sub.programOutcome.metaTitle')}</title>
        <meta name="description" content={t('nav.nep2020Sub.programOutcome.metaDescription')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              {t('nav.nep2020Sub.programOutcome.title')}
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                {t('nav.nep2020Sub.programOutcome.intro')}
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{t('nav.nep2020Sub.programOutcome.programOutcomesTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('nav.nep2020Sub.programOutcome.programOutcomesDesc')}
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{t('nav.nep2020Sub.programOutcome.courseOutcomesTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('nav.nep2020Sub.programOutcome.courseOutcomesDesc')}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{t('common.note')}:</strong> {t('nav.nep2020Sub.programOutcome.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramOutcome;
