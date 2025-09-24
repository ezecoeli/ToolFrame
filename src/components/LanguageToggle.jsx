import { useTranslation } from '../hooks/useTranslations';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageToggle() {
  const { language, changeLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-white hover:text-gray-300 transition-colors duration-200"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          {language === 'es' ? '' : ''}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={language + '-text'}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="uppercase font-bold"
        >
          {language === 'es' ? 'en' : 'es'}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}