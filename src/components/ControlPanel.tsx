import React from 'react';
import { Sun, Moon, Droplet, Wind, Power } from 'lucide-react';

const ControlPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">System Controls</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Light Control */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Sun className="h-5 w-5 text-amber-500" />
              <span className="font-medium">Lighting</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            defaultValue="75"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0%</span>
            <span>75%</span>
          </div>
        </div>

        {/* Temperature Control */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Wind className="h-5 w-5 text-blue-500" />
              <span className="font-medium">HVAC</span>
            </div>
            <Power className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex justify-center">
            <div className="text-3xl font-bold text-gray-800">23°C</div>
          </div>
          <div className="flex justify-between mt-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">-</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">+</button>
          </div>
        </div>

        {/* Watering Schedule */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Droplet className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Irrigation</span>
            </div>
            <span className="text-sm text-gray-500">Next: 2h</span>
          </div>
          <div className="space-y-2">
            {['06:00', '12:00', '18:00', '00:00'].map((time) => (
              <div key={time} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm">{time}</span>
                <input type="checkbox" defaultChecked className="rounded text-green-600" />
              </div>
            ))}
          </div>
        </div>

        {/* Light Schedule */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Moon className="h-5 w-5 text-indigo-500" />
              <span className="font-medium">Light Cycle</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">On</span>
            <input
              type="time"
              defaultValue="06:00"
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Off</span>
            <input
              type="time"
              defaultValue="20:00"
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">14h/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;