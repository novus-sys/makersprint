import { ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';
import { GlowText } from './GlowText';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative min-h-[60vh] flex flex-col justify-between border-t border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black pt-20 sm:pt-28 pb-12 sm:pb-16 w-full mt-24 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.07] blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Top Section Constrained to max-w-7xl */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Top Callout Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Applications Open • Limited Cohort</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Built for creators, hackers, and visionary founders.
            </h3>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://tally.so/r/WOG9jv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Register Now
            </a>
            <a
              href="https://sjcestep.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Visit SJCE-STEP</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Main Grid: Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand & Campus Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/SJCE-STEP%20Logo%20for%20dark%20background.png"
                alt="SJCE-STEP Logo"
                className="h-14 w-auto object-contain select-none"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Maker<span className="text-blue-500">Sprint</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm">
              The premier innovation sprint organised by <strong>SJCE-STEP</strong>. Empowering the next generation of deep-tech engineers, makers, and startup founders.
            </p>
            <div className="space-y-2 text-xs text-neutral-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>SJCE-STEP, JSS Science & Technology University Campus, Mysuru - 570006, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@sjcestep.in" className="hover:text-white transition-colors">
                  contact@sjcestep.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              The Sprint
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About MakerSprint</a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">Innovation Tracks</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">Event Timeline</a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-white transition-colors">Prizes & Perks</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Incubation Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Incubation Ecosystem
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a
                  href="https://sjcestep.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>SJCE-STEP Incubator</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-white transition-colors">
                  Pre-Incubation Pipeline
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Prototype FabLab Access
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Seed Grant Schemes
                </a>
              </li>
              <li>
                <a
                  href="https://jssstuniv.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>JSS STU University</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/sjcestep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://tally.so/r/WOG9jv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Apply Now →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Flashlight Glow Watermark */}
      <GlowText text="MakerSprint" />

      {/* Bottom Bar Constrained to max-w-7xl */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {CURRENT_YEAR} MakerSprint. Organised by SJCE-STEP. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
