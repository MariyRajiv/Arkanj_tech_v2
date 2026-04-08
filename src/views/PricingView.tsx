import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { faqs, industryServices } from '../constants';
import { Page } from '../types';

const pricingPlans = [
  {
    name: "Starter Package",
    price: "€996",
    duration: "4 months",
    features: [
      "4 months of instruction",
      "Student centred courses",
      "Communicative approach",
      "Focus on speaking",
      "Access to class materials",
      "A group at your level",
      "9 people max",
      "Either morning or evening classes",
      "-"
    ],
    highlight: false,
    save: null
  },
  {
    name: "Plus Package",
    price: "€1464",
    duration: "6 months",
    features: [
      "6 months of instruction",
      "Student centred courses",
      "Communicative approach",
      "Focus on speaking",
      "Access to class materials",
      "A group at your level",
      "9 people max",
      "Either morning or evening classes",
      "Save €30"
    ],
    highlight: true,
    save: "€30"
  },
  {
    name: "Pro Package",
    price: "€1912",
    duration: "8 months",
    features: [
      "8 months of instruction",
      "Student centred courses",
      "Communicative approach",
      "Focus on speaking",
      "Access to class materials",
      "A group at your level",
      "9 people max",
      "Either morning or evening classes",
      "Save €80"
    ],
    highlight: false,
    save: "€80"
  }
];

export const PricingView = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="relative pt-32 pb-32 overflow-hidden mesh-gradient">
    {/* Animated Blobs */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="blob w-96 h-96 bg-blue-400 -top-20 -left-20 opacity-10" />
      <div className="blob w-96 h-96 bg-purple-400 bottom-0 -right-20 opacity-10 animation-delay-2000" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">
            Simple <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium">Choose the plan that fits your learning pace.</p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className={`relative flex flex-col p-12 rounded-[56px] transition-all duration-500 ${
              plan.highlight 
                ? 'bg-blue-600 text-white shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] scale-105 z-10' 
                : 'glass text-slate-900 border-white/60'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-10">
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                <span className={`text-xl font-bold ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>/{plan.duration.split(' ')[0]}</span>
              </div>
              <p className={`text-xl font-bold ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                {plan.name}
              </p>
            </div>

            <div className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-3">
                  {feature !== "-" && (
                    <CheckCircle2 className={`w-6 h-6 shrink-0 ${plan.highlight ? 'text-white' : 'text-blue-600'}`} />
                  )}
                  <span className={`font-bold text-lg ${
                    feature.startsWith('Save') ? 'font-black text-emerald-500' : ''
                  } ${plan.highlight && feature.startsWith('Save') ? 'text-emerald-300' : ''} ${plan.highlight ? 'text-white' : 'text-slate-700'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              variant={plan.highlight ? 'secondary' : 'primary'} 
              className={`w-full py-6 text-xl shadow-xl ${plan.highlight ? 'shadow-blue-900/20' : 'shadow-blue-100'}`}
              onClick={() => setPage('contact')}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Beyond Language - Industry Services */}
      <div className="mt-40">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">
            Beyond <span className="text-gradient">Language</span>
          </h2>
          <p className="text-2xl text-slate-500 font-medium">Arkanj Tech Solutions: Your partner in digital evolution.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industryServices.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`p-10 rounded-[50px] flex flex-col h-full transition-all text-left ${s.isFeatured ? 'bg-blue-600 text-white shadow-[0_32px_64px_-12px_rgba(37,99,235,0.3)]' : 'glass border-white/60 hover:shadow-2xl hover:border-blue-100'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${s.isFeatured ? 'bg-white/20' : 'bg-white shadow-sm border border-slate-50'}`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">{s.title}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${s.isFeatured ? 'text-blue-100' : 'text-blue-600'}`}>{s.subtitle}</p>
              <p className={`text-lg leading-relaxed mb-10 flex-grow ${s.isFeatured ? 'text-blue-50' : 'text-slate-500'}`}>{s.description}</p>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="font-black text-xl">{s.price}</span>
                <button onClick={() => setPage('services')} className={`p-3 rounded-xl transition-all ${s.isFeatured ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-40 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Got Questions?</h2>
          <p className="text-xl text-slate-500 font-medium">Everything you need to know about our pricing and learning model.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[32px] border-white/60 overflow-hidden transition-all hover:bg-white hover:shadow-xl"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <span className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors pr-8">{faq.q}</span>
                <div className="shrink-0 w-10 h-10 bg-white rounded-2xl flex items-center justify-center group-open:rotate-180 transition-transform shadow-sm group-hover:bg-blue-600 group-hover:text-white border border-slate-50">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </summary>
              <div className="px-8 pb-8 text-lg text-slate-500 leading-relaxed text-left border-t border-slate-100/50 pt-6 mt-2">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  </div>
);
