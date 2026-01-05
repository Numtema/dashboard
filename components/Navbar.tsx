import React from 'react';
import { LayoutGrid, Volume2, Moon, Sun, Bell, ChevronDown, ArrowUpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="h-20 px-10 flex items-center justify-between transition-all duration-300 bg-transparent">
      
      <div className="flex items-center gap-8">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 cursor-pointer">
          <LayoutGrid size={18} className="text-gray-600" />
        </div>
        <div className="flex items-center gap-2 text-[14px] font-medium">
          <span className="text-gray-400 hover:text-gray-900 transition-colors border-b border-gray-300 pb-0.5 cursor-pointer">Dashboard</span>
          <span className="text-gray-300 font-light">-</span>
          <span className="text-gray-900 font-semibold capitalize">Settings</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 font-bold text-[12px] px-5 py-2 rounded-full border border-gray-100 bg-white text-[#FF4D00] shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
          <div className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center text-[#FF4D00]">
            <ArrowUpCircle size={14} fill="currentColor" />
          </div>
          Upgrade
        </button>

        <div className="flex items-center gap-5 text-gray-500">
          <button className="hover:text-gray-900 transition-colors"><Volume2 size={20} /></button>
          
          <button onClick={toggleDarkMode} className="hover:text-gray-900 transition-colors">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hover:text-gray-900 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-900 text-gray-600 transition-colors">
          <span className="text-[14px] font-semibold">Français</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;