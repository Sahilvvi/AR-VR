import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-black/95 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-violet rounded-lg flex items-center justify-center glow">
                <span className="text-lg font-orbitron font-bold">RI</span>
              </div>
              <span className="text-sm font-orbitron font-bold gradient-text">RAMESTHA<br/>INFOMMERSIVE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future of immersive experiences through cutting-edge AR, VR, and Mixed Reality technologies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, color: 'neon-blue' },
                { icon: <Twitter size={20} />, color: 'neon-cyan' },
                { icon: <Linkedin size={20} />, color: 'neon-violet' },
                { icon: <Instagram size={20} />, color: 'neon-blue' },
                { icon: <Youtube size={20} />, color: 'neon-cyan' },
                { icon: <Github size={20} />, color: 'neon-violet' },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 glass rounded-full flex items-center justify-center hover:holographic hover:glow transition-all duration-300 text-${social.color}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4 text-neon-blue">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4 text-neon-violet">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-neon-violet transition-colors cursor-pointer">AR Development</li>
              <li className="hover:text-neon-violet transition-colors cursor-pointer">VR Training</li>
              <li className="hover:text-neon-violet transition-colors cursor-pointer">Metaverse Design</li>
              <li className="hover:text-neon-violet transition-colors cursor-pointer">Mixed Reality</li>
              <li className="hover:text-neon-violet transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4 text-neon-cyan">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-neon-cyan mt-1 flex-shrink-0" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors cursor-pointer">
                <Mail size={20} className="text-neon-cyan flex-shrink-0" />
                <span>hello@ramesthainfommersive.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors cursor-pointer">
                <Phone size={20} className="text-neon-cyan flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2025 Ramestha Infommersive. All rights reserved. Pioneering immersive technology since 2019.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-neon-blue transition-colors">Privacy Policy</button>
            <button className="hover:text-neon-blue transition-colors">Terms of Service</button>
            <button className="hover:text-neon-blue transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-violet rounded-full flex items-center justify-center glow hover:scale-110 transition-all duration-300 z-40"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
