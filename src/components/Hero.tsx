import React from 'react';
import { Play, Volume2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://github.com/Lewisweru/icymax/raw/main/Media/WhatsApp%20Image%202023-11-12%20at%2022.05.47_8353918c%20(1)%20(1).jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Taste of Icy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            New Album "Up N' Coming" Out Now
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-purple-700 transition-colors">
              <Play className="w-5 h-5" />
              <span>Listen Now</span>
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-white/10 transition-colors">
              <Volume2 className="w-5 h-5" />
              <span>Latest Release</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
