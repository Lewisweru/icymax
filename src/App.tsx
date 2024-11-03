import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Albums } from './components/Albums';
import { Videos } from './components/Videos';
// import { Tour } from './components/Tour';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Albums />
      <Videos />
      {/*<Tour />*/}
      <Contact />
    </div>
  );
}

export default App;