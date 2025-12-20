import { useState } from 'react';
import { LanguageContext } from './LanguageContext';

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
    suggestion: "Intenta cambiar la categoría seleccionada o el término de búsqueda.",
    // Footer
    rights: "Todos los derechos reservados."
  },

  en: {
    // header
    logoDescription: "=> Free resource hub for developers",
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
    suggestion: "Try changing the selected category or search term.",
    // Footer
    rights: "All rights reserved."
  },
};

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
