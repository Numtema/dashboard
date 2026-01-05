
import React, { useState } from 'react';
import { ChevronRight, Image as ImageIcon, Wallet, Banknote } from 'lucide-react';

// Fix: Define CreateCollectionViewProps to accept theme and resolve TypeScript error in App.tsx
interface CreateCollectionViewProps {
  theme: any;
}

const CreateCollectionView: React.FC<CreateCollectionViewProps> = ({ theme }) => {
  const [rejectSmallPayments, setRejectSmallPayments] = useState(false);
  const [requireUserId, setRequireUserId] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Title & Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div 
          className="p-2 border rounded-lg flex items-center gap-2 shadow-sm"
          style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
        >
           <img src="https://picsum.photos/seed/numtemalogo/40/40" alt="logo" className="w-5 h-5 object-contain" />
           <span className="text-[14px] font-bold" style={{ color: theme.colors.text.title }}>Nümtema AGENCY</span>
        </div>
        <ChevronRight size={16} style={{ color: theme.colors.text.muted }} />
        <span className="text-[14px] font-medium" style={{ color: theme.colors.text.muted }}>Créer une collecte</span>
      </div>

      <div className="mb-8">
        <h1 className="text-[20px] font-bold mb-1" style={{ color: theme.colors.text.title }}>Détails de la collecte</h1>
        <p className="text-[13px]" style={{ color: theme.colors.text.muted }}>
          Remplissez les informations ci-dessous pour créer une nouvelle collecte.
        </p>
      </div>

      <form className="space-y-8">
        {/* Image Upload Area */}
        <div>
          <label className="block text-[13px] font-bold mb-3" style={{ color: theme.colors.text.title }}>Image (optionnel)</label>
          <div 
            className="w-44 h-44 border border-dashed rounded-[20px] flex flex-col items-center justify-center cursor-pointer transition-all group"
            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
          >
            <div 
              className="p-4 rounded-2xl transition-colors mb-2"
              style={{ backgroundColor: theme.colors.bg }}
            >
              <ImageIcon size={24} style={{ color: theme.colors.text.muted }} />
            </div>
            <span className="text-[11px] font-medium" style={{ color: theme.colors.text.muted }}>Sectionnez une image</span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[13px] font-bold" style={{ color: theme.colors.text.title }}>
              Nom de la collecte <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4" style={{ color: theme.colors.text.muted }}>
                <Wallet size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Entrez le nom de la col" 
                className="w-full h-14 pl-12 pr-4 border rounded-xl text-[13px] focus:outline-none focus:ring-1 transition-all"
                style={{ 
                  backgroundColor: theme.colors.bg, 
                  borderColor: theme.colors.border, 
                  color: theme.colors.text.body,
                  outlineColor: theme.colors.primarySoft
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[13px] font-bold" style={{ color: theme.colors.text.title }}>
              Montant par défaut (optionnel, min 10 XAF)
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4" style={{ color: theme.colors.text.muted }}>
                <Banknote size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Montant par défaut" 
                className="w-full h-14 pl-12 pr-4 border rounded-xl text-[13px] focus:outline-none focus:ring-1 transition-all"
                style={{ 
                  backgroundColor: theme.colors.bg, 
                  borderColor: theme.colors.border, 
                  color: theme.colors.text.body,
                  outlineColor: theme.colors.primarySoft
                }}
              />
            </div>
          </div>
        </div>

        {/* Switches */}
        <div className="space-y-4">
          <div 
            className="border rounded-2xl p-6 flex items-center justify-between"
            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
          >
            <div className="pr-4">
              <h3 className="text-[13px] font-bold mb-1" style={{ color: theme.colors.text.title }}>Rejeter les paiements inférieurs au montant minimum</h3>
              <p className="text-[11px]" style={{ color: theme.colors.text.muted }}>Permettre aux payeurs de saisir un montant supérieur ou égal au montant par défaut.</p>
            </div>
            <button 
              type="button"
              onClick={() => setRejectSmallPayments(!rejectSmallPayments)}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0`}
              style={{ backgroundColor: rejectSmallPayments ? theme.colors.primary : theme.colors.border }}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm absolute transition-all ${rejectSmallPayments ? 'left-6' : 'left-1'}`} />
            </button>
          </div>

          <div 
            className="border rounded-2xl p-6 flex items-center justify-between"
            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
          >
            <div className="pr-4">
              <h3 className="text-[13px] font-bold mb-1" style={{ color: theme.colors.text.title }}>Exiger l'identifiant utilisateur</h3>
              <p className="text-[11px]" style={{ color: theme.colors.text.muted }}>Obliger les payeurs à fournir leur identifiant utilisateur lors du paiement.</p>
            </div>
            <button 
              type="button"
              onClick={() => setRequireUserId(!requireUserId)}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0`}
              style={{ backgroundColor: requireUserId ? theme.colors.primary : theme.colors.border }}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm absolute transition-all ${requireUserId ? 'left-6' : 'left-1'}`} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCollectionView;
