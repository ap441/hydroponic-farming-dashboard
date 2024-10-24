import React from 'react';

interface SensorCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  chartData: number[];
}

const SensorCard: React.FC<SensorCardProps> = ({ title, value, change, icon, chartData }) => {
  const max = Math.max(...chartData);
  const min = Math.min(...chartData);
  const range = max - min;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
          <h3 className="text-gray-700 font-medium">{title}</h3>
        </div>
        <span className={`text-sm ${
          change.startsWith('+') ? 'text-green-500' : 'text-red-500'
        }`}>
          {change}
        </span>
      </div>
      
      <div className="flex items-end space-x-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <div className="flex-1 h-16">
          <div className="h-full flex items-end space-x-1">
            {chartData.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-green-100 rounded-t"
                style={{
                  height: `${((value - min) / range) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;