
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './components/DashboardView';
import ApiView from './components/ApiView';
import CreateCollectionView from './components/CreateCollectionView';
import SettingsView from './components/SettingsView';
import ChatButton from './components/ChatButton';
import { THEMES, SHARED_THEME } from './theme';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('settings'); // Start on Settings to match screenshot
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply theme variables to document root
  useEffect(() => {
    const theme = isDarkMode ? THEMES.dark : THEMES.light;
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [isDarkMode]);

  // Fix: Create a theme object that maps to the CSS variables defined in theme.ts.
  // This resolves the missing 'theme' prop errors in sub-components while ensuring 
  // they still respond to the global theme changes.
  const currentTheme = {
    colors: {
      primary: 'var(--primary)',
      primarySoft: 'var(--primary-soft)',
      primaryHover: 'var(--primary)', // Fallback as hover state is not explicitly defined in THEMES
      surface: 'var(--bg-surface)',
      border: 'var(--border-color)',
      bg: 'var(--bg-app)',
      text: {
        title: 'var(--text-title)',
        body: 'var(--text-body)',
        muted: 'var(--text-muted)'
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      // Fix: Passed the theme prop to DashboardView, ApiView, and CreateCollectionView
      case 'dashboard': return <DashboardView theme={currentTheme} />;
      case 'api': return <ApiView theme={currentTheme} />;
      case 'new-collecte': return <CreateCollectionView theme={currentTheme} />;
      case 'settings':
      case 'parametres': return <SettingsView />;
      default: return <DashboardView theme={currentTheme} />;
    }
  };

  return (
    <div 
      className="flex min-h-screen transition-colors duration-500 font-['Outfit']"
      style={{ backgroundColor: 'var(--bg-app)' }}
    >
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div 
        className="flex-1 transition-all duration-300 ease-in-out flex flex-col" 
        style={{ 
          marginLeft: isSidebarCollapsed ? SHARED_THEME.sidebarCollapsedWidth : SHARED_THEME.sidebarWidth 
        }}
      >
        <Navbar 
          activeTab={activeTab} 
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
        
        <main className="p-10 flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Fix: Passed the theme prop to ChatButton to resolve missing property error */}
      <ChatButton theme={currentTheme} />
    </div>
  );
};

export default App;
