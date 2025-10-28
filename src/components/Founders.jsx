import { motion } from 'framer-motion';
import { Cpu, Layers, Network } from 'lucide-react';

const founders = [
  {
    name: 'Dagi',
    title: 'The Engineer',
    desc: 'Builds the flawless platform. Systems, data, and reliability—executed with precision.',
    Icon: Cpu,
  },
  {
    name: 'Tsion',
    title: 'The Architect',
    desc: 'Creates immersive worlds. Narrative, visuals, and space crafted into premium experiences.',
    Icon: Layers,
  },
  {
    name: 'Yafet',
    title: 'The Strategist',
    desc: 'Drives business goals. Positioning, communication, and growth with ruthless clarity.',
    Icon: Network,
  },
];

const Founders = () => {
  return (
    <section className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          The Founding Trinity: Our Core Power
        </motion.h2>
        <p className="mt-4 text-center text-emerald-300/80">Discipline. Vision. Execution.</p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {founders.map(({ name, title, desc, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              {/* Subtle background grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 14px),\
                     repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 14px)'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{name}</h3>
                    <p className="text-emerald-300">{title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{desc}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
