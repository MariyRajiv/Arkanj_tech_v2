import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Zap, Target, X, TrendingUp, Heart, Cpu, Users, Globe, Clock, Award, MessageSquare, Layers, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
// import { BookingModal } from '../components/BookingModal';
import { UnderConstructionModal } from '../components/UnderConstructionModal';
import { Counter } from '../components/Counter';
import { LiteYouTube } from '../components/LiteYouTube';
import { stats, partners, testimonials, industryServices, faqs } from '../constants';
import { Page } from '../types';

export const HomeView = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} /> */}
      <UnderConstructionModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-32 mesh-gradient overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="blob w-72 h-72 bg-blue-400 top-0 -left-4 animation-delay-2000" />
          <div className="blob w-72 h-72 bg-emerald-400 top-0 -right-4 animation-delay-4000" />
          <div className="blob w-96 h-96 bg-purple-400 bottom-0 left-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-6 tracking-tighter">
                <span className="inline-block pt-6">Communicative,</span> <br />
                <span className="text-gradient">Live Online</span> <br />
                German Classes.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                Master German in just 1 hour a day. Meet our expert teachers and see why thousands of professionals choose Arkanj to bridge their career gap.
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <Button variant="secondary" className="px-10 py-5 text-lg group" onClick={() => setIsBookingOpen(true)}>
                  Start Here <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-slate-900 text-left">
                    <p className="text-2xl font-black">From €199</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Per Month</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-left p-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default"
                  >
                    <p className="text-3xl font-black text-slate-900 mb-1">
                      <Counter value={s.val} />
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative flex flex-col items-center lg:items-end lg:-mt-64"
            >
              <div className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
                <Star className="w-4 h-4 fill-emerald-600" />
                Top Rated Language & Tech Platform
              </div>

              <LiteYouTube 
                videoId="mNX1wpIQ4Uk"
                poster="https://img.youtube.com/vi/mNX1wpIQ4Uk/maxresdefault.jpg"
                autoPlay={true}
                loading="eager"
                fetchPriority="high"
                className="relative z-10 rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-[8px] border-white w-full aspect-video max-w-[640px]"
                title="ARKANJ Preview"
              />
              
              {/* Decorative elements around video */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />
              
              {/* Floating "Live" Indicator */}
              <div className="absolute top-12 left-0 lg:-left-12 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Live Now</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 bg-slate-900/95 backdrop-blur-xl"
              onClick={() => setIsVideoOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 40, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20 backdrop-blur-md border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/mNX1wpIQ4Uk?autoplay=1&mute=0&rel=0&modestbranding=1"
                  title="ARKANJ Intro"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Partners / Social Proof */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full mb-12 border border-slate-100">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/32/32`} 
                      alt="User Avatar" 
                      referrerPolicy="no-referrer" 
                      loading="lazy"
                      width="24"
                      height="24"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Trusted by 3,500+ Professionals</p>
            </div>
            
            <h2 className="text-center text-sm font-bold text-slate-600 uppercase tracking-[0.3em] mb-12">Study German with Peers from Top Global Brands</h2>
            
            <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-10 transition-all duration-700">
              {partners.map((p) => (
                <div key={p.name} className="h-10 md:h-12 flex items-center justify-center group transition-transform hover:scale-110">
                  <img 
                    src={p.logo} 
                    alt={`${p.name} logo`} 
                    className="h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="120"
                    height="48"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="blob w-96 h-96 bg-blue-100 -bottom-20 -right-20 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Students <span className="text-gradient">Speak for Themselves</span></h2>
              <div className="flex items-center gap-4">
                <div className="flex text-emerald-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-emerald-500" />)}
                </div>
                <span className="font-bold text-slate-400">1,200+ Google Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="min-w-[400px] p-10 rounded-[48px] glass border-white/60 relative text-left hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex text-emerald-500 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-emerald-500" />)}
                  </div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">{t.avatar}</div>
                    <div>
                      <p className="font-black text-slate-900">{t.name}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Why German Section */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-blue-200 -top-20 -left-20 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter">
                Why Learn German <br />
                <span className="text-gradient">with Arkanj?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Career Growth", desc: "Germany is the economic powerhouse of Europe. Speaking the language opens doors to top-tier engineering and tech roles.", icon: <TrendingUp className="text-blue-600" />, color: "bg-blue-50" },
                  { title: "Cultural Immersion", desc: "Go beyond 'Dankeschön'. Understand the nuances of German work culture and social life.", icon: <Heart className="text-emerald-500" />, color: "bg-emerald-50" },
                  { title: "Tech-First Approach", desc: "We don't just teach 'school German'. We teach you how to survive and thrive in a modern German tech environment.", icon: <Cpu className="text-purple-600" />, color: "bg-purple-50" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 p-6 rounded-[32px] glass hover:bg-white transition-all duration-300 cursor-default group"
                  >
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[60px] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=60" 
                  alt="Scenic view of Germany" 
                  className="w-full aspect-[4/5] object-cover" 
                  loading="lazy"
                  width="600"
                  height="750"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 -right-10 glass p-8 rounded-[40px] shadow-2xl max-w-[280px] text-left border-white/60"
              >
                <p className="text-5xl font-black text-blue-600 mb-2">85%</p>
                <p className="font-bold text-slate-900 leading-tight">Of our students find a job in Germany within 6 months.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-900 text-white rounded-[80px] mx-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Why Arkanj is Different</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">We've reimagined online learning to be more human, more interactive, and more effective.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Small Groups", desc: "Max 6 students for personal attention and maximum speaking time.", icon: <Users className="w-8 h-8" /> },
              { title: "Fully Online", desc: "Join live classes from anywhere in the world, on any device.", icon: <Globe className="w-8 h-8" /> },
              { title: "Time-Efficient", desc: "Only 1 hour a day to fit into your busy professional schedule.", icon: <Clock className="w-8 h-8" /> },
              { title: "Professional Teachers", desc: "Skilled native teachers who guide pronunciation and nuances.", icon: <Award className="w-8 h-8" /> },
              { title: "Real-Time Feedback", desc: "Speak freely, we correct you exactly when it matters most.", icon: <MessageSquare className="w-8 h-8" /> },
              { title: "Personalized Resources", desc: "Learning materials built around your life and interests.", icon: <Layers className="w-8 h-8" /> }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group text-left p-10 rounded-[48px] glass-dark hover:bg-white/10 transition-all duration-500 border border-white/5"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Method */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">Train Your Speaking Muscles</h2>
            <p className="text-2xl text-slate-500 font-medium">From hesitant to fluent with our proven method.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Real-Life Conversation", desc: "Authentic dialogues, no boring drills. Learn how people actually speak.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=60" },
              { title: "Real Corrective Feedback", desc: "We step in only when it helps you improve, keeping the flow natural.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=60" },
              { title: "Real-Cultural Immersion", desc: "Local meet-up events, cultural nuances, and real-world insights.", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=60" }
            ].map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }}
                className="group cursor-pointer text-left p-6 rounded-[50px] hover:bg-slate-50 transition-all duration-500"
              >
                <div className="rounded-[40px] overflow-hidden mb-8 aspect-video relative shadow-lg">
                  <img 
                    src={m.img} 
                    alt={m.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    width="500"
                    height="281"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{m.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-blue-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-[80px] p-20 md:p-32 text-white relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(37,99,235,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">
                Ready to start speaking <br /> 
                <span className="text-blue-200">German confidently?</span>
              </h2>
              <p className="text-2xl text-blue-100 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                Book a Session with an Expert Teacher and transform your life with our communicative method.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="secondary" className="px-16 py-8 text-2xl shadow-2xl shadow-blue-900/20 hover:scale-105 transition-transform" onClick={() => setIsBookingOpen(true)}>
                  Book a Session Now
                </Button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
