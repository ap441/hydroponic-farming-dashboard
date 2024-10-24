import React, { useState } from 'react';
import { 
  BarChart3, 
  Bell, 
  Camera, 
  Clock, 
  Droplet, 
  Gauge, 
  Home, 
  LeafyGreen, 
  Menu, 
  Settings, 
  Thermometer, 
  Users 
} from 'lucide-react';
import SensorCard from './components/SensorCard';
import CameraFeed from './components/CameraFeed';
import ControlPanel from './components/ControlPanel';
import Chart from './components/Chart';
import AlertsList from './components/AlertsList';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 p-4`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <LeafyGreen className="h-8 w-8 text-green-600" />
            {isSidebarOpen && <span className="text-xl font-bold">HydroMaster</span>}
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: <Home className="h-5 w-5" />, label: 'Dashboard' },
            { icon: <Camera className="h-5 w-5" />, label: 'Monitoring' },
            { icon: <Settings className="h-5 w-5" />, label: 'Controls' },
            { icon: <BarChart3 className="h-5 w-5" />, label: 'Analytics' },
            { icon: <Users className="h-5 w-5" />, label: 'Team' },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center space-x-3 text-gray-700 hover:bg-green-50 w-full p-2 rounded-lg transition-colors"
            >
              {item.icon}
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-gray-200"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SensorCard
            title="Temperature"
            value="23.5°C"
            change="+0.5"
            icon={<Thermometer className="h-6 w-6 text-orange-500" />}
            chartData={[21, 22, 23, 23.5, 23, 22.5, 23.5]}
          />
          <SensorCard
            title="Humidity"
            value="65%"
            change="-2"
            icon={<Droplet className="h-6 w-6 text-blue-500" />}
            chartData={[68, 67, 66, 65, 65, 64, 65]}
          />
          <SensorCard
            title="CO2 Levels"
            value="450ppm"
            change="+15"
            icon={<Gauge className="h-6 w-6 text-purple-500" />}
            chartData={[420, 425, 440, 445, 450, 448, 450]}
          />

          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <CameraFeed />
          </div>

          {/* Alerts List */}
          <div className="h-[400px]">
            <AlertsList />
          </div>

          {/* Control Panel */}
          <div className="lg:col-span-2">
            <ControlPanel />
          </div>

          {/* Growth Analytics */}
          <div className="lg:col-span-3">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;