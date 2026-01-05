
import React, { useState } from 'react';
import { 
  LayoutDashboard, Building2, Wallet, Users, CreditCard, 
  Network, Settings, Code, ChevronRight, ChevronLeft, ChevronDown 
} from 'lucide-react';
import { SHARED_THEME } from '../theme';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle, activeTab, setActiveTab }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    entreprise: true,
    collectes: true,
    clients: true,
    paiements: true,
    parametres: true,
    api: true,
  });

  const toggleSubmenu = (id: string) => {
    if (!isCollapsed) setExpandedMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: "Tableau de bord" },
    { 
      id: 'entreprise', icon: <Building2 size={20} />, label: "Entreprise", hasSubmenu: true,
      subItems: [{ id: 'entreprise-details', label: 'Nümtema AGENCY' }]
    },
    { 
      id: 'collectes', icon: <Wallet size={20} />, label: "Collectes", hasSubmenu: true,
      subItems: [
        { id: 'all-collectes', label: 'Toutes les collectes' },
        { id: 'new-collecte', label: 'Nouvelle collecte' }
      ]
    },
    { 
      id: 'clients', icon: <Users size={20} />, label: "Clients", hasSubmenu: true,
      subItems: [
        { id: 'all-clients', label: 'Tous les clients' },
        { id: 'new-client', label: 'Nouveau client' },
        { id: 'import-clients', label: 'Importer des clients' }
      ]
    },
    { 
      id: 'paiements', icon: <CreditCard size={20} />, label: "Paiements", hasSubmenu: true,
      subItems: [{ id: 'all-payments', label: 'Tous les paiements' }]
    },
    { id: 'affiliation', icon: <Network size={20} />, label: "Affiliation" },
    { id: 'settings', icon: <Settings size={20} />, label: "Paramètres", hasSubmenu: true },
    { id: 'api', icon: <Code size={20} />, label: "API", hasSubmenu: true },
  ];

  return (
    <aside 
      className="fixed top-0 left-0 h-full border-r flex flex-col transition-all duration-300 z-40"
      style={{ 
        width: isCollapsed ? SHARED_THEME.sidebarCollapsedWidth : SHARED_THEME.sidebarWidth,
        backgroundColor: 'var(--bg-sidebar)',
        borderColor: 'var(--border-color)'
      }}
    >
      {/* Brand Header */}
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-center gap-3">
          <div 
            className="w-11 h-11 shadow-sm border flex items-center justify-center overflow-hidden shrink-0 bg-white"
            style={{ 
              borderColor: 'var(--border-color)',
              borderRadius: '12px'
            }}
          >
             <img src="https://picsum.photos/seed/numtemalogo/40/40" alt="logo" className="w-8 h-8 object-contain" />
          </div>
          {!isCollapsed && (
            <div className="leading-tight">
              <h2 className="font-bold text-[15px]" style={{ color: 'var(--text-title)' }}>Nümtema AGENCY</h2>
              <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Entreprise ( FREE )</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-4 overflow-y-auto mt-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button 
              onClick={() => {
                if (item.hasSubmenu) toggleSubmenu(item.id);
                setActiveTab(item.id);
              }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group ${
                activeTab === item.id || (item.id === 'settings' && activeTab === 'parametres')
                ? '' 
                : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              style={{ 
                backgroundColor: (activeTab === item.id || (item.id === 'settings' && activeTab === 'parametres')) ? 'var(--primary-soft)' : 'transparent',
                color: (activeTab === item.id || (item.id === 'settings' && activeTab === 'parametres')) ? 'var(--primary)' : 'var(--text-body)'
              }}
            >
              <span style={{ color: (activeTab === item.id || (item.id === 'settings' && activeTab === 'parametres')) ? 'var(--primary)' : 'var(--text-muted)' }}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <>
                  <span className="text-[14px] font-medium flex-1 text-left">{item.label}</span>
                  {item.hasSubmenu && (
                    <div className="opacity-40">
                      {expandedMenus[item.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </div>
                  )}
                </>
              )}
            </button>

            {/* Submenu */}
            {!isCollapsed && item.hasSubmenu && expandedMenus[item.id] && item.subItems && (
              <div className="ml-12 mt-2 space-y-2 mb-4">
                {item.subItems.map(subItem => (
                  <button 
                    key={subItem.id}
                    onClick={() => setActiveTab(subItem.id)}
                    className={`w-full text-left text-[13px] transition-all ${
                      activeTab === subItem.id ? 'font-semibold' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ color: activeTab === subItem.id ? 'var(--text-title)' : 'var(--text-muted)' }}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer User */}
      <div className="p-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${isCollapsed ? 'justify-center' : ''}`}
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
           <div className="w-10 h-10 bg-[#FF4D00] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
             TA
           </div>
           {!isCollapsed && (
             <div className="flex-1 overflow-hidden">
               <h4 className="font-bold text-[12px] truncate" style={{ color: 'var(--text-title)' }}>TAGNE OUOGUE</h4>
               <p className="text-[10px] truncate opacity-60" style={{ color: 'var(--text-body)' }}>numtemadigitalmar...</p>
             </div>
           )}
           {!isCollapsed && <ChevronDown size={14} className="opacity-40" />}
        </div>
      </div>

      {/* Collapse button */}
      <button 
        onClick={onToggle}
        className="absolute top-7 -right-3 w-7 h-7 bg-white border rounded-full flex items-center justify-center shadow-md text-gray-400 hover:text-gray-600 transition-all dark:bg-gray-800"
        style={{ borderColor: 'var(--border-color)' }}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
};

export default Sidebar;
