import { Trophy, Award, Sparkles, Clock, Bot, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WinnerCard {
  place: string;
  rankTitle: string;
  teamName: string;
  badge: string;
  badgeClass: string;
  borderClass: string;
  glowClass: string;
  iconColor: string;
  isChampion?: boolean;
  perks: string[];
}

export function Results() {
  const aiWinners: WinnerCard[] = [
    {
      place: '1st Place',
      rankTitle: 'Grand Champions',
      teamName: 'Git Push & Pray',
      badge: '🏆 Winner',
      badgeClass: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
      borderClass: 'border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.22)]',
      glowClass: 'from-amber-500/20 via-amber-500/5 to-transparent',
      iconColor: 'text-amber-400',
      isChampion: true,
      perks: [
        'Direct Fast-Track Incubation Entry at SJCE-STEP',
        'MakerSprint Grand Trophy & Cash Prize',
        'Access to Seed Grant Pipeline (up to ₹10L)',
        'Full Prototyping Lab & Co-Working Access',
      ],
    },
    {
      place: '2nd Place',
      rankTitle: 'First Runner Up',
      teamName: 'AgentFlow',
      badge: '🥈 1st Runner Up',
      badgeClass: 'border-slate-300/40 bg-slate-300/10 text-slate-200',
      borderClass: 'border-slate-300/40 shadow-[0_0_35px_rgba(203,213,225,0.12)]',
      glowClass: 'from-slate-300/15 via-white/[0.03] to-transparent',
      iconColor: 'text-slate-300',
      perks: [
        'Pre-Incubation Mentorship at SJCE-STEP',
        'Official Trophy & Cash Prize',
        'Cloud & Developer Ecosystem Credits',
        'Certificate of Merit & Goodies',
      ],
    },
    {
      place: '3rd Place',
      rankTitle: 'Second Runner Up',
      teamName: 'JSSPM',
      badge: '🥉 2nd Runner Up',
      badgeClass: 'border-amber-600/40 bg-amber-600/10 text-amber-400',
      borderClass: 'border-amber-700/40 shadow-[0_0_30px_rgba(180,83,9,0.12)]',
      glowClass: 'from-amber-700/15 via-white/[0.03] to-transparent',
      iconColor: 'text-amber-500',
      perks: [
        'SJCE-STEP Startup Workshop Passes',
        'Official Trophy & Cash Prize',
        'Cloud & Developer Ecosystem Credits',
        'Certificate of Merit & Goodies',
      ],
    },
  ];

  return (
    <section id="results" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm font-semibold text-amber-300 mb-4 shadow-lg shadow-amber-950/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>MakerSprint 2026 • Official Results</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          MakerSprint Winners
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Celebrating the exceptional makers and student innovators who built cutting-edge prototypes during MakerSprint at SJCE-STEP Campus.
        </p>
      </div>

      {/* ================= AI TRACK RESULTS ================= */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  AI for SMEs Track
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Announced
                </span>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                AI solutions built to empower small and medium enterprises
              </p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-neutral-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Jury Verdict Finalized</span>
          </div>
        </div>

        {/* Podium Cards Grid: Reordered on desktop so 1st place stands tall in center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end">
          {/* 2nd Place (Desktop Left) */}
          <div className="order-2 md:order-1">
            <div
              className={`relative rounded-3xl border ${aiWinners[1].borderClass} bg-gradient-to-b ${aiWinners[1].glowClass} bg-black/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${aiWinners[1].badgeClass}`}>
                    {aiWinners[1].badge}
                  </span>
                  <Award className={`w-6 h-6 ${aiWinners[1].iconColor}`} />
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  {aiWinners[1].rankTitle}
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 break-words">
                  {aiWinners[1].teamName}
                </h4>
                <div className="h-px w-full bg-white/10 my-4" />
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
                  {aiWinners[1].perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 shrink-0 mt-0.5">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Rank: <strong className="text-white font-semibold">{aiWinners[1].place}</strong></span>
                <span>Track: <strong className="text-white font-semibold">AI</strong></span>
              </div>
            </div>
          </div>

          {/* 1st Place (Desktop Center - Highlighted & Elevated) */}
          <div className="order-1 md:order-2 md:-translate-y-4">
            <div
              className={`relative rounded-3xl border-2 ${aiWinners[0].borderClass} bg-gradient-to-b ${aiWinners[0].glowClass} bg-black/80 backdrop-blur-xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden`}
            >
              {/* Grand Champion Top Ribbon Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-amber-400 text-black text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow-md">
                  Grand Champion
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${aiWinners[0].badgeClass}`}>
                    {aiWinners[0].badge}
                  </span>
                  <Trophy className={`w-8 h-8 ${aiWinners[0].iconColor}`} />
                </div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  {aiWinners[0].rankTitle}
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 break-words drop-shadow-md">
                  {aiWinners[0].teamName}
                </h4>
                <div className="h-px w-full bg-amber-400/20 my-4" />
                <ul className="space-y-3 mb-6 text-xs sm:text-sm text-neutral-200">
                  {aiWinners[0].perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-amber-400/20 flex items-center justify-between text-xs text-neutral-300">
                <span>Rank: <strong className="text-amber-300 font-bold">{aiWinners[0].place}</strong></span>
                <span>Track: <strong className="text-amber-300 font-bold">AI for SMEs</strong></span>
              </div>
            </div>
          </div>

          {/* 3rd Place (Desktop Right) */}
          <div className="order-3 md:order-3">
            <div
              className={`relative rounded-3xl border ${aiWinners[2].borderClass} bg-gradient-to-b ${aiWinners[2].glowClass} bg-black/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${aiWinners[2].badgeClass}`}>
                    {aiWinners[2].badge}
                  </span>
                  <Award className={`w-6 h-6 ${aiWinners[2].iconColor}`} />
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  {aiWinners[2].rankTitle}
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 break-words">
                  {aiWinners[2].teamName}
                </h4>
                <div className="h-px w-full bg-white/10 my-4" />
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
                  {aiWinners[2].perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 shrink-0 mt-0.5">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Rank: <strong className="text-white font-semibold">{aiWinners[2].place}</strong></span>
                <span>Track: <strong className="text-white font-semibold">AI</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PHYSICAL TRACK ANNOUNCEMENT NOTICE ================= */}
      <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-8 sm:p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Ambient indicator lights */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[200px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs sm:text-sm font-semibold text-blue-400 mb-4">
              <Wrench className="w-4 h-4" />
              <span>Physical Prototyping Track</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Physical Track Results Announcement
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Evaluation of physical prototypes, hardware fabrication benchmarks, and bench testing are currently undergoing final jury review. The winners for the Physical Track will be officially declared tomorrow.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Multi-parameter hardware jury validation</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Incubation & Maker Lab entry awards</span>
              </div>
            </div>
          </div>

          {/* Announcement Schedule Card */}
          <div className="shrink-0 w-full lg:w-auto">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] backdrop-blur-md p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-lg">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-black animate-ping" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-1">
                Announcement Scheduled
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                Tomorrow @ 1:00 PM
              </div>
              <p className="text-xs text-neutral-400 max-w-[200px]">
                Stay tuned right here on the portal for the official declaration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
