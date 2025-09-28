import { link } from 'framer-motion/client';
import { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    // header
    logoDescription: "=> Centro de recursos gratuitos para desarrolladores",
    // Social
    close: "Cerrar",
    contact: "Contacto",
    githubProfile: "Perfil de GitHub",
    linkedInProfile: "Perfil de LinkedIn",
    // Search and filters
    categories: "Categorías",
    search: "Buscar...",
    allCategories: "{ Todas las herramientas }",
    // Tool actions
    enlargeImage: "Click para ampliar",
    visit: "Ir al sitio",
    delete: "Eliminar",
    // Add tool form
    addButton: "Añadir",
    addToolmodal: "Añadir recurso",
    toolName: "Nombre",
    toolDescription: "Descripción",
    toolCategory: "Categoría",
    selectCategory: "Seleccionar categoría",
    toolUrl: "URL",
    toolImage: "URL de imagen",
    toolTags: "Tags (separados por comas)",
    save: "Guardar",
    cancel: "Cancelar",
    // Messages
    confirmDelete: "¿Estás seguro de que quieres eliminar esta herramienta?",
    noToolsFound: "No se encontraron herramientas",
    // Footer
    rights: "Todos los derechos reservados."
  },

  en: {
    // header
    logoDescription: "=> Free Developer Resource Center",
    // Social
    close: "Close",
    contact: "Contact",
    githubProfile: "GitHub Profile",
    linkedInProfile: "LinkedIn Profile",
    // Search and filters
    categories: "Categories",
    search: "Search...",
    allCategories: "{ All tools }",
    // Tool actions
    enlargeImage: "Click to enlarge",
    visit: "Go to site",
    delete: "Delete",
    // Add tool form
    addButton: "Add",
    addToolmodal: "Add resource",
    toolName: "Name",
    toolDescription: "Description",
    toolCategory: "Category",
    selectCategory: "Select category",
    toolUrl: "URL",
    toolImage: "Image URL",
    toolTags: "Tags (comma separated)",
    save: "Save",
    cancel: "Cancel",
    // Messages
    confirmDelete: "Are you sure you want to delete this tool?",
    noToolsFound: "No tools found",
    // Footer
    rights: "All rights reserved."
  },
};

// Language context
const LanguageContext = createContext();

// Language provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'es'
  );

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Function to get translations
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use translations
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
}