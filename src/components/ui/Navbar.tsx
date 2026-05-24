"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/70 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl tracking-wide uppercase text-[#ededed]">
          Stories of Justine
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-gray-300">
          {["Stories", "Philosophy", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#d1b894] transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d1b894] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-gray-300 uppercase tracking-widest text-xs">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
