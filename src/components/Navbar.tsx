import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stories', href: '#map-section' },
    { label: 'Submit', href: '#submit' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#dda744] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-[#c45a3a] to-[#b34d2f] p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className={`font-serif font-bold transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  <span className="text-[#1a1a1a]">Kolkata Katha</span>
                  <span className="text-[#c45a3a]"> AI</span>
                </h1>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-[#c45a3a]' : 'text-gray-800 hover:text-[#c45a3a]'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dda744] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Share Story</span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 animate-slide-down border-4 border-[#dda744]/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#c45a3a] transition-colors py-2 border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 mt-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Share Story</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
