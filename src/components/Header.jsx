import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslations';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-east-bay-500 shadow-lg border-b border-east-bay-400">
      <div className="flex items-center justify-between px-6 py-1">
        {/* Left Section  */}
        <div className="flex-1"></div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <span className="text-white font-semibold text-md">Social :</span>
          <a
            href="https://www.linkedin.com/in/ezequiel-coeli-softwareqadev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-east-bay-200 transition-colors duration-200 font-medium"
            title={t('linkedInProfile')}
          >
            <FaLinkedin className="text-xl" />
          </a>
          
          <a
            href="https://github.com/ezecoeli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-east-bay-200 transition-colors duration-200 font-medium"
            title={t('githubProfile')}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        {/* Language Toggle */}
        <div className="flex-1 flex justify-end">
          <div className="bg-east-bay-600/70 backdrop-blur-sm rounded-lg shadow-md border border-east-bay-400/30">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;