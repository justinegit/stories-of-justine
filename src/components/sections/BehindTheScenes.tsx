"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BehindTheScenes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });

      tl.to(scrollRef.current, {
        xPercent: -50,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-center relative">
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-10 mix-blend-difference">
        <h2 className="font-serif text-5xl md:text-7xl text-white opacity-80 uppercase">Behind<br/>The Scenes</h2>
      </div>

      <div ref={scrollRef} className="flex gap-8 md:gap-16 px-12 md:px-24 h-[60vh] w-[200vw] mt-24">
        <div className="w-[80vw] md:w-[60vw] h-full relative group rounded-sm overflow-hidden flex-shrink-0">
          <Image
            src="/bts_shot.png"
            alt="BTS 1"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-10 left-10 text-white mix-blend-difference">
            <p className="text-xs uppercase tracking-widest mb-2 font-bold">01 — The Setup</p>
            <p className="font-serif text-2xl italic">Finding the perfect light.</p>
          </div>
        </div>
        
        <div className="w-[80vw] md:w-[60vw] h-full relative group rounded-sm overflow-hidden flex-shrink-0">
          <Image
            src="/commercial_portfolio.png"
            alt="BTS 2"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-10 left-10 text-white mix-blend-difference">
            <p className="text-xs uppercase tracking-widest mb-2 font-bold">02 — The Action</p>
            <p className="font-serif text-2xl italic">Chasing the moment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
