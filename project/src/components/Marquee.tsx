import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 py-4 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Design
              </span>
              <span className="text-2xl sm:text-4xl font-light text-cyan-400 mx-16">
                ⭐
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Develop
              </span>
              <span className="text-2xl sm:text-4xl font-light text-emerald-400 mx-16">
                💡
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Discover
              </span>
              <span className="text-2xl sm:text-4xl font-light text-purple-400 mx-16">
                🎧
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Debug
              </span>
              <span className="text-2xl sm:text-4xl font-light text-red-400 mx-16">
                🐞
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Deploy
              </span>
              <span className="text-2xl sm:text-4xl font-light text-yellow-400 mx-16">
                🚀
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Collaborate
              </span>
              <span className="text-2xl sm:text-4xl font-light text-pink-400 mx-16">
                🤝
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Maintain
              </span>
              <span className="text-2xl sm:text-4xl font-light text-blue-400 mx-16">
                🔧
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Scale
              </span>
              <span className="text-2xl sm:text-4xl font-light text-green-400 mx-16">
                📈
              </span>

              <span className="text-2xl sm:text-4xl font-bold text-white mx-16">
                Innovate
              </span>
              <span className="text-2xl sm:text-4xl font-light text-orange-400 mx-16">
                🧠
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
