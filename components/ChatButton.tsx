
import React from 'react';
import { Headphones } from 'lucide-react';

const ChatButton: React.FC<{ theme: any }> = ({ theme }) => {
  return (
    <button 
      className="fixed bottom-6 right-6 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all z-50 group"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <Headphones size={24} className="group-hover:animate-pulse" />
    </button>
  );
};

export default ChatButton;
