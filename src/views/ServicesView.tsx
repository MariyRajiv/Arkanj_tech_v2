import { motion } from 'motion/react';
import { Languages, CheckCircle2, MessageSquare, Clock, Target, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { industryServices } from '../constants';
import { Page } from '../types';

export const ServicesView = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="relative pt-32 pb-32 overflow-hidden mesh-gradient">
    {/* Animated Blobs */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="blob w-96 h-96 bg-blue-400 -top-20 -left-20 opacity-10" />
      <div className="blob w-96 h-96 bg-emerald-400 bottom-0 -right-20 opacity-10 animation-delay-2000" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            From language mastery to deep-tech innovation, we provide the tools you need to excel in the digital age.
          </p>
        </motion.div>
      </div>
      
      <div className="mb-32">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-left tracking-tight">For Individuals: Language Mastery</h2>
        <div className="grid md:grid-cols-1 gap-12">
          {industryServices.filter(s => s.category === "Education").map((s) => (
            <div key={s.id} className="space-y-12">
              {/* Main Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 rounded-[60px] bg-blue-600 text-white flex flex-col md:flex-row gap-16 items-center text-left shadow-[0_40px_80px_-15px_rgba(37,99,235,0.3)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="w-32 h-32 bg-white/20 rounded-[40px] flex items-center justify-center shrink-0 relative z-10 backdrop-blur-md border border-white/20">
                  <Languages className="w-16 h-16" />
                </div>
                <div className="flex-grow relative z-10">
                  <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">{s.title}</h2>
                  <p className="text-blue-100 font-black uppercase tracking-[0.3em] mb-8 text-xl">{s.subtitle}</p>
                  <p className="text-2xl text-blue-50 leading-relaxed mb-12 max-w-3xl">{s.description}</p>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span className="font-bold text-xl">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-8">
                    <div className="flex flex-col">
                      <span className="text-5xl font-black">{s.price}</span>
                      <span className="text-blue-200 font-bold uppercase tracking-widest text-sm mt-2">Intensive Daily Program</span>
                    </div>
                    <Button variant="secondary" className="px-16 py-6 text-2xl shadow-2xl shadow-blue-900/20" onClick={() => setPage('contact')}>Enroll Now</Button>
                  </div>
                </div>
              </motion.div>

              {/* Detailed Breakdown */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "The Arkanj Method", desc: "Our conversation-first approach means you're speaking German from minute one. We skip the dry grammar tables and focus on intuitive learning through real-world scenarios.", icon: <MessageSquare className="text-blue-600 w-7 h-7" />, color: "bg-blue-50" },
                  { title: "Course Structure", desc: "Intensive 1-hour daily live sessions in small groups of max 6 students. This high-frequency model is scientifically proven to build long-term retention.", icon: <Clock className="text-emerald-600 w-7 h-7" />, color: "bg-emerald-50" },
                  { title: "Target Audience", desc: "Specifically tailored for tech professionals and engineers looking to bridge the gap to the German job market. We focus on vocabulary that matters.", icon: <Target className="text-purple-600 w-7 h-7" />, color: "bg-purple-50" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-10 rounded-[48px] text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-left tracking-tight">For Businesses: Tech Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industryServices.filter(s => s.category !== "Education").map((s, i) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[56px] flex flex-col h-full text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-white/60"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-12 shadow-sm border border-slate-50">
                {s.icon}
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h2>
              <p className="text-blue-600 font-black uppercase tracking-widest mb-8">{s.subtitle}</p>
              <p className="text-lg text-slate-600 leading-relaxed mb-12 flex-grow">{s.description}</p>
              <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">{s.price}</span>
                <Button onClick={() => setPage('contact')} className="shadow-lg shadow-blue-100">Inquire</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
