import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadPopup } from './components/LeadPopup';
import { Page } from './types';

// Lazy load views for better performance
const HomeView = lazy(() => import('./views/HomeView').then(m => ({ default: m.HomeView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ServicesView = lazy(() => import('./views/ServicesView').then(m => ({ default: m.ServicesView })));
const PricingView = lazy(() => import('./views/PricingView').then(m => ({ default: m.PricingView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));

export default function App() {
  const [currentPage, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-blue-600 selection:text-white bg-white overflow-x-hidden">
      <LeadPopup />
      <Navbar currentPage={currentPage} setPage={setPage} />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white" />}>
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
        </Suspense>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
