import { Navbar } from './components/Navbar';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Tracks } from './components/Tracks';
import { Schedule } from './components/Schedule';
import { Prizes } from './components/Prizes';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

function App() {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden relative">
      {/* Continuous Vertical Boundary Guide Lines Running Across The Website */}
      <div className="pointer-events-none fixed inset-0 z-20 flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-white/10" />
      </div>

      {/* Top Navbar */}
      <Navbar onRegisterClick={scrollToRegister} />

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col justify-between pt-16">
        {/* Subtle ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10 -translate-y-2 sm:-translate-y-4">
          {/* Organised by SJCE-STEP Badge */}
          <a
            href="https://sjcestep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200 shadow-lg shadow-black/50 cursor-pointer"
          >
            <span>Organised by <strong className="font-semibold text-white">SJCE-STEP</strong></span>
          </a>

          <img
            src="/makersprint.png"
            alt="MakerSprint"
            className="w-full max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-[1140px] h-auto object-contain select-none"
          />

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              type="button"
              onClick={scrollToRegister}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-200 shadow-md shadow-white/10 active:scale-95 cursor-pointer"
            >
              Register
            </button>
            <button
              type="button"
              onClick={scrollToAbout}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold bg-black text-white border border-white hover:bg-white/10 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Partner Companies Grid Strip at Bottom of Hero */}
        <Partners />
      </section>

      {/* About & Stats Section */}
      <About />

      {/* Innovation Tracks */}
      <Tracks />

      {/* Schedule / Timeline */}
      <Schedule />

      {/* Prizes & SJCE-STEP Incubation */}
      <Prizes />

      {/* Registration Banner Callout */}
      <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs sm:text-sm font-semibold text-blue-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Applications Are Now Live</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-4">
            Ready to Sprint, Build, and Ship?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Join hundreds of visionary student innovators and makers at SJCE-STEP Campus for 36 hours of relentless creation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sjcestep.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/10 cursor-pointer"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 rounded-full bg-black text-white border border-white/30 hover:bg-white/10 text-sm sm:text-base font-semibold transition-all active:scale-95 cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
