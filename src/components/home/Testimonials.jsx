import React from 'react';

const reviews = [
  {
    id: 1,
    quote:
      'လုပ်ငန်းလိုအပ်ချက်ကို သေချာနားလည်ပြီး သတ်မှတ်ချိန်အတွင်း အကောင်းဆုံး ဖန်တီးပေးခဲ့ပါတယ်။',
    author: 'Founder',
  },
  {
    id: 2,
    quote:
      'Great communication and solid execution from concept to delivery. The final product was stable and easy to scale.',
    author: 'Business Owner',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0F172A] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Testimonials</h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-sans">
            Real feedback from clients who built with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
              <p className="text-base md:text-lg leading-relaxed text-white/95 mb-5">"{review.quote}"</p>
              <p className="text-shweGold font-semibold">- {review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
