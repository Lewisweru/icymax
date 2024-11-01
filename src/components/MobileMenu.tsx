import React from 'react';
import { X } from 'lucide-react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="px-4 py-2">
          <a href="#" className="block py-3 text-gray-700 hover:text-gray-900">Shop</a>
          <a href="#" className="block py-3 text-gray-700 hover:text-gray-900">Collections</a>
          <a href="#" className="block py-3 text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="block py-3 text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </div>
  );
}