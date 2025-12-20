import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useTranslation } from './useTranslations';
import toolsData from '../data/tools.json';

export const useTools = () => {
  const { language } = useTranslation();
  const [tools, setTools] = useLocalStorage('toolframe-tools', toolsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);

  // Get filtered tools based on search, category and tags
  const filteredTools = tools.filter(tool => {
    // Search filter
    const matchesSearch = searchTerm === '' || 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tool.description && tool.description[language] && 
       tool.description[language].toLowerCase().includes(searchTerm.toLowerCase())) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    // Category filter
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => tool.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  // Add new tool
  const addTool = (newTool) => {
    const toolWithId = {
      ...newTool,
      id: `tool-${Date.now()}`
    };
    setTools(prev => [...prev, toolWithId]);
  };

  // Remove tool
  const removeTool = (toolId) => {
    setTools(prev => prev.filter(tool => tool.id !== toolId));
  };

  // Update tool
  const updateTool = (toolId, updatedTool) => {
    setTools(prev => prev.map(tool => 
      tool.id === toolId ? { ...tool, ...updatedTool } : tool
    ));
  };

  // Get all unique tags
  const allTags = [...new Set(tools.flatMap(tool => tool.tags))];

  // Get all unique categories
  const allCategories = [...new Set(tools.map(tool => tool.category))];

  return {
    tools: filteredTools,
    allTools: tools,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    setSelectedTags,
    addTool,
    removeTool,
    updateTool,
    allTags,
    allCategories
  };
};