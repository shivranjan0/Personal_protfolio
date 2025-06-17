import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const socialLinks = [
    { icon: Mail, href: 'shivranjankumar917@gmail.com', label: 'Email', color: 'hover:text-red-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/shivranjan0', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivranjan-sharma-021b571a9/', label: 'LinkedIn', color: 'hover:text-blue-600' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-emerald-400/20 transform rotate-45 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-purple-400/20 transform rotate-12 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            I like to make a simple
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              and elegant design
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              "Hi, I'm Shivranjan Sharma — a passionate web developer who crafts modern, responsive, and user-friendly websites. 
              I specialize in turning ideas into clean, functional designs using the latest web technologies."
            </p>
          </div>

          {/* Follow Me Icons */}
          <div className="flex justify-center items-center space-x-6">
            <span className="text-gray-500 dark:text-gray-400 font-medium">Follow me:</span>
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group ${color}`}
                aria-label={label}
              >
                <Icon size={20} className="text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;