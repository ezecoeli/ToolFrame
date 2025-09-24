import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslations';
import { CATEGORIES } from '../utils/constants';

const AddToolModal = ({ isOpen, onClose, onSave }) => {
  const { t, language } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    url: '',
    image: '',
    tags: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTool = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    
    onSave(newTool);
    setFormData({
      name: '',
      description: '',
      category: '',
      url: '',
      image: '',
      tags: ''
    });
    onClose();
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-east-bay-200 bg-east-bay-50">
          <h2 className="text-xl font-semibold text-east-bay-950">
            // {t('addToolmodal')}
          </h2>
          <button
            onClick={onClose}
            className="text-east-bay-400 hover:text-east-bay-600 transition-colors duration-200 p-1 hover:bg-east-bay-100 rounded"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolName')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolDescription')}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none resize-vertical transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolCategory')}
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none transition-all duration-200 bg-white"
            >
              <option value="">{t('selectCategory')}</option>
              {Object.values(CATEGORIES).map(category => (
                <option key={category.id} value={category.id}>
                  {language === 'es' ? category.nameES : category.nameEN}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolUrl')}
            </label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolImage')}
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-east-bay-700 mb-2">
              {t('toolTags')}
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="react, icons, components"
              className="w-full px-3 py-2 border border-east-bay-300 rounded-md focus:border-east-bay-500 focus:ring-2 focus:ring-east-bay-200 outline-none transition-all duration-200"
            />
            
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-east-bay-300 text-east-bay-700 rounded-md hover:bg-east-bay-50 transition-colors duration-200 font-medium"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-east-bay-600 text-white rounded-md hover:bg-east-bay-700 transition-colors duration-200 font-medium"
            >
              {t('save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToolModal;