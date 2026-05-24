"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#050505] text-[#ededed] relative">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        <div className="flex flex-col">
          <h2 className="font-serif text-5xl md:text-7xl uppercase mb-8 leading-tight">
            Let's Create<br/>
            <span className="text-[#d1b894] italic">Something Timeless.</span>
          </h2>
          <p className="font-sans text-gray-400 font-light text-lg mb-16 max-w-md">
            Whether it's a wedding, a brand campaign, or a personal portrait session — I'd love to hear your story.
          </p>

          <div className="flex flex-col gap-8">
            <a href="mailto:justinpaulson426@gmail.com" className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <p className="text-lg">justinpaulson426@gmail.com</p>
              </div>
            </a>
            
            <a href="https://wa.me/917025014217" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all duration-500">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">WhatsApp</p>
                <p className="text-lg">+91 7025014217</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/storiesofjustine/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover:border-transparent group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Instagram</p>
                <p className="text-lg">@storiesofjustine</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-sm border border-white/5">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border-b border-white/20 focus:border-[#d1b894] py-3 text-white outline-none transition-colors rounded-none"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border-b border-white/20 focus:border-[#d1b894] py-3 text-white outline-none transition-colors rounded-none"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="inquiry" className="text-xs uppercase tracking-widest text-gray-400">Inquiry Type</label>
              <select 
                id="inquiry" 
                className="bg-transparent border-b border-white/20 focus:border-[#d1b894] py-3 text-white outline-none transition-colors appearance-none rounded-none"
              >
                <option value="wedding" className="bg-[#0a0a0a]">Wedding Film / Photo</option>
                <option value="commercial" className="bg-[#0a0a0a]">Commercial / Brand</option>
                <option value="portrait" className="bg-[#0a0a0a]">Portrait Session</option>
                <option value="other" className="bg-[#0a0a0a]">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-transparent border-b border-white/20 focus:border-[#d1b894] py-3 text-white outline-none transition-colors resize-none rounded-none"
                placeholder="Tell me about your story..."
              ></textarea>
            </div>
            
            <button type="button" className="group mt-4 py-4 bg-white text-black text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-4 hover:bg-[#d1b894] transition-colors duration-500 rounded-sm">
              Send Inquiry <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
