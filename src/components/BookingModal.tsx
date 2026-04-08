import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Languages, Clock, CheckCircle2, ChevronLeft, ChevronRight, Globe, ArrowLeft, Users, Award, Zap } from 'lucide-react';
import { Button } from './Button';

type Step = 'date' | 'time' | 'details' | 'success';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState<Step>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [viewDate, setViewDate] = useState(new Date(2026, 3, 1)); // Start at April 2026 as per design

  if (!isOpen) return null;

  const handleDateSelect = (day: number) => {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(date);
    setStep('time');
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('details');
  };

  const reset = () => {
    setStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
    setViewDate(new Date(2026, 3, 1));
    onClose();
  };

  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  // Adjust for Mon-Sun grid (0 is Sun, so we want Mon=0, ..., Sun=6)
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const monthName = viewDate.toLocaleString('default', { month: 'long' });
  const year = viewDate.getFullYear();

  const formattedSelectedDate = selectedDate ? selectedDate.toLocaleDateString('default', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  }) : '';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
      >
        <button 
          onClick={reset} 
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-20 text-slate-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Sidebar - Info */}
        <div className="w-full md:w-[320px] p-8 border-r border-slate-100 flex flex-col shrink-0 bg-white">
          {step !== 'date' && (
            <button 
              onClick={() => setStep(step === 'time' ? 'date' : 'time')}
              className="mb-6 p-2 w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-blue-600" />
            </button>
          )}
          
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Languages className="w-6 h-6 text-white" />
          </div>
          
          <p className="text-slate-500 font-bold text-sm mb-1">Arkanj Placements</p>
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">First call with ARKANJ</h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="w-5 h-5 text-slate-400" />
              <span className="font-bold text-sm">15 min</span>
            </div>
            {selectedDate && (
              <div className="flex items-center gap-3 text-slate-600">
                <Globe className="w-5 h-5 text-slate-400" />
                <span className="font-bold text-sm">
                  {selectedTime ? `${selectedTime}, ` : ''} {formattedSelectedDate}
                </span>
              </div>
            )}
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Let us have a zoom call for a few minutes to find out if it makes sense for us to work together. 
            Please note: We offer online German language classes in small groups.
          </p>

          <div className="mt-auto pt-6 border-t border-slate-100 flex gap-4 text-xs font-bold text-blue-600">
            <button className="hover:underline">Cookie settings</button>
            <button className="hover:underline">Privacy Policy</button>
          </div>
        </div>

        {/* Right Content - Interactive */}
        <div className="flex-grow p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 'date' && (
              <motion.div 
                key="date"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <h3 className="text-xl font-black text-slate-900 mb-8">Select a Date & Time</h3>
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={handlePrevMonth} className="p-2 hover:bg-slate-100 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
                    <span className="font-bold text-slate-900">{monthName} {year}</span>
                    <button onClick={handleNextMonth} className="p-2 hover:bg-slate-100 rounded-full"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for padding */}
                    {Array.from({ length: startingDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-10 w-10" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isToday = new Date().toDateString() === new Date(viewDate.getFullYear(), viewDate.getMonth(), day).toDateString();
                      const isSelected = selectedDate?.toDateString() === new Date(viewDate.getFullYear(), viewDate.getMonth(), day).toDateString();
                      
                      return (
                        <button 
                          key={day} 
                          onClick={() => handleDateSelect(day)}
                          className={`h-10 w-10 rounded-full flex flex-col items-center justify-center font-bold transition-all relative
                            ${isSelected ? 'bg-blue-600 text-white' : 'text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white'}
                          `}
                        >
                          {day}
                          {isToday && <div className={`absolute bottom-1 w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-600'}`} />}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    <p className="text-xs font-bold text-slate-900 mb-2">Time zone</p>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Globe className="w-4 h-4" />
                      <span>India Standard Time (8:39am)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'time' && (
              <motion.div 
                key="time"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-xl font-black text-slate-900 mb-2">Select a Date & Time</h3>
                <p className="text-sm font-bold text-slate-500 mb-8">{formattedSelectedDate}</p>
                
                <div className="space-y-3 overflow-y-auto pr-2 max-h-[400px] custom-scrollbar">
                  {['9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm'].map((time) => (
                    <div key={time} className="flex gap-2">
                      <button 
                        onClick={() => handleTimeSelect(time)}
                        className="flex-grow py-4 border-2 border-blue-100 rounded-xl font-bold text-blue-600 hover:border-blue-600 transition-all"
                      >
                        {time}
                      </button>
                      {selectedTime === time && (
                        <button 
                          onClick={() => setStep('details')}
                          className="px-8 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'details' && (
              <motion.div 
                key="details"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <h3 className="text-xl font-black text-slate-900 mb-8">Enter Details</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep('success'); }}>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Name *</label>
                    <input type="text" required className="w-full p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email *</label>
                    <input type="email" required className="w-full p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number *</label>
                    <div className="flex gap-2">
                      <div className="w-20 p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <img src="https://flagcdn.com/in.svg" className="w-5" alt="India" />
                        <span className="text-sm font-bold">+91</span>
                      </div>
                      <input type="tel" required className="flex-grow p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Please tell us about yourself *</label>
                    <textarea required rows={3} className="w-full p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none" />
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    By proceeding, you confirm that you have read and agree to Arkanj's Terms and Privacy Notice.
                  </p>
                  <Button variant="primary" className="w-full py-4">Schedule Event</Button>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">You are scheduled!</h3>
                <p className="text-slate-500 mb-8">A calendar invitation has been sent to your email address.</p>
                <Button variant="secondary" onClick={reset}>Close</Button>
              </motion.div>
            )}
            {/* Trust & Info Footer */}
            {step !== 'success' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-slate-100"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4">What to expect</h4>
                    <ul className="space-y-3">
                      {[
                        "Personalized level assessment",
                        "Career goal discussion",
                        "Course curriculum overview",
                        "Q&A session with an expert"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-slate-500 font-bold">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Arkanj Guarantee</p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        No commitment required. We're here to help you find the best path for your German learning journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: <Users className="w-3 h-3" />, label: "Small Groups", sub: "Max 6 Students" },
                    { icon: <Award className="w-3 h-3" />, label: "Native Teachers", sub: "Expert Guidance" },
                    { icon: <Zap className="w-3 h-3" />, label: "Live Classes", sub: "Real-time" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-7 h-7 bg-white border border-slate-100 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                        <span className="text-blue-600">{item.icon}</span>
                      </div>
                      <p className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">{item.label}</p>
                      <p className="text-[8px] text-slate-400 font-bold">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
