import React, { useState } from 'react';
import { 
  LayoutDashboard, Building2, Wallet, Users, CreditCard, 
  Network, Settings, Code, ChevronRight, ChevronLeft, ChevronDown, ChevronsUpDown
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
    { id: 'dashboard', icon: <LayoutDashboard size={18} />, label: "Tableau de bord" },
    { 
      id: 'entreprise', icon: <Building2 size={18} />, label: "Entreprise", hasSubmenu: true,
      subItems: [{ id: 'entreprise-details', label: 'Nümtema AGENCY' }]
    },
    { 
      id: 'collectes', icon: <Wallet size={18} />, label: "Collectes", hasSubmenu: true,
      subItems: [
        { id: 'settings', label: 'Toutes les collectes' }, // Changed to settings to match screenshot's active tab
        { id: 'new-collecte', label: 'Nouvelle collecte' }
      ]
    },
    { 
      id: 'clients', icon: <Users size={18} />, label: "Clients", hasSubmenu: true,
      subItems: [
        { id: 'all-clients', label: 'Tous les clients' },
        { id: 'new-client', label: 'Nouveau client' },
        { id: 'import-clients', label: 'Importer des clients' }
      ]
    },
    { 
      id: 'paiements', icon: <CreditCard size={18} />, label: "Paiements", hasSubmenu: true,
      subItems: [{ id: 'all-payments', label: 'Tous les paiements' }]
    },
    { id: 'affiliation', icon: <Network size={18} />, label: "Affiliation" },
    { id: 'parametres', icon: <Settings size={18} />, label: "Paramètres", hasSubmenu: true },
    { id: 'api', icon: <Code size={18} />, label: "API", hasSubmenu: true },
  ];

  return (
    <aside 
      className="fixed top-0 left-0 h-full border-r flex flex-col transition-all duration-300 z-40 bg-white"
      style={{ 
        width: isCollapsed ? SHARED_THEME.sidebarCollapsedWidth : SHARED_THEME.sidebarWidth,
        borderColor: '#E5E7EB'
      }}
    >
      {/* Brand Header */}
      <div className={`p-6 pb-2 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 border flex items-center justify-center overflow-hidden shrink-0 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
            style={{ 
              borderColor: '#F3F4F6',
              borderRadius: '10px'
            }}
          >
             <img src="https://picsum.photos/seed/numtemalogo/40/40" alt="logo" className="w-6 h-6 object-contain" />
          </div>
          {!isCollapsed && (
            <div className="leading-tight">
              <h2 className="font-bold text-[13px] tracking-tight" style={{ color: '#111827' }}>Nümtema AGENCY</h2>
              <p className="text-[10px] font-medium text-gray-400">Entreprise ( FREE )</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-4 overflow-y-auto mt-6 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            <button 
              onClick={() => {
                if (item.hasSubmenu) toggleSubmenu(item.id);
                else setActiveTab(item.id);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all group ${
                activeTab === item.id ? 'font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span className="opacity-70 group-hover:opacity-100">{item.icon}</span>
              {!isCollapsed && (
                <>
                  <span className="text-[13px] font-medium flex-1 text-left">{item.label}</span>
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
              <div className="mt-1 space-y-1">
                {item.subItems.map(subItem => {
                  const isActive = activeTab === subItem.id;
                  return (
                    <button 
                      key={subItem.id}
                      onClick={() => setActiveTab(subItem.id)}
                      className={`w-full text-left text-[12px] py-2.5 px-4 ml-6 rounded-[10px] transition-all ${
                        isActive ? 'bg-[#FF4D00] text-white font-semibold' : 'text-gray-500 hover:text-gray-900'
                      }`}
                      style={{ 
                        maxWidth: 'calc(100% - 24px)'
                      }}
                    >
                      {subItem.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer User */}
      <div className="p-4 mt-auto">
        <div className={`flex items-center gap-2 p-2 rounded-2xl transition-all ${isCollapsed ? 'justify-center' : ''}`}>
           <div className="w-10 h-10 bg-[#FF4D00] rounded-[10px] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
             TA
           </div>
           {!isCollapsed && (
             <div className="flex-1 overflow-hidden ml-1">
               <h4 className="font-bold text-[12px] truncate text-gray-900">TAGNE OUOGUE</h4>
               <p className="text-[10px] truncate text-gray-400 font-medium">numtemadigitalmar...</p>
             </div>
           )}
           {!isCollapsed && <ChevronsUpDown size={14} className="text-gray-400 ml-auto" />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;