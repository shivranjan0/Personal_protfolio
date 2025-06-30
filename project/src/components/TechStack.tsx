import React from 'react';

const techStack = [
  {
    name: 'React',
    url: 'https://reactjs.org/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    name: 'HTML5',
    url: 'https://www.w3.org/html/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'CSS3',
    url: 'https://www.w3schools.com/css/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'WordPress',
    url: 'https://wordpress.org/',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
];

const TechStack: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
    <div className="max-w-4xl w-full mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">Tech Stack & Experience</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {techStack.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            title={tech.name}
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img src={tech.icon} alt={tech.name} width={72} height={72} />
            <div className="mt-2 text-base font-semibold text-gray-700 dark:text-gray-200">{tech.name}</div>
          </a>
        ))}
      </div>
      <div className="mt-6 text-lg text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
        Experienced in collaborative team environments, version control with Git, and passionate about learning new technologies and design tools. I enjoy building modern, user-friendly web applications and continuously improving my skills.
      </div>
    </div>
  </section>
);

export default TechStack; 