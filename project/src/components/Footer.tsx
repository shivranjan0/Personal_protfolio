import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shivranjan</h3>
            <p className="text-gray-400 mb-6">
              Creating beautiful, user-centered digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:shivranjankumar917@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 animate-pulse-glow">
                <Mail size={20} />
              </a>
              <a href="tel:7667751280" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 animate-pulse-glow">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 animate-pulse-glow">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-cyan-400 animate-pulse-glow" />
                <span className="text-gray-400">shivranjankumar917@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-cyan-400 animate-pulse-glow" />
                <span className="text-gray-400">7667751280</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-cyan-400 animate-pulse-glow" />
                <span className="text-gray-400">vadodra, guajarat - 390018</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} S.S Design. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 8px #22d3ee); }
          50% { filter: drop-shadow(0 0 16px #22d3ee); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.5s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;