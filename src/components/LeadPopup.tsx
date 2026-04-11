import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, User, Mail, Sparkles } from 'lucide-react';

export const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);
    } else {
      setShowCloseButton(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLeadPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl glass rounded-[48px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row border-white/60"
          >
            {/* Close Button */}
            <AnimatePresence>
              {showCloseButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 glass hover:bg-white rounded-full text-slate-400 hover:text-slate-900 transition-all shadow-sm border-white/40"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Left Side: Form */}
            <div className="flex-1 p-6 md:p-8 text-left relative overflow-hidden">
              <div className="blob w-64 h-64 bg-orange-100 -top-20 -left-20 opacity-30" />
              <div className="relative z-10">
                {!isSubmitted ? (
                  <>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Limited Time Offer</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter leading-[0.95]">
                      Get Your First <br />
                      <span className="text-gradient">Free Consultation</span>
                    </h2>
                    <p className="text-base text-slate-500 font-medium mb-6 leading-relaxed">
                      Start your journey with Arkanj today. Leave your details and we'll reach out within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <User className="w-3 h-3 text-blue-600" />
                            Name
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-5 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-bold text-sm backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <Phone className="w-3 h-3 text-blue-600" />
                            Mobile No.
                          </label>
                          <input
                            required
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-5 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-bold text-sm backdrop-blur-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                          <Mail className="w-3 h-3 text-blue-600" />
                          Email Id
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-5 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-bold text-sm backdrop-blur-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full md:w-auto px-10 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-black text-lg rounded-xl transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-4 group mt-2"
                      >
                        Submit Details
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mb-8 shadow-lg shadow-emerald-100/50">
                      <Sparkles className="w-12 h-12" />
                    </div>
                    <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Thank You!</h2>
                    <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                      We've received your details. One of our experts will contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Visual */}
            <div className="hidden md:block w-[38%] bg-slate-900 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-600/20 rounded-full blur-[100px]" />
              
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="relative z-10 mb-6">
                  <motion.div 
                    animate={{ rotate: [6, 4, 6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-36 h-48 bg-white rounded-[24px] shadow-2xl overflow-hidden border-4 border-white"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" 
                      alt="Consultation" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <motion.div 
                    animate={{ rotate: [-12, -10, -12], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 rounded-[18px] shadow-2xl flex items-center justify-center text-white border-4 border-slate-900"
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-black text-white mb-1 tracking-tighter relative z-10 leading-tight">
                  Join 3,500+ <br /> Students
                </h3>
                <p className="text-xs text-blue-300 font-black uppercase tracking-widest relative z-10">
                  Master German & Tech
                </p>
                
                {/* App Store Badges */}
                <div className="mt-8 flex flex-col gap-2 relative z-10 w-full">
                  {[
                    { label: 'Download on the', store: 'App Store' },
                    { label: 'Get it on', store: 'Google Play' }
                  ].map((badge, i) => (
                    <div key={i} className="w-full h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center px-4 gap-2 cursor-pointer transition-all border border-white/10">
                      <div className="w-4 h-4 bg-white rounded-full" />
                      <div className="flex flex-col items-start leading-none">
                        <span className="text-[6px] text-white/60 uppercase font-black tracking-widest">{badge.label}</span>
                        <span className="text-xs text-white font-black">{badge.store}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
