import { motion } from 'framer-motion';

const FooterContact = () => {
  return (
    <footer className="relative w-full bg-black py-24">
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 50% at 50% 0%, rgba(0,242,169,0.12), transparent)'
      }} />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Let’s Architect Your Digital Future
        </motion.h3>
        <p className="mt-3 text-center text-zinc-300">
          Premium builds. Precise strategy. Measurable impact.
        </p>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <form
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for your message. We will get back to you shortly.');
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-zinc-300">Name</label>
              <input id="name" required type="text" className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-400/40 focus:ring" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-zinc-300">Email</label>
              <input id="email" required type="email" className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-400/40 focus:ring" placeholder="you@company.com" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-zinc-300">Message</label>
              <textarea id="message" required rows={4} className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-400/40 focus:ring" placeholder="Tell us about your vision" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <div className="text-zinc-400 text-sm">Contact • hello@g-squad.io</div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-medium text-black transition-colors hover:bg-emerald-300">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-zinc-500">
          <div className="font-semibold tracking-widest text-zinc-400">G-SQUAD</div>
          <div>© {new Date().getFullYear()} G-Squad. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
