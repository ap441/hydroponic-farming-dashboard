import React from 'react';
import { Camera, Film, Play, Maximize2 } from 'lucide-react';

const CameraFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Live Camera Feed</h3>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Film className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Maximize2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1000"
          alt="Hydroponic System"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-black/50 text-white px-3 py-1 rounded-full">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm">Live</span>
          </div>
          <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors">
            <Play className="h-4 w-4 text-white" fill="white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {[...Array(4)].map((_, i) => (
          <button
            key={i}
            className="aspect-video bg-gray-100 rounded-lg overflow-hidden hover:ring-2 ring-green-500 transition-all"
          >
            <img
              src={`https://images.unsplash.com/photo-${1558449028 + i}-b53a39d100fc?auto=format&fit=crop&q=80&w=200`}
              alt={`Camera ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CameraFeed;