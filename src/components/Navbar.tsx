import React, { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Music2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">Icy Max</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#albums" className="text-white/80 hover:text-white transition-colors">Albums</a>
            <a href="#videos" className="text-white/80 hover:text-white transition-colors">Videos</a>
            {/* <a href="#tour" className="text-white/80 hover:text-white transition-colors">Tour</a> */}
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md">
          <div className="px-4 py-2">
            <a href="#home" className="block py-3 text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#albums" className="block py-3 text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Albums</a>
            <a href="#videos" className="block py-3 text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Videos</a>
            { /*<a href="#tour" className="block py-3 text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Tour</a> */}
            <a href="#contact" className="block py-3 text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}