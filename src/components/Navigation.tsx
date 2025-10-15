import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-violet rounded-lg flex items-center justify-center glow">
            <span className="text-xl font-orbitron font-bold">RI</span>
          </div>
          <span className="text-lg font-orbitron font-bold gradient-text">RAMESTHA INFOMMERSIVE</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`font-medium transition-all duration-300 hover:text-neon-blue relative group ${
                currentPage === item.toLowerCase() ? 'text-neon-blue' : 'text-white'
              }`}
            >
              {item}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue transform origin-left transition-transform duration-300 ${
                  currentPage === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </button>
          ))}
          <button className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full font-medium hover:glow transition-all duration-300">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-neon-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavigate(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 font-medium transition-colors ${
                currentPage === item.toLowerCase() ? 'text-neon-blue' : 'text-white hover:text-neon-blue'
              }`}
            >
              {item}
            </button>
          ))}
          <button className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
