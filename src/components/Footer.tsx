import { Heart, BookOpen, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#2a2420] to-[#1a1410] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <rect x="50" y="80" width="120" height="180" fill="white" opacity="0.3" />
          <rect x="55" y="85" width="110" height="170" fill="none" stroke="white" strokeWidth="2" />
          <line x1="55" y1="120" x2="165" y2="120" stroke="white" strokeWidth="1" />
          <line x1="55" y1="155" x2="165" y2="155" stroke="white" strokeWidth="1" />
          <line x1="55" y1="190" x2="165" y2="190" stroke="white" strokeWidth="1" />
          <line x1="55" y1="225" x2="165" y2="225" stroke="white" strokeWidth="1" />

          <rect x="200" y="100" width="100" height="160" fill="white" opacity="0.2" />
          <rect x="205" y="105" width="90" height="150" fill="none" stroke="white" strokeWidth="1" />

          <rect x="330" y="90" width="130" height="170" fill="white" opacity="0.25" />
          <rect x="335" y="95" width="120" height="160" fill="none" stroke="white" strokeWidth="2" />
          <line x1="335" y1="130" x2="455" y2="130" stroke="white" strokeWidth="1" />
          <line x1="335" y1="165" x2="455" y2="165" stroke="white" strokeWidth="1" />
          <line x1="335" y1="200" x2="455" y2="200" stroke="white" strokeWidth="1" />

          <rect x="490" y="110" width="110" height="150" fill="white" opacity="0.2" />

          <rect x="630" y="85" width="120" height="175" fill="white" opacity="0.3" />
          <rect x="635" y="90" width="110" height="165" fill="none" stroke="white" strokeWidth="2" />
          <line x1="635" y1="125" x2="745" y2="125" stroke="white" strokeWidth="1" />
          <line x1="635" y1="160" x2="745" y2="160" stroke="white" strokeWidth="1" />
          <line x1="635" y1="195" x2="745" y2="195" stroke="white" strokeWidth="1" />

          <text x="80" y="75" fill="white" fontSize="10" opacity="0.4">বই</text>
          <text x="360" y="80" fill="white" fontSize="10" opacity="0.4">কলেজ স্ট্রিট</text>
          <text x="660" y="78" fill="white" fontSize="10" opacity="0.4">পুরানো বই</text>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-[#dda744]" />
              <h3 className="font-serif text-2xl font-bold">Kolkata Katha AI</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Preserving the soul of Kolkata, one memory at a time. A digital archive where heritage meets artificial intelligence.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 italic">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#c45a3a] animate-pulse" fill="#c45a3a" />
              <span>in Kolkata</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#dda744]">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Featured Stories', 'Submit Memory', 'Community Guidelines'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#dda744] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-[#dda744] transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#dda744]">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to receive curated stories and updates from the heart of Kolkata.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-[#dda744] focus:outline-none text-white placeholder-gray-400 backdrop-blur-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#c45a3a] to-[#b34d2f] rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © 2024 Kolkata Katha AI. A heritage storytelling initiative.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#dda744] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#dda744] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#dda744] transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm italic">
            "শহরটা শুধু রাস্তাঘাট নয়, মানুষের স্মৃতি"
          </p>
          <p className="text-gray-500 text-xs mt-2">
            The city is not just streets and buildings, but the memories of its people
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dda744] to-transparent" />
    </footer>
  );
};
