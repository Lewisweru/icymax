import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const albums = [
  {
    id: 1,
    title: "Up N' Coming",
    year: "2024",
    cover: "https://raw.githubusercontent.com/Lewisweru/icymax/main/Media/upNComingAlbumCover.jpg",
    tracks: [
       { title: "Sitawahi tense", audio: "path/to/sitawahiTense.mp3" },
      { title: "Action Night", audio: "https://raw.githubusercontent.com/Lewisweru/icymax/main/Media/actionNightAudio.mp3" },
      { title: "Kazana", audio: "https://raw.githubusercontent.com/Lewisweru/icymax/main/Media/kazanaAudio.mp3" },
      { title: "Don't stop", audio: "path/to/dontStop.mp3" }
    ]
  },
  {
    id: 2,
    title: "Taste of ice ",
    year: "2021",
    cover: "https://github.com/Lewisweru/icymax/raw/main/Media/tasteOfIcealbumcoverphoto.jpg",
    tracks: [
      { title: "Hustle", audio: "path/to/sitawahiTense.mp3" },
      { title: "My Prayer", audio: "Media/actionNightAudio.mp3" },
      { title: "You're the type", audio: "Media/kazanaAudio.mp3" },
      { title: "Kuflex", audio: "path/to/dontStop.mp3" },
      { title: "Freak on", audio: "path/to/dontStop.mp3" },
      { title: "Christmas loving", audio: "path/to/dontStop.mp3" }
      ]
      /*"Hustle", "My Prayer", "You're the type", "Kuflex","Freak on" , "Christmas loving"]*/
  },
  /*{
    id: 3,
    title: "Quantum",
    year: "2020",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80",
    tracks: ["Time Machine", "Space Walk", "Nebula", "Event Horizon"]
  }*/
];


export function Albums() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]);
  const [currentTrack, setCurrentTrack] = useState<{ title: string; audio: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrackPlayPause = (track: { title: string; audio: string }) => {
    if (currentTrack && currentTrack.title === track.title && isPlaying) {
      // If the same track is already playing, pause it
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // If a different track is selected, change the audio source
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audio; // Set the new audio source
        audioRef.current.play();
      }
    }
  };

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
                    key={track.title}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white/80">{index + 1}. {track.title}</span>
                    <button
                      onClick={() => handleTrackPlayPause(track)}
                      className="p-2 hover:bg-purple-600 rounded-full transition-colors"
                    >
                      {currentTrack?.title === track.title && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </section>
  );
}
