import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Kazana - Official Music Video",
    thumbnail: "https://github.com/Lewisweru/icymax/raw/main/Media/KAZANA%20UTUBE%20THUMBNAIL.png",
    youtubeId: "klCZCBNGnLU"
  },
  {
    id: 2,
    title: "Action Night - Official Visualizer",
    thumbnail: "https://github.com/Lewisweru/icymax/raw/main/Media/Actionnightcover.jpg",
    youtubeId: "RPJ5Jqlh6PQ"
  },
  {
    id: 3,
    title: "Zozah - Official Music Video",
    thumbnail: "https://github.com/Lewisweru/icymax/raw/main/Media/ZOZAHCoverArt.jpg",
    youtubeId: "3DsgC05S3VY"
  }
];

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="videos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-600/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          <button
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
