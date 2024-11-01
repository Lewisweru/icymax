import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80',
    aspect: 'aspect-square'
  },
  {
    id: 2,
    type: 'video',
    url: 'https://player.vimeo.com/external/384761655.hd.mp4?s=383040d6074bc2b12918bcf66ef7a22b5749fb0f',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80',
    aspect: 'aspect-video'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 5,
    type: 'video',
    url: 'https://player.vimeo.com/external/403293925.hd.mp4?s=f27c2956ee8c39491dee1e8c5957f04433540f25',
    thumbnail: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80',
    aspect: 'aspect-video'
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    aspect: 'aspect-[3/2]'
  }
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative ${item.aspect} cursor-pointer overflow-hidden rounded-lg`}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          <button
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          {selectedItem.type === 'image' ? (
            <img
              src={selectedItem.url}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
            />
          ) : (
            <video
              controls
              autoPlay
              className="max-w-full max-h-[90vh]"
            >
              <source src={selectedItem.url} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </section>
  );
}