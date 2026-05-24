"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Script from "next/script";

const igPosts = [
  { id: 1, type: "Wedding Reel", link: "https://www.instagram.com/reel/DYJ_IMyRnwO/" },
  { id: 2, type: "Cafe Commercial", link: "https://www.instagram.com/reel/DNbMP8Tz1dF/" },
  { id: 3, type: "Wedding Photo", link: "https://www.instagram.com/p/DVJDCE-kQKg/" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    const items = gsap.utils.toArray(".portfolio-item");
    items.forEach((item: any) => {
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

    // Re-process Instagram embeds on mount if script is already loaded
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

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
          <a href="https://www.instagram.com/storiesofjustine/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-[#d1b894] hover:text-white transition-colors duration-300 flex items-center gap-2">
            View Instagram <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 justify-items-center">
          {igPosts.map((post) => (
            <div 
              key={post.id} 
              className="portfolio-item w-full max-w-[540px] flex flex-col items-center"
            >
              <h3 className="text-[#d1b894] text-xs uppercase tracking-widest font-semibold mb-6">{post.type}</h3>
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={`${post.link}?utm_source=ig_embed&amp;utm_campaign=loading`} 
                data-instgrm-version="14" 
                style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '100%' }}
              >
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      
      {/* Load Instagram Embed Script */}
      <Script 
        src="//www.instagram.com/embed.js" 
        strategy="lazyOnload" 
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />
    </section>
  );
}
