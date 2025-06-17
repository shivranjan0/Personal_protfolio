import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import profileImg from '../profile.jpg';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shivranjan0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivranjan-sharma-021b571a9/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const skills = ['UI Strategy', 'UX Research', 'Product Thinking', 'Design Systems'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Devlop for
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Amazing People
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            User-centered digital experiences for all screens
          </p>

          {/* Designer Photo with Floating Tags */}
          <div className="relative inline-block mb-12">
            <div className="w-60 h-60 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src={profileImg} 
                alt="Designer Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Skill Tags */}
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`absolute bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap
                  ${index === 0 ? 'top-4 -left-4 sm:-left-8 animate-bounce' : ''}
                  ${index === 1 ? 'top-1/4 -right-4 sm:-right-8 animate-bounce' : ''}
                  ${index === 2 ? 'bottom-1/4 -left-4 sm:-left-8 animate-bounce' : ''}
                  ${index === 3 ? 'bottom-4 -right-4 sm:-right-8 animate-bounce' : ''}
                `}
                style={{ animationDelay: `${index * 0.5}s`, animationDuration: '3s' }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            <span className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-1 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_16px_rgba(34,211,238,1)] transition-all duration-300 cursor-pointer">Follow me</span>
            <div className="flex space-x-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="absolute left-1/2 bottom-1 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)] transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;