
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Fix: Added theme prop to interface to support dark mode and consistency across the app
interface ApiKeyCardProps {
  label: string;
  value: string;
  isSandbox?: boolean;
  theme: any;
}

const ApiKeyCard: React.FC<ApiKeyCardProps> = ({ label, value, theme }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="border rounded-2xl p-6 flex items-center justify-between group transition-all duration-300"
      style={{ 
        backgroundColor: theme.colors.surface, 
        borderColor: theme.colors.border,
        boxShadow: `0 4px 12px ${theme.colors.border}`
      }}
    >
      <div className="space-y-1">
        <h3 className="font-semibold" style={{ color: theme.colors.text.title }}>{label}</h3>
      </div>
      
      <div className="flex items-center gap-4">
        <code 
          className="text-sm font-mono px-3 py-1 rounded-md"
          style={{ backgroundColor: theme.colors.bg, color: theme.colors.text.muted }}
        >
          {value}
        </code>
        <button 
          onClick={handleCopy}
          className="text-white px-6 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 active:scale-95 shadow-md"
          style={{ backgroundColor: theme.colors.primary }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primaryHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primary)}
        >
          {copied ? (
            <>
              <Check size={16} />
              Copié
            </>
          ) : (
            'Copier'
          )}
        </button>
      </div>
    </div>
  );
};

export default ApiKeyCard;
