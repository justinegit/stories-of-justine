"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".about-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(".about-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5")
      .fromTo(".about-image", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=1");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 md:py-48 bg-[#050505] text-[#ededed] relative overflow-hidden">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <h2 className="about-title font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 tracking-wide">
            Behind <span className="italic text-[#d1b894]">The Lens</span>
          </h2>
          
          <div className="space-y-6 font-sans text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            <p className="about-text">
              My name is Justine Paulson.
            </p>
            <p className="about-text">
              I started clicking photos nearly 15 years ago — long before I understood cameras technically. What fascinated me was never just photography, but the emotion inside a frame.
            </p>
            <p className="about-text">
              I always had a habit of observing moments differently — light falling through windows, expressions between conversations, silence before a smile, emotions hidden inside movement.
            </p>
            <p className="about-text">
              Over the years, photography became more than a passion. It became my language.
            </p>
            <p className="about-text text-gray-200">
              Now in 2026, I’m building Stories of Justine — a venture focused on preserving memories, emotions, and once-in-a-lifetime moments through cinematic storytelling.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 h-[60vh] lg:h-[80vh] w-full relative overflow-hidden rounded-sm about-image-container">
          <Image
            src="/founder_potrait.jpeg"
            alt="Justine Paulson"
            fill
            className="about-image object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
        </div>

      </div>
    </section>
  );
}
