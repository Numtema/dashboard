
import React from 'react';
import { PanelLeft, Volume2, Moon, Sun, Bell, ChevronDown, Zap } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, isDarkMode, toggleDarkMode }) => {
  const getBreadcrumb = () => {
    switch(activeTab) {
      case 'dashboard': return 'Dashboard - Welcome';
      case 'api': return 'Dashboard - Api';
      case 'new-collecte': return 'Dashboard - Collections - Create';
      case 'settings':
      case 'parametres': return 'Dashboard - Settings';
      default: return `Dashboard - ${activeTab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
    }
  };

  return (
    <nav className="h-16 px-8 flex items-center justify-between border-b transition-all duration-300 backdrop-blur-md sticky top-0 z-30"
      style={{ backgroundColor: 'rgba(var(--bg-surface-rgb), 0.8)', borderColor: 'var(--border-color)' }}>
      
      <div className="flex items-center gap-6">
        <PanelLeft size={20} className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity" style={{ color: 'var(--text-title)' }} />
        <div className="flex items-center gap-2 text-[15px] font-medium">
          <span style={{ color: 'var(--text-title)' }}>{getBreadcrumb()}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 font-bold text-[12px] px-5 py-2 rounded-full border transition-all hover:scale-105"
          style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'rgba(255, 77, 0, 0.2)', color: 'var(--primary)' }}>
          <Zap size={14} fill="currentColor" />
          Upgrade
        </button>

        <div className="flex items-center gap-5" style={{ color: 'var(--text-muted)' }}>
          <button className="hover:opacity-70 transition-opacity"><Volume2 size={20} /></button>
          
          <button onClick={toggleDarkMode} className="hover:opacity-70 transition-opacity">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hover:opacity-70 transition-opacity relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2" style={{ borderColor: 'var(--bg-surface)' }}></span>
          </button>
        </div>

        <div className="h-4 w-px bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="text-[14px] font-semibold" style={{ color: 'var(--text-title)' }}>Français</span>
          <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
