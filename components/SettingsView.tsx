import React from 'react';
import { ArrowRight } from 'lucide-react';

const SettingsCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="bg-[#F9FAFB]/50 border border-gray-100 rounded-[20px] p-8 flex items-center justify-between cursor-pointer transition-all hover:bg-white hover:shadow-xl group">
    <div className="flex-1 pr-4">
      <h3 className="text-[16px] font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-[13px] text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
    <div className="text-gray-900 transition-transform group-hover:translate-x-1">
      <ArrowRight size={20} strokeWidth={2.5} />
    </div>
  </div>
);

const SettingsView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white border border-gray-100 rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] min-h-[500px]">
        
        <header className="mb-10">
          <h1 className="text-[24px] font-bold text-gray-900 mb-1">Settings</h1>
          <p className="text-[14px] font-medium text-gray-400">Configure your business here</p>
          <div className="h-px w-full mt-10 bg-gray-50"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SettingsCard 
            title="Custom Business ID" 
            desc="Define how your customers identify your business." 
          />
          <SettingsCard 
            title="Billing" 
            desc="Manage your subscription and available features." 
          />
          <div className="md:col-span-1">
            <SettingsCard 
              title="Notifications" 
              desc="Manage your notifications ." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;