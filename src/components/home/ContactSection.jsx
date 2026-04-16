import React from 'react';

const serviceOptions = ['Web', 'App', 'Game', 'SaaS'];

const budgetOptions = [
  'Below 5,000,000 MMK (50 Lakhs)',
  '5,000,000 MMK - 10,000,000 MMK',
  'Above 10,000,000 MMK',
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white dark:bg-primary py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary dark:text-slateWhite mb-4">Contact Us</h2>
          <p className="text-gray-500 dark:text-slate-300 max-w-2xl mx-auto">
            Tell us your project goals and we will get back with a practical plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <aside className="bg-slateWhite dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-slateWhite mb-6">Let&apos;s Talk</h3>
            <div className="space-y-4 text-gray-700 dark:text-slate-200">
              <p>
                <span className="font-semibold text-primary dark:text-slateWhite">Email:</span> contact@shwepilot.com
              </p>
              <p>
                <span className="font-semibold text-primary dark:text-slateWhite">Phone:</span> +95 9 123 456 789
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://m.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg border border-primary text-primary dark:text-slateWhite font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Quick Message (Messenger)
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg border border-primary text-primary dark:text-slateWhite font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Quick Message (Telegram)
              </a>
            </div>
          </aside>

          <form className="bg-white dark:bg-slate-950 border border-gray-100 dark:border-white/10 rounded-2xl p-8 shadow-sm space-y-5">
            <div>
              <label htmlFor="nameCompany" className="block text-sm font-semibold text-primary dark:text-slateWhite mb-2">
                Name/Company
              </label>
              <input
                id="nameCompany"
                type="text"
                placeholder="Your name or company"
                className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-primary dark:text-slateWhite placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary dark:text-slateWhite mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-primary dark:text-slateWhite placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-primary dark:text-slateWhite mb-2">
                Service Required
              </label>
              <select
                id="service"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 dark:border-white/10 px-4 py-3 bg-white dark:bg-slate-900 text-primary dark:text-slateWhite focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-primary dark:text-slateWhite mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 dark:border-white/10 px-4 py-3 bg-white dark:bg-slate-900 text-primary dark:text-slateWhite focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="" disabled>
                  Select your budget
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-primary dark:text-slateWhite mb-2">
                Project details
              </label>
              <textarea
                id="details"
                rows={5}
                placeholder="Share your project details..."
                className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-primary dark:text-slateWhite placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-shweGold text-[#0F172A] font-bold px-5 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
