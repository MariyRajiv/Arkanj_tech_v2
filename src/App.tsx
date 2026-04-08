import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadPopup } from './components/LeadPopup';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { ContactView } from './views/ContactView';
import { Page } from './types';

export default function App() {
  const [currentPage, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white bg-white">
      <LeadPopup />
      <Navbar currentPage={currentPage} setPage={setPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <HomeView setPage={setPage} />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <AboutView setPage={setPage} />
            </motion.div>
          )}
          {currentPage === 'services' && (
            <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <ServicesView setPage={setPage} />
            </motion.div>
          )}
          {currentPage === 'pricing' && (
            <motion.div key="pricing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <PricingView setPage={setPage} />
            </motion.div>
          )}
          {currentPage === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <ContactView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
