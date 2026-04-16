import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <p className="text-sm text-slate-300">
            Copyright &copy; {new Date().getFullYear()} ShwePilot IT Solution
          </p>

          <div className="flex md:justify-center gap-4 text-sm">
            <a href="#" className="text-slate-300 hover:text-shweGold transition-colors">
              Facebook
            </a>
            <a href="#" className="text-slate-300 hover:text-shweGold transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-slate-300 hover:text-shweGold transition-colors">
              Telegram
            </a>
          </div>

          <form className="flex gap-2 md:justify-end">
            <input
              type="email"
              placeholder="Newsletter email"
              className="w-full md:w-auto min-w-0 flex-1 md:flex-none rounded-lg border border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-shweGold/50"
            />
            <button
              type="submit"
              className="rounded-lg bg-shweGold text-[#0F172A] font-semibold px-4 py-2 text-sm hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
