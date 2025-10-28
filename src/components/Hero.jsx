import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rmx = useSpring(mx, { stiffness: 120, damping: 20 });
  const rmy = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(rmy, [ -40, 40 ], [ 8, -8 ]);
  const rotateY = useTransform(rmx, [ -40, 40 ], [ -8, 8 ]);

  const onMove = (e) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    mx.set(Math.max(-40, Math.min(40, x / 10)));
    my.set(Math.max(-40, Math.min(40, y / 10)));
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignettes for depth - never block Spline interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="pointer-events-none absolute inset-0" style={{
          background:
            'radial-gradient( 60% 50% at 50% 60%, rgba(0,242,169,0.12), transparent )'
        }} />
      </div>

      {/* Copy */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 flex min-h-screen w-full items-center justify-center text-center"
      >
        <div className="px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white"
            style={{ letterSpacing: '0.04em' }}
          >
            G-SQUAD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 text-lg md:text-2xl font-medium text-emerald-300"
          >
            Total Digital Execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-white/5 px-5 py-3 text-emerald-200 backdrop-blur-md"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive 3D Nexus • Hover & explore
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
