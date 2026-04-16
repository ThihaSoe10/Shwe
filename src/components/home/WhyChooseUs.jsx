import React from 'react';

const reasons = [
  {
    title: "ခေတ်မီနည်းပညာများ အသုံးပြုခြင်း",
    description: "နောက်ဆုံးပေါ် နည်းပညာများကို အသုံးပြု၍ သင့်လုပ်ငန်းအတွက် အကောင်းဆုံးသော ရလဒ်များကို ဖန်တီးပေးပါသည်။",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "အသုံးပြုသူအတွက် လွယ်ကူသော (User-friendly) Design များ",
    description: "အသုံးပြုသူများအတွက် အဆင်ပြေချောမွေ့ပြီး ဆွဲဆောင်မှုရှိသော ဒီဇိုင်းများကို ဖန်တီးရေးဆွဲပေးပါသည်။",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "စိတ်ချရသော နောက်ဆက်တွဲ ဝန်ဆောင်မှုများ",
    description: "လုပ်ငန်းများပြီးဆုံးသွားသော်လည်း လိုအပ်သော ပြုပြင်ထိန်းသိမ်းမှုများနှင့် နောက်ဆက်တွဲ ဝန်ဆောင်မှုများကို အပြည့်အဝ တာဝန်ယူပေးပါသည်။",
    icon: (
      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-slateWhite mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-shweGold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-slateWhite dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 dark:border-white/10 hover:border-shweGold/30 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-950 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-50 dark:border-white/10">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-slateWhite mb-4 leading-relaxed font-myanmar">{reason.title}</h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed font-myanmar">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
