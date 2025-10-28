import { Suspense } from 'react';
import Preloader from './components/Preloader.jsx';
import Hero from './components/Hero.jsx';
import Founders from './components/Founders.jsx';
import FooterContact from './components/FooterContact.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-emerald-400/40 selection:text-white">
      {/* Preloader overlays on first paint */}
      <Preloader />

      {/* Main narrative sections */}
      <Suspense fallback={null}>
        <Hero />
        <Founders />
        <FooterContact />
      </Suspense>
    </div>
  );
}

export default App;
