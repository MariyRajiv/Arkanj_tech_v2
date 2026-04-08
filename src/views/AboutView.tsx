import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Heart, Cpu, Users, Globe, Award } from 'lucide-react';
import { Page } from '../types';

export const AboutView = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="relative pt-32 pb-32 overflow-hidden mesh-gradient">
    {/* Animated Blobs */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="blob w-96 h-96 bg-blue-400 -top-20 -left-20 opacity-10" />
      <div className="blob w-96 h-96 bg-emerald-400 bottom-0 -right-20 opacity-10 animation-delay-2000" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-[32px] overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 shrink-0 border-4 border-white">
              <img src="https://picsum.photos/seed/mission/200/200" alt="Mission" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter">
              Our <span className="text-gradient">Mission</span>
            </h1>
          </div>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Arkanj Tech Solutions was founded with a single goal: to bridge the gap between human potential and technological advancement.
          </p>
        </motion.div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[60px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] relative z-10 border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover aspect-[4/5]" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </motion.div>
          
          {/* Floating Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -top-10 -left-10 glass p-8 rounded-[32px] shadow-2xl z-20 hidden lg:block border-white/60"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-black text-slate-900">3,500+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Students</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-10 -right-10 glass p-8 rounded-[32px] shadow-2xl z-20 hidden lg:block border-white/60"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-black text-slate-900">Global</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Presence</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-3xl -z-10" />
        </div>
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-5xl font-black text-slate-900 tracking-tight">Who We Are</h2>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-[32px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 shrink-0 border-4 border-white">
                <img src="https://picsum.photos/seed/collaboration/200/200" alt="Our Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <p className="text-2xl text-slate-600 leading-relaxed mb-10 font-medium">
              We are a team of educators, engineers, and visionaries who believe that learning should be interactive, technology should be accessible, and growth should be continuous.
            </p>
            <div className="space-y-6">
              {[
                "Founded in 2018 with a focus on AI & Education",
                "Over 3,500+ successful students and clients",
                "Global team operating from India and Germany",
                "Committed to ethical AI and effective learning"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 group cursor-default"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 6-D Process */}
      <section className="py-32 bg-slate-900 text-white rounded-[80px] -mx-6 px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">The Arkanj 6-D Process</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">How we turn complex challenges into seamless digital solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Deep dive into your needs and goals." },
              { step: "02", title: "Define", desc: "Clear roadmap and strategy building." },
              { step: "03", title: "Design", desc: "Crafting the user experience and architecture." },
              { step: "04", title: "Develop", desc: "High-velocity coding and AI integration." },
              { step: "05", title: "Deploy", desc: "Seamless launch and integration." },
              { step: "06", title: "Deliver", desc: "Ongoing support and continuous growth." }
            ].map((d, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-left p-8 rounded-[40px] glass-dark hover:bg-white/10 transition-all duration-500 cursor-default group border-white/5"
              >
                <span className="text-4xl font-black text-blue-500 mb-6 block group-hover:scale-110 transition-transform origin-left">{d.step}</span>
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);
