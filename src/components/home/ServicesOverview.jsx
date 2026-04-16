import React from 'react';
import { Monitor, Smartphone, Gamepad2, Cloud } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "E-commerce, Corporate Website, Landing Pages",
    icon: <Monitor className="w-8 h-8 text-primary group-hover:text-shweGold transition-colors duration-300" strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Android/iOS Apps",
    icon: <Smartphone className="w-8 h-8 text-primary group-hover:text-shweGold transition-colors duration-300" strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "Game Development",
    description: "Interactive 2D/3D Games",
    icon: <Gamepad2 className="w-8 h-8 text-primary group-hover:text-shweGold transition-colors duration-300" strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "B2B SaaS Solutions",
    description: "Custom software for local businesses",
    icon: <Cloud className="w-8 h-8 text-primary group-hover:text-shweGold transition-colors duration-300" strokeWidth={1.5} />
  }
];

const ServicesOverview = () => {
  return (
    <section id="services" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans mb-6">
            Empowering your business with scalable, cutting-edge technology solutions tailored for your unique needs.
          </p>
          <div className="w-24 h-1 bg-shweGold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slateWhite border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary font-poppins mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
