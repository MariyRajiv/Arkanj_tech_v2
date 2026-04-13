import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Hammer, Sparkles, Construction } from 'lucide-react';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnderConstructionModal: React.FC<UnderConstructionModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl glass rounded-[40px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] border-white/60 flex flex-col items-center text-center p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-1.5 glass hover:bg-white rounded-full text-slate-400 hover:text-slate-900 transition-all shadow-sm border-white/40"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
                <Construction className="w-2.5 h-2.5" />
                <span>Coming Soon</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
                Something Great is  <br />
                <span className="text-gradient">Brewing</span>
              </h2>

              <div className="relative mb-6 group max-w-sm mx-auto">
                <div className="absolute inset-0 bg-blue-600/20 rounded-[32px] blur-2xl group-hover:blur-[40px] transition-all duration-500" />
                <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-xl aspect-video bg-slate-100">
                  <img 
                    src="https://set-painting.com/ART1/MGALLERY/ANIMATION/ANIAssets/Under_Movie_Opt1.gif" 
                    alt="Under Construction Animation" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    width="384"
                    height="216"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100"
                >
                  <Hammer className="w-5 h-5 text-blue-600" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-3 -left-3 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100"
                >
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                </motion.div>
              </div>

              <p className="text-base text-slate-500 font-medium mb-6 max-w-xs mx-auto leading-relaxed">
                We're architecting a new experience for you. Our booking system is currently being upgraded.
              </p>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-black text-lg rounded-xl transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 mx-auto group"
              >
                Got it, thanks!
              </button>
            </div>

            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
              <div className="blob w-64 h-64 bg-blue-100 -top-20 -left-20 opacity-30" />
              <div className="blob w-64 h-64 bg-emerald-100 -bottom-20 -right-20 opacity-30" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
