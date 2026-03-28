import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToMap = () => {
    document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf7f2] px-6">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />

      <div className="floating-illustration absolute top-20 left-10 opacity-40 animate-float-slow">
        <div className="w-32 h-32 text-[#c45a3a]">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,80 L30,20 L40,20 L50,80 L40,80 L38,60 L32,60 L30,80 Z M33,50 L37,50 L35,30 Z" />
            <rect x="55" y="20" width="8" height="60" />
            <rect x="55" y="20" width="25" height="8" />
            <rect x="55" y="46" width="20" height="8" />
          </svg>
        </div>
      </div>

      <div className="floating-illustration absolute top-40 right-20 opacity-30 animate-float-medium">
        <div className="w-40 h-40 text-[#dda744]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="20" y="30" width="60" height="40" />
            <line x1="20" y1="40" x2="80" y2="40" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="20" y1="60" x2="80" y2="60" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <line x1="10" y1="70" x2="90" y2="70" strokeWidth="3" />
            <circle cx="25" cy="75" r="5" fill="currentColor" />
            <circle cx="75" cy="75" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="floating-illustration absolute bottom-32 left-1/4 opacity-25 animate-float-fast">
        <div className="w-24 h-24 text-[#c45a3a]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="40" r="15" />
            <path d="M35,55 Q30,70 35,80 L65,80 Q70,70 65,55 Z" fill="currentColor" opacity="0.5" />
            <line x1="30" y1="85" x2="70" y2="85" strokeWidth="3" />
          </svg>
        </div>
      </div>

      <div className="floating-illustration absolute bottom-20 right-1/3 opacity-35 animate-float-medium">
        <div className="w-28 h-28 text-[#dda744]">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <rect x="35" y="50" width="30" height="8" />
            <path d="M30,50 L50,20 L70,50 Z" opacity="0.7" />
            <rect x="45" y="58" width="10" height="20" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#dda744]/30 shadow-sm mb-8">
            <span className="text-[#c45a3a] font-medium text-sm tracking-wide">Where Memories Become Heritage</span>
          </div>
        </div>

        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] mb-6 leading-tight">
          Kolkata Katha
          <span className="block text-5xl md:text-6xl lg:text-7xl mt-2 text-[#c45a3a] relative">
            AI
            <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-2" viewBox="0 0 120 8" fill="none">
              <path d="M2 6 Q30 2, 60 4 T118 6" stroke="#dda744" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
          A living archive of Kolkata's stories, curated with AI
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-12 font-light italic max-w-xl mx-auto">
          From the adda at College Street to the dhak of Durga Pujo—every memory shapes our city's soul
        </p>

        <button
          onClick={scrollToMap}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#c45a3a] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#b34d2f] overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#dda744]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative">View Stories on Map</span>
          <ArrowDown className="relative w-5 h-5 animate-bounce" />
        </button>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#dda744] rounded-full animate-pulse"></div>
            <span>1,247 Stories</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c45a3a] rounded-full animate-pulse"></div>
            <span>AI Curated</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce-slow">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
