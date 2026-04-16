import React from 'react';

const steps = [
  {
    number: "01",
    title: "Requirement Gathering",
    description: "We carefully listen to your needs and understand your business goals to create a solid foundation for the project."
  },
  {
    number: "02",
    title: "Proposal & Budget",
    description: "We formulate a comprehensive strategy and provide transparent pricing along with a projected timeline."
  },
  {
    number: "03",
    title: "Development Phase",
    description: "Our expert team builds your customized solution using cutting-edge technologies and industry best practices."
  },
  {
    number: "04",
    title: "Deployment & Handoff",
    description: "We execute a smooth launch, followed by comprehensive training and handover of all necessary documentation."
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">How We Work</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Main Navy Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-[#0A192F] transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Mobile Line */}
                <div className="absolute left-[1.1rem] top-8 bottom-[-3rem] w-1 bg-[#0A192F] sm:hidden rounded-full -z-10"></div>

                {/* Content Box */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} flex flex-col justify-center`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 sm:border-t-0 sm:border-l-0 ${index % 2 === 0 ? 'sm:border-l-4' : 'sm:border-r-4'} border-[#D4AF37]`}>
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-xl font-bold text-[#D4AF37] sm:hidden">{step.number}.</span>
                       <h3 className="text-xl font-bold text-[#0A192F]">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Gold Indicator Dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#D4AF37] rounded-full border-4 border-[#F8FAFC] flex flex-col items-center justify-center shadow-md z-10 top-2 sm:top-auto mb-auto hover:scale-110 transition-transform">
                   <span className="text-[#0A192F] font-bold text-sm hidden sm:block">{step.number}</span>
                   <div className="w-2.5 h-2.5 bg-[#0A192F] rounded-full sm:hidden"></div>
                </div>

                {/* Empty Half Space for Desktop Layout */}
                <div className="hidden sm:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProcessTimeline;
