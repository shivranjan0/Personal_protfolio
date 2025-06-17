import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Chat Dashboard',
      category: 'UI Kit',
      tags: ['Web App', 'SaaS', 'Dashboard'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modern chat interface with real-time messaging'
    },
    {
      id: 2,
      title: 'To-Do List Dashboard',
      category: 'UX Flow',
      tags: ['Mobile App', 'Productivity', 'UI/UX'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Task management with intuitive user experience'
    },
    {
      id: 3,
      title: 'NFT Marketplace Dashboard',
      category: 'Dark UI',
      tags: ['Web3', 'Marketplace', 'Dark Theme'],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sleek dark interface for digital asset trading'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Latest Projects
          </h2>
          <a 
            href="https://github.com/shivranjan0?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center text-cyan-400 hover:text-cyan-300 font-medium group transition-colors duration-200"
          >
            See All
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See All Button */}
        <div className="sm:hidden text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors duration-200"
          >
            See All Projects
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;