import { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import { mockStories } from '../data/mockStories';
import type { Story } from '../types';

export const InteractiveMap = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activePin, setActivePin] = useState<string | null>(null);

  const handlePinClick = (story: Story) => {
    setActivePin(story.id);
    setTimeout(() => {
      setSelectedStory(story);
    }, 300);
  };

  return (
    <section id="map-section" className="relative min-h-screen bg-gradient-to-br from-[#faf7f2] to-[#f5ede3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            Stories <span className="text-[#c45a3a]">Across</span> Kolkata
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each pin holds a memory, a moment frozen in time. Click to discover the stories that make our city unforgettable.
          </p>
        </div>

        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#dda744]/20">
            <div className="relative h-[600px] bg-gradient-to-br from-[#f0e8db] to-[#e8dcc8] overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c45a3a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                   }}
              />

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                <path
                  d="M100,500 Q200,480 300,450 T500,420 T700,400"
                  stroke="#8db3d1"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.3"
                />
                <text x="650" y="390" fill="#6a8fa8" fontSize="14" opacity="0.6">Hooghly River</text>
              </svg>

              {mockStories.map((story, index) => {
                const x = ((story.coordinates.lng - 88.34) / 0.1) * 800;
                const y = 600 - ((story.coordinates.lat - 22.54) / 0.08) * 600;
                const isActive = activePin === story.id;

                return (
                  <div
                    key={story.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      animation: `pin-appear 0.6s ease-out ${index * 0.1}s backwards`,
                    }}
                    onClick={() => handlePinClick(story)}
                  >
                    {isActive && (
                      <div className="absolute inset-0 animate-ripple">
                        <div className="absolute inset-0 rounded-full border-4 border-[#dda744]" />
                      </div>
                    )}

                    <div className={`relative transition-all duration-300 ${isActive ? 'scale-125' : 'group-hover:scale-110'}`}>
                      <div className="absolute inset-0 bg-[#dda744] rounded-full blur-xl opacity-60 animate-pulse-slow" />
                      <div className="relative bg-gradient-to-br from-[#dda744] to-[#c4932f] rounded-full p-3 shadow-lg border-2 border-white">
                        <MapPin className="w-6 h-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-[#dda744]/20">
              <p className="text-sm font-medium text-gray-700">
                <span className="text-[#c45a3a] font-bold">{mockStories.length}</span> stories mapped
              </p>
            </div>
          </div>

          {selectedStory && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fade-in">
              <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-slide-up"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c45a3a] via-[#dda744] to-[#c45a3a]" />

                <button
                  onClick={() => {
                    setSelectedStory(null);
                    setActivePin(null);
                  }}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-[#dda744] text-white text-xs rounded-full mb-2">
                      {selectedStory.category}
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white mb-1">
                      {selectedStory.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {selectedStory.location} • {selectedStory.author}
                    </p>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto max-h-[400px]">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-px bg-[#dda744]" />
                      <span className="text-xs uppercase tracking-wider text-[#c45a3a] font-medium">AI Curated Memory</span>
                      <div className="flex-1 h-px bg-[#dda744]" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedStory.curatedContent}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      View Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pin-appear {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) translateY(0);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(2);
            opacity: 0.5;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ripple {
          animation: ripple 1.5s ease-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  );
};
