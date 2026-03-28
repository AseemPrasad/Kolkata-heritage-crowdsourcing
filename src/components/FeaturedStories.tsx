import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { mockStories } from '../data/mockStories';

export const FeaturedStories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      setScrollPosition(scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-[#faf7f2] py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" fill="#c45a3a">
          <path d="M100,20 Q120,40 100,60 T100,100 T100,140 T100,180" stroke="#dda744" strokeWidth="2" fill="none" />
          <circle cx="100" cy="20" r="4" />
          <circle cx="100" cy="60" r="4" />
          <circle cx="100" cy="100" r="4" />
          <circle cx="100" cy="140" r="4" />
          <circle cx="100" cy="180" r="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-[#dda744]/30 shadow-sm">
              <span className="text-[#c45a3a] font-medium text-sm tracking-wide">Curated Collection</span>
            </div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            Featured <span className="text-[#c45a3a]">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments that capture the essence of Kolkata, preserved and curated with care
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-2xl hover:bg-[#faf7f2] transition-all duration-300 hover:scale-110 border-2 border-[#dda744]/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-[#c45a3a]" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-2xl hover:bg-[#faf7f2] transition-all duration-300 hover:scale-110 border-2 border-[#dda744]/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-[#c45a3a]" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mockStories.map((story, index) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-[380px] group cursor-pointer"
                style={{
                  animation: `card-appear 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#dda744]/30 transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c45a3a] to-[#dda744] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#dda744]/40 rounded-xl" />
                  </div>

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <div className="bg-[#dda744] text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        {story.category}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-2xl font-bold text-white mb-1 line-clamp-2 group-hover:text-[#dda744] transition-colors duration-300">
                        {story.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3 text-sm">
                      {story.curatedContent}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{story.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(story.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">by {story.author}</span>
                        <button className="text-[#c45a3a] font-medium text-sm hover:text-[#b34d2f] transition-colors flex items-center gap-1 group/btn">
                          Read More
                          <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#c45a3a] rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#c45a3a] hover:bg-[#c45a3a] hover:text-white group">
            <span>Explore All Stories</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes card-appear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};
