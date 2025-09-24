export const CATEGORIES = {
  'librerias-react': {
    id: 'librerias-react',
    nameES: '{ Librerías React }',
    nameEN: '{ React Libraries }'
  },
  'css-tools': {
    id: 'css-tools', 
    nameES: '{ Herramientas CSS }',
    nameEN: '{ CSS Tools }'
  },
  'iconos': {
    id: 'iconos',
    nameES: '{ Iconos }',
    nameEN: '{ Icons }'
  },
  'ui-components': {
    id: 'ui-components',
    nameES: '{ Componentes UI }',
    nameEN: '{ UI Components }'
  },
  'design-tools': {
    id: 'design-tools',
    nameES: '{ Herramientas de Diseño }',
    nameEN: '{ Design Tools }'
  },
  'stock-images': {
    id: 'stock-images',
    nameES: '{ Imágenes de Stock }',
    nameEN: '{ Stock Images }'
  },
  'edit-images': {
    id: 'edit-images',
    nameES: '{ Editar Imágenes }',
    nameEN: '{ Edit Images }'
  },
  
};

export const getCategoryName = (categoryId, language = 'es') => {
  const category = CATEGORIES[categoryId];
  if (!category) return categoryId;
  return language === 'es' ? category.nameES : category.nameEN;
};

export const getAllCategories = () => Object.values(CATEGORIES);