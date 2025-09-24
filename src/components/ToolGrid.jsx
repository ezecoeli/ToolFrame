import React from 'react';
import ToolCard from './ToolCard';
import { useTranslation } from '../hooks/useTranslations';

const ToolGrid = ({ tools, onDeleteTool }) => {
  const { t } = useTranslation();

  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-espresso-800 mb-2">
          {t('noToolsFound')}
        </h3>
        <p className="text-espresso-600">
          Intenta cambiar los filtros o el término de búsqueda
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          onDelete={onDeleteTool}
        />
      ))}
    </div>
  );
};

export default ToolGrid;