import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'motion/react';

export const ContactView = () => (
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
                  <p className="text-2xl font-black text-slate-900">admin@arkanj.tech</p>
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
          
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" placeholder="John" />
              </div>
              <div className="text-left">
                <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" placeholder="Doe" />
              </div>
            </div>
            <div className="text-left">
              <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold" placeholder="your@email.com" />
            </div>
            <div className="text-left">
              <label className="block text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Your Message</label>
              <textarea className="w-full bg-white/50 px-8 py-5 rounded-2xl border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all h-40 font-bold resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <Button variant="primary" className="w-full py-6 text-xl shadow-xl shadow-blue-200">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </div>
  </div>
);
