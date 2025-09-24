import { useTranslation } from '../hooks/useTranslations';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLanguage } from "react-icons/md";

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
      {/* Icono fijo a la izquierda */}
      <MdLanguage className="text-lg flex-shrink-0" />
      
      {/* Texto animado */}
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