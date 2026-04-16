import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-slateWhite py-20 lg:py-28 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-blue-100/40 blur-[80px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-shweGold/10 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10 mt-4 lg:mt-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary font-medium text-sm mb-6 shadow-sm">
              <span className="text-shweGold mr-2">🚀</span> Empowering Your Vision
            </div>
            
            <h1 className="text-3xl md:text-4xl xl:text-[44px] font-poppins font-bold text-primary mb-5">
              <span className="block leading-[1.8] pb-3">သင့်လုပ်ငန်းကို နည်းပညာဖြင့်</span>
              <span className="block leading-[1.8] pb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">အရှိန်အဟုန်မြှင့်တင်ပေးမည့်</span>
              <span className="block leading-[1.4]">Digital Partner</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Website, Mobile App နှင့် Game Development များကို တစ်နေရာတည်းမှာ ရရှိနိုင်ပါသည်။
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-medium text-[16px] md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                ကျွန်ုပ်တို့၏ Demo များကို ကြည့်ရှုရန်
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Illustration Container */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10 mt-10 lg:mt-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center p-6 md:p-8 group">
              
              {/* Floating Decorative Objects */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-primary rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-6 transition-transform duration-700 ease-out opacity-90"></div>
              <div className="absolute bottom-1/4 right-1/4 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-shweGold to-yellow-400 rounded-full shadow-lg transform -translate-y-4 group-hover:-translate-y-8 transition-transform duration-700 ease-out opacity-90"></div>
              
              {/* Glass Main Dashboard Card */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-2xl w-full max-w-sm h-56 md:h-64 p-6 flex flex-col justify-between transform translate-y-4 group-hover:translate-y-0 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out">
                
                {/* Header Mockup */}
                <div className="flex justify-between items-center bg-white/60 p-3 rounded-lg shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xl">📊</div>
                </div>

                {/* Body Mockup / Stats */}
                <div className="space-y-4 mt-6">
                  {/* Progress Bar 1 */}
                  <div className="group/bar relative">
                    <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
                      <span>Performance</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Progress Bar 2 */}
                  <div className="group/bar relative">
                    <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
                      <span>Growth</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[78%] h-full bg-gradient-to-r from-shweGold to-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50/50">
                      <div className="text-xs text-gray-400 mb-1">Users</div>
                      <div className="text-lg font-bold text-primary">14.2k</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50/50">
                      <div className="text-xs text-gray-400 mb-1">Active</div>
                      <div className="text-lg font-bold text-green-500">+12%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sweep Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
