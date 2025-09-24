import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage('toolframe-favorites', []);

  const addToFavorites = (toolId) => {
    setFavorites(prev => [...prev, toolId]);
  };

  const removeFromFavorites = (toolId) => {
    setFavorites(prev => prev.filter(id => id !== toolId));
  };

  const toggleFavorite = (toolId) => {
    if (favorites.includes(toolId)) {
      removeFromFavorites(toolId);
    } else {
      addToFavorites(toolId);
    }
  };

  const isFavorite = (toolId) => {
    return favorites.includes(toolId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};