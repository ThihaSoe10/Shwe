import React from 'react';

const TechStackMarquee = () => {
  const techItems = [
    "Java (Spring Boot)",
    "React",
    "Python (Django/Flask)",
    "Docker",
    "React Native",
    "Next.js",
    "Kotlin",
    "Flutter",
    "Unity",
    "Unreal"
  ];

  return (
    <div className="bg-primary py-5 overflow-hidden relative flex border-y border-white/5 shadow-inner">
      {/* Gradients for smooth fade in/out endpoints */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {/* Repeating the array to create identical blocks for seamless infinite loop */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center px-4">
            {techItems.map((tech, index) => (
              <div key={`${groupIndex}-${index}`} className="flex items-center space-x-8 px-4">
                <span className="text-slateWhite font-poppins font-semibold text-xl tracking-wide hover:text-shweGold transition-colors duration-300 cursor-default">
                  {tech}
                </span>
                <span className="text-shweGold/40 font-bold px-4 text-xl">|</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMarquee;
