import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-gray-400 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 relative z-10">
        <div className="flex flex-col gap-6">
          <Link href="/" className="font-serif text-3xl text-white uppercase tracking-wider">
            Stories of Justine
          </Link>
          <p className="font-serif italic text-xl text-[#d1b894]">Stories fade. Memories remain.</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/storiesofjustine/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="mailto:justinpaulson426@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/917025014217" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex flex-col gap-2 md:text-right uppercase tracking-widest text-xs">
            <Link href="#stories" className="hover:text-white transition-colors">Featured Stories</Link>
            <Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="mt-12 text-xs opacity-50 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Stories of Justine. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
