import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const albums = [
  {
    id: 1,
    title: "Up N' Coming",
    year: "2024",
    cover: "Media/Up N' coming album cover.jpg",
    tracks: ["Sitawahi tense", "Action Night", "Kazana", "Don't stop"]
  },
  {
    id: 2,
    title: "Digital Soul",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80",
    tracks: ["Binary Code", "Virtual Reality", "Digital Dreams", "Future Past"]
  },
  {
    id: 3,
    title: "Quantum",
    year: "2020",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80",
    tracks: ["Time Machine", "Space Walk", "Nebula", "Event Horizon"]
  }
];

export function Albums() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="albums" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Albums</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className={`group flex items-center space-x-4 p-4 rounded-lg transition-colors cursor-pointer
                  ${activeAlbum.id === album.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                onClick={() => setActiveAlbum(album)}
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{album.title}</h3>
                  <p className="text-white/60">{album.year}</p>
                </div>
                {activeAlbum.id === album.id && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(!isPlaying);
                      }}
                      className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src={activeAlbum.cover}
              alt={activeAlbum.title}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl"
            />
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">{activeAlbum.title}</h3>
              <ul className="space-y-4">
                {activeAlbum.tracks.map((track, index) => (
                  <li
                    key={track}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white/80">{index + 1}. {track}</span>
                    <button className="p-2 hover:bg-purple-600 rounded-full transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
