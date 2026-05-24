"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Watching our film felt like living the day all over again. Justine captured not just what happened, but exactly how we felt. Absolute magic.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    quote: "A true artist. The way he plays with light and shadow creates such a moody, romantic atmosphere. It's not just photography; it's cinema.",
    author: "Elena M.",
    role: "Portrait Client"
  },
  {
    quote: "Our brand story has never looked this premium. The attention to detail and the emotional pull of the visuals elevated our entire campaign.",
    author: "Luxe Co.",
    role: "Commercial Partner"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative w-full">
        <h2 className="text-[#d1b894] text-xs uppercase tracking-[0.3em] mb-16">Kind Words</h2>
        
        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div>
                <h4 className="text-sm font-semibold tracking-widest uppercase text-white">{testimonials[current].author}</h4>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button onClick={prev} className="p-4 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-[#d1b894] scale-150" : "bg-white/20"}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-4 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
