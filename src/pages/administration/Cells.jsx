import React from 'react';
import { useTranslation } from 'react-i18next';

const Cells = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('nav.administrationSub.cells.title')}</h1>
      <p>{t('nav.administrationSub.cells.contentPlaceholder')}</p>
    </div>
  );
};

export default Cells;
