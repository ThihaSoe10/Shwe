import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-poppins font-bold text-2xl tracking-tight">
              <span className="text-shweGold">Shwe</span>
              <span className="text-white">Pilot</span>
            </span>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            <a href="#" className="text-white hover:text-shweGold transition-colors px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-shweGold transition-colors px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-shweGold transition-colors px-3 py-2 text-sm font-medium">
              Portfolio
            </a>
            <a href="#" className="text-gray-300 hover:text-shweGold transition-colors px-3 py-2 text-sm font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-300 hover:text-shweGold transition-colors px-3 py-2 text-sm font-medium">
              Contact Us
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-shweGold hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md transform hover:-translate-y-0.5">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
