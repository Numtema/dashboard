
import React from 'react';
import { Wallet, ArrowUp, Info, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

interface DashboardViewProps {
  theme: any;
}

const DashboardView: React.FC<DashboardViewProps> = ({ theme }) => {
  return (
    <div className="max-w-6xl">
      {/* Greeting Header */}
      <div className="flex items-start gap-5 mb-12">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ 
            backgroundColor: theme.colors.primarySoft, 
            color: theme.colors.primary 
          }}
        >
          <Sparkles size={32} />
        </div>
        <div>
          <h1 className="text-[32px] font-bold tracking-tight" style={{ color: theme.colors.text.title }}>
            Bon après-midi, <span className="uppercase">Tagne !</span>
          </h1>
          <p className="text-[14px] font-medium mt-1" style={{ color: theme.colors.text.muted }}>
            J'espère que tu passes une excellente journée !
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Solde actuel */}
        <div 
          className="border rounded-[32px] p-10 flex flex-col justify-center min-h-[220px] transition-all hover:translate-y-[-4px]"
          style={{ 
            backgroundColor: theme.colors.surface, 
            borderColor: theme.colors.border 
          }}
        >
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-6xl font-bold" style={{ color: theme.colors.text.title }}>0</span>
            <span className="text-xl font-bold" style={{ color: theme.colors.text.muted }}>XAF</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center text-white">
              <Wallet size={18} />
            </div>
            <span className="font-semibold text-[14px]" style={{ color: theme.colors.text.body }}>Solde actuel</span>
            <Info size={16} className="opacity-30 ml-1 cursor-help" />
          </div>
        </div>

        {/* Card 2: Montant total retiré */}
        <div 
          className="border rounded-[32px] p-10 flex flex-col justify-center min-h-[220px] transition-all hover:translate-y-[-4px]"
          style={{ 
            backgroundColor: theme.colors.surface, 
            borderColor: theme.colors.border 
          }}
        >
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-6xl font-bold" style={{ color: theme.colors.text.title }}>0</span>
            <span className="text-xl font-bold" style={{ color: theme.colors.text.muted }}>XAF</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme.colors.primary }}>
              <ArrowUp size={18} />
            </div>
            <span className="font-semibold text-[14px]" style={{ color: theme.colors.text.body }}>Montant total retiré</span>
            <Info size={16} className="opacity-30 ml-1 cursor-help" />
          </div>
        </div>

        {/* Card 3: Metrics summary */}
        <div 
          className="border rounded-[32px] p-10 flex flex-col justify-center min-h-[220px] transition-all hover:translate-y-[-4px]"
          style={{ 
            backgroundColor: theme.colors.surface, 
            borderColor: theme.colors.border 
          }}
        >
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-6xl font-bold" style={{ color: theme.colors.text.title }}>0</span>
            <span className="text-xl font-bold" style={{ color: theme.colors.text.muted }}>XAF</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              <TrendingUp size={18} />
            </div>
            <span className="font-semibold text-[14px]" style={{ color: theme.colors.text.body }}>Volume mensuel</span>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 border rounded-[24px] flex items-center gap-6" style={{ backgroundColor: theme.colors.primarySoft, borderColor: theme.colors.border }}>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF4D00] shadow-sm">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h4 className="font-bold text-[16px]" style={{ color: theme.colors.text.title }}>Compte vérifié</h4>
          <p className="text-[13px]" style={{ color: theme.colors.text.body }}>Votre compte Nümtema AGENCY est entièrement configuré et sécurisé.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
