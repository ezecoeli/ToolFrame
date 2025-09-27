import React, { useState } from 'react';
import { FaStar, FaTimes, FaRegStar, FaTrash, FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslations';
import { useFavorites } from '../hooks/useFavorites';

// Importar todas las imágenes de tools-images
const toolImages = import.meta.glob('../assets/tools-images/*.png', { eager: true });

const ToolCard = ({ tool, onDelete }) => {
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showImageModal, setShowImageModal] = useState(false);

  // Extraer el nombre del archivo de la ruta completa
  const getImageSrc = (imagePath) => {
    if (!imagePath) return null;
    
    // Extraer el nombre del archivo
    const fileName = imagePath.split('/').pop();
    
    // Construir la clave para el objeto de imágenes
    const imageKey = `../assets/tools-images/${fileName}`;
    
    // Retornar la URL procesada por Vite
    return toolImages[imageKey]?.default || null;
  };

  const imageSrc = getImageSrc(tool.image);

  const handleDelete = () => {
    if (window.confirm(t('confirmDelete'))) {
      onDelete(tool.id);
    }
  };

  const handleVisit = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="card bg-white border border-east-bay-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-video w-full bg-east-bay-100 flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <>
              <img 
                src={imageSrc} 
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Preview Button Overlay */}
              <button
                onClick={() => setShowImageModal(true)}
                title={`${t('enlargeImage')} - ${tool.name}`}
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
              >
                <FaSearchPlus className="text-white text-2xl" />
              </button>
            </>
          ) : (
            <div className="w-full h-full bg-east-bay-100 flex items-center justify-center text-east-bay-600">
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-east-bay-950 group-hover:text-east-bay-700 transition-colors duration-200 flex-1 pr-2">
              {tool.name}
            </h3>
            <button
              onClick={() => toggleFavorite(tool.id)}
              className="text-east-bay-400 hover:text-yellow-500 transition-colors duration-200 flex-shrink-0"
              title={isFavorite(tool.id) ? t('removeFromFavorites') : t('addToFavorites')}
            >
              {isFavorite(tool.id) ? (
                <FaStar className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaRegStar className="w-5 h-5" />
              )}
            </button>
          </div>

          <p className="text-east-bay-700 text-sm mb-4 line-clamp-2 flex-1">
            {tool.description}
          </p>

          {tool.tags && tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {tool.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-east-bay-100 text-east-bay-700 text-xs rounded-full border border-east-bay-200"
                >
                  {tag}
                </span>
              ))}
              {tool.tags.length > 3 && (
                <span className="px-2 py-1 text-east-bay-500 text-xs">
                  +{tool.tags.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex gap-2 mt-auto">
            <button
              onClick={handleVisit}
              className="flex-1 bg-east-bay-600 hover:bg-east-bay-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              {t('visit')}
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
              title={t('delete')}
            >
              <FaTrash className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && imageSrc && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={imageSrc} 
              alt={tool.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 bg-east-bay-300 text-black rounded-full p-2 hover:bg-east-bay-100 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 bg-east-bay-900 bg-opacity-80 text-white px-4 py-2 rounded">
              <h4 className="font-bold">{tool.name}:</h4>
              <p className="text-sm opacity-90">{tool.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToolCard;