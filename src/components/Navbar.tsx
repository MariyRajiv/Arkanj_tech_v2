import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Page } from '../types';

export const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-2'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${scrolled ? 'scale-100' : 'scale-100'}`}>
        <div className={`flex justify-between items-center px-6 py-3 rounded-[32px] transition-all duration-500 ${scrolled ? 'glass shadow-lg border-white/60' : 'bg-transparent'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setPage('home')}>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden group-hover:rotate-12 transition-transform duration-500 shadow-xl">
              <img src="/l2.png" alt="Arkanj Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="hidden md:flex items-center md:gap-6 lg:gap-10">
            {['home', 'about', 'services', 'pricing', 'contact'].map((p) => (
              <button 
                key={p} 
                onClick={() => setPage(p as Page)}
                className={`text-sm font-black uppercase tracking-widest transition-all relative group ${currentPage === p ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {p}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-left ${currentPage === p ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
            <Button variant="primary" className="py-2.5 px-8 text-sm shadow-xl shadow-blue-600/10 hover:scale-105 transition-transform" onClick={() => setPage('contact')}>
              Get Started
            </Button>
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {['home', 'about', 'services', 'pricing', 'contact'].map((p) => (
                <button 
                  key={p} 
                  onClick={() => { setPage(p as Page); setIsMenuOpen(false); }}
                  className={`text-xl font-bold text-left capitalize ${currentPage === p ? 'text-blue-600' : 'text-slate-900'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
