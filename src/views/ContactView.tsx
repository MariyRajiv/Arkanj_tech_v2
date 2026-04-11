import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, X, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'motion/react';

export const ContactView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send data to a server here
    setIsSubmitted(true);
  };

  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.message.trim() !== '';

  return (
    <div className="relative pt-32 pb-32 overflow-hidden mesh-gradient">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-600/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest mb-8">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                Let's <span className="text-blue-600">Talk</span>
              </h1>
              <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-medium max-w-lg">
                Ready to start your journey? Whether it's German or AI, we're here to help you take the next step.
              </p>
              
              <div className="space-y-10">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white rounded-[30px] flex items-center justify-center text-blue-600 shadow-xl shadow-blue-50 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Email Address</p>
                    <p className="text-2xl font-black text-slate-900">superadmin@arkanj.tech</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white rounded-[30px] flex items-center justify-center text-blue-600 shadow-xl shadow-blue-50 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Phone Number</p>
                    <p className="text-2xl font-black text-slate-900">+91 700-491-0317</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-12 md:p-16 rounded-[60px] shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl shadow-xl rotate-12 flex items-center justify-center text-white -z-10">
              <Send className="w-10 h-10" />
            </div>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="text-left">
                <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="text-left">
                  <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" 
                    placeholder="+91 00000 00000" 
                  />
                </div>
              </div>
              <div className="text-left">
                <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Your Message *</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all h-40 font-bold resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button 
                type="submit"
                variant="primary" 
                disabled={!isFormValid}
                className={`w-full py-6 text-xl shadow-xl shadow-blue-200 transition-all ${!isFormValid ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.02]'}`}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass rounded-[40px] p-12 text-center shadow-2xl border-white/60"
            >
              <button 
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-100/50">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Sent Successfully!</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                We've received your message. One of our experts will contact you within 24 hours.
              </p>
              
              <Button 
                variant="primary" 
                className="w-full py-4"
                onClick={() => setIsSubmitted(false)}
              >
                Great, thanks!
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
