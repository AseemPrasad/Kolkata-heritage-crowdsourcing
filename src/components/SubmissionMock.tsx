import { useState } from 'react';
import { Upload, MapPin, Sparkles } from 'lucide-react';

export const SubmissionMock = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [memory, setMemory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowResult(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowResult(true);
    }, 2500);
  };

  const mockCuratedStory = `In the golden hour of evening, the narrow lanes of Kumartuli came alive with a sacred energy. The air was thick with the scent of wet clay and incense, while skilled artisans' hands moved with generations of inherited grace. Each stroke of their tools breathed life into raw earth, transforming it into divine forms. Around these workshops where goddesses were born, life continued its beautiful chaos—children's laughter mixing with devotional songs, the mundane and miraculous dancing together in perfect harmony. This wasn't just craft; it was the continuation of an ancient conversation between faith, art, and community.`;

  return (
    <section className="relative bg-gradient-to-br from-[#f5ede3] via-[#faf7f2] to-[#f0e8db] py-20 px-6">
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23c45a3a'/%3E%3C/svg%3E")`,
             backgroundSize: '80px 80px',
           }}
      />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-[#dda744]/30 shadow-sm">
              <span className="text-[#c45a3a] font-medium text-sm tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Share Your Memory
              </span>
            </div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            Become Part of <span className="text-[#c45a3a]">Kolkata's</span> Heritage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your micro-memory and let AI weave it into our city's living tapestry
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#dda744]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" fill="#c45a3a">
              <circle cx="20" cy="20" r="2" />
              <circle cx="30" cy="15" r="2" />
              <circle cx="40" cy="22" r="2" />
              <circle cx="25" cy="30" r="2" />
              <circle cx="35" cy="28" r="2" />
              <path d="M20,40 Q30,35 40,40 T60,40" stroke="#dda744" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Memory <span className="text-[#c45a3a]">*</span>
              </label>
              <textarea
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                placeholder="I remember the monsoon afternoons at that small tea stall near Presidency College..."
                className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#c45a3a] focus:outline-none transition-colors resize-none font-light"
                required
              />
              <p className="text-xs text-gray-500 mt-2 italic">Share a micro-moment from your Kolkata experience</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add a Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#dda744] transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-[#dda744] transition-colors" />
                  <p className="text-sm text-gray-600">Click to upload</p>
                  <p className="text-xs text-gray-400 mt-1">or drag and drop</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <button
                  type="button"
                  className="w-full border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#dda744] transition-colors group"
                >
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-[#dda744] transition-colors" />
                  <p className="text-sm text-gray-600">Select on Map</p>
                  <p className="text-xs text-gray-400 mt-1">or type location</p>
                </button>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting || !memory.trim()}
                className="w-full bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#dda744]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="w-5 h-5 relative" />
                <span className="relative">Curate with AI</span>
              </button>
            </div>
          </form>

          {isSubmitting && (
            <div className="mt-8 animate-fade-in">
              <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5ede3] rounded-2xl p-6 border-2 border-[#dda744]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-[#c45a3a] animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Curating your memory...</span>
                </div>
                <div className="relative h-2 bg-white/50 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#c45a3a] to-[#faf7f2] animate-shimmer" />
                </div>
              </div>
            </div>
          )}

          {showResult && (
            <div className="mt-8 animate-float-up">
              <div className="bg-gradient-to-br from-white to-[#faf7f2] rounded-2xl p-8 border-4 border-[#dda744]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c45a3a] via-[#dda744] to-[#c45a3a] animate-glow" />

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-px bg-[#dda744]" />
                  <span className="text-xs uppercase tracking-wider text-[#c45a3a] font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Your Curated Story
                  </span>
                  <div className="flex-1 h-px bg-[#dda744]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">
                  Artisans of Kumartuli
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {mockCuratedStory}
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    Publish Story
                  </button>
                  <button className="px-6 border-2 border-[#c45a3a] text-[#c45a3a] py-3 rounded-xl font-medium hover:bg-[#c45a3a] hover:text-white transition-all duration-300">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-float-up {
          animation: float-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
