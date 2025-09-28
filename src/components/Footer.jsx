import React from 'react';
import { useTranslation } from '../hooks/useTranslations';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-east-bay-900 text-center text-white py-2 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} ToolFrame. {t('rights')}
      </p>
    </footer>
  );
};

export default Footer;