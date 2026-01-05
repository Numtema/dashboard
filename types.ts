
// Fix: Import React to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
}

export interface ApiKeyData {
  label: string;
  value: string;
  isSandbox?: boolean;
}