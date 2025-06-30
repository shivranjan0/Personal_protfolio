import React from 'react';
import MicrosoftLogo from '../Microsoft.jpeg';
import GoogleLogo from '../Google.jpeg';
import AppleLogo from '../Apple.jpeg';
import AmazonLogo from '../Amazon.jpeg';

const Companies: React.FC = () => {
  const companies = [
    { name: 'Microsoft', logo: MicrosoftLogo },
    { name: 'Google', logo: GoogleLogo },
    { name: 'Apple', logo: AppleLogo },
    { name: 'Amazon', logo: AmazonLogo }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies List (moved below tech stack) */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 mt-20">
          Companies I've love to With
        </h2>
        <div className="overflow-x-auto">
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 min-w-max px-4">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="flex-shrink-0 group"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Swipe indicator for mobile */}
        <div className="sm:hidden text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;