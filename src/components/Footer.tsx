import { motion } from 'motion/react';
import { Code2, Twitter, Linkedin, MapPin, Mail } from 'lucide-react';
import { Page } from '../types';

export const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-slate-900 pt-32 pb-12 text-slate-400 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mt-48" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1 text-left">
          <div className="flex items-center gap-3 mb-10 cursor-pointer group" onClick={() => setPage('home')}>
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-600/20">
              <Code2 className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">ARKANJ</span>
          </div>
          <p className="text-lg leading-relaxed mb-10 text-slate-400 font-medium">
            Bridging the gap to an AI-driven future with precision and care. Smart automation for businesses, simple AI for everyone.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com' },
              { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' }
            ].map((social, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                onClick={() => window.open(social.url, '_blank')}
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-white/5"
              >
                {social.icon}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-left">
          <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Services</h4>
          <ul className="space-y-5 text-lg font-medium">
            {['German Language', 'AI & Automation', 'FinTech Solutions', 'DeepTech R&D'].map((item) => (
              <li key={item} onClick={() => setPage('services')} className="hover:text-blue-400 cursor-pointer transition-all hover:translate-x-2 inline-block w-full">
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-left">
          <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Company</h4>
          <ul className="space-y-5 text-lg font-medium">
            {[
              { name: 'Home', page: 'home' },
              { name: 'About Us', page: 'about' },
              { name: 'Services', page: 'services' },
              { name: 'Pricing', page: 'pricing' },
              { name: 'Contact', page: 'contact' }
            ].map((link) => (
              <li key={link.name} onClick={() => setPage(link.page as Page)} className="hover:text-blue-400 cursor-pointer transition-all hover:translate-x-2 inline-block w-full">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-left">
          <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Contact</h4>
          <div className="space-y-6 text-lg font-medium">
            <div className="flex gap-4 cursor-pointer group" onClick={() => setPage('contact')}>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <span className="group-hover:text-blue-400 transition-colors pt-1">Dhanbad, Jharkhand, India</span>
            </div>
            <div className="flex gap-4 cursor-pointer group" onClick={() => window.location.href = 'mailto:admin@arkanj.tech'}>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <span className="group-hover:text-blue-400 transition-colors pt-1">admin@arkanj.tech</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.3em] font-black">
        <p className="text-slate-500">© 2026 Arkanj Tech Solutions. All rights reserved.</p>
        <div className="flex gap-12">
          <span onClick={() => setPage('contact')} className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span onClick={() => setPage('contact')} className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);
