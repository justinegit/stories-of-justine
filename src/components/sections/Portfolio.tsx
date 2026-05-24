"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "The Forest Vows", category: "Weddings", img: "/wedding_portfolio.png", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Midnight Drive", category: "Commercial Films", img: "/commercial_portfolio.png", span: "col-span-1 row-span-1" },
  { id: 3, title: "Silent Echoes", category: "Portraits", img: "/founder_portrait.png", span: "col-span-1 row-span-1" },
  { id: 4, title: "Ethereal Light", category: "Couple Stories", img: "/hero_cinematic.png", span: "md:col-span-2 row-span-1" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const items = gsap.utils.toArray(".portfolio-item");
    items.forEach((item: any, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="stories" className="py-24 md:py-32 bg-[#0a0a0a] min-h-screen relative">
      <div className="max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wider uppercase">Featured Stories</h2>
            <p className="font-sans text-gray-400 mt-4 text-sm tracking-widest uppercase">Timeless moments frozen in frames</p>
          </div>
          <button className="text-xs uppercase tracking-widest text-[#d1b894] hover:text-white transition-colors duration-300 flex items-center gap-2">
            View All Projects <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6 px-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`portfolio-item relative group overflow-hidden bg-[#111] rounded-sm cursor-pointer ${project.span}`}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#d1b894] text-xs uppercase tracking-widest font-semibold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
