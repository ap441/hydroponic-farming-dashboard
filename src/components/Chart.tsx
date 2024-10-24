import React from 'react';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

const Chart: React.FC = () => {
  // Simulated data for the chart
  const data = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    temperature: 20 + Math.random() * 5,
    humidity: 60 + Math.random() * 10,
    nutrients: 80 + Math.random() * 20,
  }));

  const maxValue = Math.max(...data.map(d => Math.max(d.temperature, d.humidity, d.nutrients)));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className="h-6 w-6 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Growth Analytics</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-1.5 border rounded-lg hover:bg-gray-50">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Last 24 Hours</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">Export Data</span>
          </button>
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end space-x-2">
          {data.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end space-y-1">
              <div
                className="bg-blue-200 rounded-t"
                style={{ height: `${(d.humidity / maxValue) * 100}%` }}
              />
              <div
                className="bg-green-200 rounded-t"
                style={{ height: `${(d.nutrients / maxValue) * 100}%` }}
              />
              <div
                className="bg-orange-200 rounded-t"
                style={{ height: `${(d.temperature / maxValue) * 100}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-200 rounded" />
          <span className="text-sm text-gray-600">Temperature</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-200 rounded" />
          <span className="text-sm text-gray-600">Humidity</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-200 rounded" />
          <span className="text-sm text-gray-600">Nutrients</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;