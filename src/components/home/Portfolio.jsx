import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Ride/Delivery Booking App MVP',
    description:
      'A launch-ready MVP focused on Location Tracking and smart Driver-matching for fast, reliable bookings.',
    isImportant: true,
  },
  {
    id: 2,
    title: 'Online Store App',
    description:
      'A responsive commerce experience with product browsing, cart flow, and simple checkout process.',
  },
  {
    id: 3,
    title: 'School/Business Management Dashboard',
    description:
      'A centralized dashboard for operations, reporting, and day-to-day management workflows.',
  },
  {
    id: 4,
    title: 'AI Chatbot',
    description:
      'A conversational assistant for customer support, quick FAQs, and lead qualification.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Demo Projects & MVPs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans mb-6">
            A quick look at practical product builds delivered for startups and growing teams.
          </p>
          <div className="w-24 h-1 bg-shweGold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl p-8 transition-all duration-300 border ${
                project.isImportant
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-slateWhite border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {project.isImportant && (
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide bg-shweGold text-black px-3 py-1 rounded-full mb-4">
                  Featured MVP
                </span>
              )}
              <h3 className="text-xl font-bold font-poppins mb-3">{project.title}</h3>
              <p
                className={`text-sm leading-relaxed mb-7 ${
                  project.isImportant ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {project.description}
              </p>
              <button
                type="button"
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg border transition-colors ${
                  project.isImportant
                    ? 'border-white text-white hover:bg-white hover:text-primary'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                View Demo
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
