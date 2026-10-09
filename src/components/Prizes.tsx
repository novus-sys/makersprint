import { Trophy, Award, Gift, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export function Prizes() {
  const podiumPrizes = [
    {
      position: '2nd Place',
      title: 'First Runner Up',
      amount: '₹30,000',
      badge: 'Silver Medalist',
      perks: [
        'Cash Prize & Official Trophy',
        'Pre-Incubation Mentorship at SJCE-STEP',
        'Cloud & Developer Credits',
        'Exclusive Goodies & Certificate of Merit',
      ],
      borderClass: 'border-white/15',
      glowClass: 'from-neutral-400/10 to-transparent',
    },
    {
      position: '1st Place',
      title: 'Grand Champions',
      amount: '₹50,000',
      badge: 'Winner',
      perks: [
        'Direct Fast-Track Incubation Entry at SJCE-STEP',
        'Grand Trophy & Cash Prize',
        'Access to Seed Grant Pipeline (up to ₹10L)',
        'Free Prototyping Lab & Co-Working Access',
        'Premium Tech Goodies & Swag Kit',
      ],
      borderClass: 'border-blue-500/40 shadow-[0_0_40px_rgba(0,82,204,0.25)]',
      glowClass: 'from-blue-600/20 to-transparent',
      isGrand: true,
    },
    {
      position: '3rd Place',
      title: 'Second Runner Up',
      amount: '₹20,000',
      badge: 'Bronze Medalist',
      perks: [
        'Cash Prize & Official Trophy',
        'SJCE-STEP Startup Workshop Passes',
        'Cloud & Developer Credits',
        'Exclusive Goodies & Certificate of Merit',
      ],
      borderClass: 'border-white/15',
      glowClass: 'from-amber-600/10 to-transparent',
    },
  ];

  const categoryPrizes = [
    {
      title: 'Best Hardware / IoT Prototype',
      reward: '₹10,000 + Hardware Toolkits',
      description: 'Recognizing the most intricate, functional embedded electronics or robotics build.',
    },
    {
      title: 'Most Innovative AI Solution',
      reward: '₹10,000 + Compute Credits',
      description: 'Awarded to the team delivering the most creative and useful autonomous agent or model.',
    },
    {
      title: 'Best All-Women Maker Team',
      reward: '₹10,000 + Mentorship Fellowship',
      description: 'Celebrating exceptional women engineers and leaders breaking boundaries in tech.',
    },
    {
      title: 'Beginner Breakthrough Award',
      reward: 'Swag & Maker Starter Kits',
      description: 'Awarded to first-time hackathon builders who demonstrate extraordinary passion and execution.',
    },
  ];

  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Prizes & Perks
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Over ₹1,00,000+ in rewards and grants. </strong>
          <span className="text-neutral-400">
            Cash bounties, trophies, and direct pre-incubation pipelines with seed grant access at SJCE-STEP.
          </span>
        </p>
      </div>

      {/* Podium Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">
        {podiumPrizes.map((prize) => (
          <div
            key={prize.position}
            className={`rounded-3xl border bg-white/[0.04] p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] ${prize.borderClass}`}
          >
            {prize.isGrand && (
              <div className="absolute top-0 right-0 left-0 bg-blue-600 py-1 text-center text-[11px] font-bold tracking-wider uppercase text-white shadow-sm">
                Grand Winner
              </div>
            )}

            <div className={prize.isGrand ? 'pt-4' : ''}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  {prize.badge}
                </span>
                <Trophy className={`w-6 h-6 ${prize.isGrand ? 'text-blue-400' : 'text-neutral-400'}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {prize.title}
              </h3>
              <div className="text-4xl font-extrabold text-white tracking-tight my-4">
                {prize.amount}
              </div>

              <div className="space-y-3 my-6 pt-4 border-t border-white/5">
                {prize.perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#register"
                className={`w-full py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  prize.isGrand
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                }`}
              >
                Compete For This
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Category Awards Grid */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
          Special Category Awards & Bounties
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categoryPrizes.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex items-start gap-4 hover:border-white/20 transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                  <h4 className="text-base font-bold text-white">{cat.title}</h4>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                    {cat.reward}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incubation Feature Callout */}
      <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-blue-900/20 via-black to-neutral-900/40 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond The Hackathon</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Direct Path to Venture Incubation at SJCE-STEP
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
            MakerSprint isn’t just a weekend sprint that ends on Sunday. Standout projects will be invited into the 
            <strong> SJCE-STEP Pre-Incubation Cohort</strong>, receiving seed-stage guidance, access to prototyping labs, 
            expert legal/patent consultation, and direct linkage to central & state government grant schemes.
          </p>
          <a
            href="https://sjcestep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
          >
            Learn More About SJCE-STEP Support →
          </a>
        </div>
      </div>
    </section>
  );
}
