"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animations
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title-word",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    ).fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    ).fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/hero_cinematic.png"
          alt="Cinematic Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] mix-blend-multiply" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        ref={textRef} 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8 text-white overflow-hidden">
          {["Every", "Frame", "Holds", "A", "Story."].map((word, i) => (
            <span key={i} className="inline-block hero-title-word px-2">
              {word}
            </span>
          ))}
        </h1>
        
        <p className="hero-subtitle font-sans text-gray-300 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12">
          Cinematic photography & films crafted to preserve emotions beyond time.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-6 items-center">
          <a href="#stories" className="px-8 py-4 bg-transparent border border-white/30 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-500 rounded-sm">
            View Stories
          </a>
          <a href="#contact" className="px-8 py-4 bg-[#d1b894]/10 border border-[#d1b894]/30 text-[#d1b894] uppercase tracking-widest text-xs hover:bg-[#d1b894] hover:text-black transition-colors duration-500 rounded-sm">
            Start Your Journey
          </a>
        </div>
      </motion.div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 animate-pulse z-10">
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
