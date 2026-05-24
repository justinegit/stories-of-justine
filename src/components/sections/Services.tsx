"use client";

import { ArrowRight } from "lucide-react";

const services = [
  "Wedding Films",
  "Couple Shoots",
  "Portrait Photography",
  "Brand Storytelling",
  "Social Media Reels",
  "Editing & Color Grading",
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-[#0a0a0a]">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">Cinematic<br/><span className="text-[#d1b894] italic">Offerings</span></h2>
              <p className="font-sans text-gray-400 font-light text-lg">
                Not just services, but immersive experiences crafted to tell your story in the most beautiful way possible.
              </p>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <a href="#contact" className="inline-block border-b border-white/30 text-white uppercase tracking-widest text-sm pb-2 hover:border-white transition-colors duration-300">
                Inquire Now
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group border-b border-white/5 py-8 md:py-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs text-white/30 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="font-serif text-2xl md:text-4xl text-gray-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                    {service}
                  </h3>
                </div>
                <ArrowRight className="text-white/0 group-hover:text-[#d1b894] -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
