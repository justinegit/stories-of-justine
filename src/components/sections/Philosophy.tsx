"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chars = gsap.utils.toArray(".phil-word");
    
    gsap.fromTo(
      chars,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const text = "I believe memories deserve more than documentation. They deserve atmosphere, emotion, movement, and life. Every frame I create is designed to make people feel something — even years later.";
  const words = text.split(" ");

  return (
    <section ref={sectionRef} id="philosophy" className="py-40 md:py-64 bg-[#050505] flex items-center justify-center relative border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[#d1b894] text-sm uppercase tracking-[0.3em] mb-12">Why I Create</h2>
        <div ref={textRef} className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.3] md:leading-[1.4]">
          {words.map((word, i) => (
            <span key={i} className="phil-word inline-block mr-3 mb-2">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
