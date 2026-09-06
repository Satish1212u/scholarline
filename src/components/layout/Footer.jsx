import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Social icons (react-icons)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// ✅ UI icons (lucide)
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold text-white tracking-tight">
              Scholar<span className="text-amber-500">Line</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Guidance • Research • Success<br />
              Premium writing & research support platform for scholars and ambitious students globally.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-110">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', ...(false ? ['Pricing'] : []), 'Samples', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-3"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-4">
              {['Academic Writing', 'Research Paper', 'Thesis & Dissertation', 'Editing & Proofreading'].map((link) => (
                <li key={link}>
                  <Link to={`/services/${link.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-3"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Stay Connected</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe for updates & academic tips.</p>
            <form className="relative flex items-center w-full mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-14 text-white text-sm outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all"
                required
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 w-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-slate-900 transition-transform hover:scale-105 cursor-pointer">
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>

            <div className="space-y-4">
              <div className="flex items-start gap-4 text-slate-400 text-sm hover:text-amber-500 transition-colors cursor-pointer">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>irshadahemad.asr.ia@gmail.com</span>
                  <span>scholarline.1@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-slate-400 text-sm hover:text-amber-500 transition-colors cursor-pointer">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+91 7017613703</span>
              </div>
              <div className="flex items-start gap-4 text-slate-400 text-sm hover:text-amber-500 transition-colors cursor-pointer">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Mutaina, Tehsil Gunnour, Sambhal, UP – 202527</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 ScholarLine Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
