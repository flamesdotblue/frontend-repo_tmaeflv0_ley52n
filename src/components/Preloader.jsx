import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Pulsating G-Squad mark */}
            <motion.div
              className="w-24 h-24 rounded-full border-2 border-emerald-400/40 grid place-items-center"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(0,242,169,0.0)',
                  '0 0 40px rgba(0,242,169,0.25)',
                  '0 0 0px rgba(0,242,169,0.0)'
                ],
                rotate: [0, 6, -6, 0]
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.span
                className="text-2xl font-extrabold tracking-widest text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.02, 0.9] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                G
              </motion.span>
            </motion.div>

            <motion.p
              className="text-center text-sm md:text-base text-emerald-300/90"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              G-SQUAD. Loading Digital Dominance...
            </motion.p>

            {/* Subtle blueprint schematics */}
            <motion.div
              aria-hidden
              className="absolute -inset-24 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.15, 0.35, 0.2] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                backgroundImage: `radial-gradient( circle at 50% 50%, rgba(0,242,169,0.05), transparent 40% ),
                   repeating-linear-gradient(0deg, rgba(0,242,169,0.06) 0px, rgba(0,242,169,0.06) 1px, transparent 1px, transparent 12px),
                   repeating-linear-gradient(90deg, rgba(0,242,169,0.06) 0px, rgba(0,242,169,0.06) 1px, transparent 1px, transparent 12px)`
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
