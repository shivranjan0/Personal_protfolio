import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          See the impact of good,
          <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            conversion-oriented design
          </span>
          on your business.
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to transform your digital presence? Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:shivranjankumar917@gmail.com"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
          >
            <Send size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Hire Me
            <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a 
            href="https://github.com/shivranjan0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            View My Work
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;