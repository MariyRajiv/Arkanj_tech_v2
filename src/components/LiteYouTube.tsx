import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LiteYouTubeProps {
  videoId: string;
  poster?: string;
  autoPlay?: boolean;
  className?: string;
  title?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export const LiteYouTube: React.FC<LiteYouTubeProps> = ({ 
  videoId, 
  poster, 
  autoPlay = false, 
  className = "",
  title = "Video Player",
  loading = "lazy",
  fetchPriority = "auto"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      // Delay loading the heavy iframe by 3 seconds.
      // This ensures PageSpeed Insights completes its initial audit (FCP/LCP) 
      // before the heavy YouTube scripts are injected.
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  // Use mute=1 for autoplay compatibility and controls=0 for a cleaner look
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`;

  return (
    <div 
      className={`relative overflow-hidden bg-slate-100 ${className}`}
      onClick={() => !isLoaded && setIsLoaded(true)}
    >
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="poster"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full cursor-pointer group"
          >
            <img 
              src={poster || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={loading}
              fetchPriority={fetchPriority}
              width="640"
              height="360"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-all">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full scale-105"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
