import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const tourDates = [
  {
    id: 1,
    date: "MAR 15",
    city: "New York, NY",
    venue: "Madison Square Garden",
    status: "Sold Out"
  },
  {
    id: 2,
    date: "MAR 18",
    city: "Los Angeles, CA",
    venue: "The Forum",
    status: "Available"
  },
  {
    id: 3,
    date: "MAR 22",
    city: "Chicago, IL",
    venue: "United Center",
    status: "Available"
  },
  {
    id: 4,
    date: "MAR 25",
    city: "Toronto, ON",
    venue: "Scotiabank Arena",
    status: "Limited"
  }
];

export function Tour() {
  return (
    <section id="tour" className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Tour Dates</h2>
        
        <div className="space-y-4">
          {tourDates.map((date) => (
            <div
              key={date.id}
              className="group bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-2xl font-bold text-purple-400">{date.date}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <h3 className="text-lg font-semibold">{date.city}</h3>
                    </div>
                    <p className="text-white/60">{date.venue}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm
                    ${date.status === 'Sold Out' ? 'bg-red-500/20 text-red-400' :
                      date.status === 'Limited' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'}`}>
                    {date.status}
                  </span>
                  <button
                    className={`px-6 py-2 rounded-full transition-colors
                      ${date.status === 'Sold Out' 
                        ? 'bg-white/10 text-white/60 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700'}`}
                    disabled={date.status === 'Sold Out'}
                  >
                    {date.status === 'Sold Out' ? 'Sold Out' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}