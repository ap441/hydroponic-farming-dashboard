import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const AlertsList: React.FC = () => {
  const alerts = [
    {
      type: 'warning',
      message: 'pH levels above normal range',
      time: '2 minutes ago',
    },
    {
      type: 'success',
      message: 'Nutrient levels optimized',
      time: '15 minutes ago',
    },
    {
      type: 'warning',
      message: 'Water temperature rising',
      time: '1 hour ago',
    },
    {
      type: 'success',
      message: 'CO2 levels stabilized',
      time: '2 hours ago',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Alerts</h3>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
          >
            {alert.type === 'warning' ? (
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="text-sm text-gray-800">{alert.message}</p>
              <span className="text-xs text-gray-500">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-sm text-green-600 hover:text-green-700 font-medium">
        View All Alerts
      </button>
    </div>
  );
};

export default AlertsList;