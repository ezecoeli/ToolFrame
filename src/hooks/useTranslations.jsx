import { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    // header
    logoDescription: "=> Centro de recursos para desarrollres",
    // Social
    close: "Cerrar",
    contact: "Contacto",
    // Search and filters
    categories: "Categorías",
    search: "Buscar...",
    allCategories: "{ Todas las herramientas }",
    // Tool actions
    visit: "Visitar",
    addToFavorites: "Añadir a favoritos",
    removeFromFavorites: "Quitar de favoritos",
    delete: "Eliminar",
    // Add tool form
    addTool: "Añadir",
    toolName: "Nombre",
    toolDescription: "Descripción",
    toolCategory: "Categoría",
    toolUrl: "URL",
    toolImage: "URL de imagen",
    toolTags: "Tags (separados por comas)",
    save: "Guardar",
    cancel: "Cancelar",
    // Messages
    confirmDelete: "¿Estás seguro de que quieres eliminar esta herramienta?",
    noToolsFound: "No se encontraron herramientas",
  },

  en: {
    // header
    logoDescription: "=> Developer Resource Center",
    // Social
    close: "Close",
    contact: "Contact",
    // Search and filters
    categories: "Categories",
    search: "Search...",
    allCategories: "{ All tools }",
    // Tool actions
    visit: "Visit",
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",
    delete: "Delete",
    // Add tool form
    addTool: "Add",
    toolName: "Name",
    toolDescription: "Description",
    toolCategory: "Category",
    toolUrl: "URL",
    toolImage: "Image URL",
    toolTags: "Tags (comma separated)",
    save: "Save",
    cancel: "Cancel",
    // Messages
    confirmDelete: "Are you sure you want to delete this tool?",
    noToolsFound: "No tools found",
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