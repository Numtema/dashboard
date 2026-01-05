
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SettingsCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="bg-white dark:bg-[#161B28] border rounded-[24px] p-10 flex items-center justify-between cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 group"
    style={{ borderColor: 'var(--border-color)' }}>
    <div className="flex-1">
      <h3 className="text-[18px] font-bold mb-2" style={{ color: 'var(--text-title)' }}>{title}</h3>
      <p className="text-[14px] leading-relaxed opacity-60 font-medium" style={{ color: 'var(--text-body)' }}>{desc}</p>
    </div>
    <div className="ml-6 transition-transform group-hover:translate-x-2" style={{ color: 'var(--text-title)' }}>
      <ArrowRight size={24} strokeWidth={2.5} />
    </div>
  </div>
);

const SettingsView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="bg-white dark:bg-[#161B28] border rounded-[32px] p-12 min-h-[600px] shadow-sm"
        style={{ borderColor: 'var(--border-color)' }}>
        
        <header className="mb-12">
          <h1 className="text-[28px] font-bold mb-2" style={{ color: 'var(--text-title)' }}>Settings</h1>
          <p className="text-[15px] font-medium" style={{ color: 'var(--text-muted)' }}>Configure your business here</p>
          <div className="h-px w-full mt-10" style={{ backgroundColor: 'var(--border-color)' }}></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SettingsCard 
            title="Custom Business ID" 
            desc="Define how your customers identify your business." 
          />
          <SettingsCard 
            title="Billing" 
            desc="Manage your subscription and available features." 
          />
          <div className="lg:col-span-1">
            <SettingsCard 
              title="Notifications" 
              desc="Manage your notifications." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
