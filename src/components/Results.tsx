import { useState } from 'react';
import { Trophy, Award, Sparkles, Bot, Wrench, CheckCircle2 } from 'lucide-react';

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
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'ai' | 'physical'>('all');

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

  const physicalWinners: WinnerCard[] = [
    {
      place: '1st Place',
      rankTitle: 'Grand Champions',
      teamName: 'Challengers',
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
        'Full Hardware Prototyping Lab & Co-Working Access',
      ],
    },
    {
      place: '2nd Place',
      rankTitle: 'First Runner Up',
      teamName: 'Hardware heroes',
      badge: '🥈 1st Runner Up',
      badgeClass: 'border-slate-300/40 bg-slate-300/10 text-slate-200',
      borderClass: 'border-slate-300/40 shadow-[0_0_35px_rgba(203,213,225,0.12)]',
      glowClass: 'from-slate-300/15 via-white/[0.03] to-transparent',
      iconColor: 'text-slate-300',
      perks: [
        'Pre-Incubation Mentorship at SJCE-STEP',
        'Official Trophy & Cash Prize',
        'Prototyping Lab & Developer Ecosystem Credits',
        'Certificate of Merit & Goodies',
      ],
    },
    {
      place: '3rd Place',
      rankTitle: 'Second Runner Up',
      teamName: 'Team Ganesha',
      badge: '🥉 2nd Runner Up',
      badgeClass: 'border-amber-600/40 bg-amber-600/10 text-amber-400',
      borderClass: 'border-amber-700/40 shadow-[0_0_30px_rgba(180,83,9,0.12)]',
      glowClass: 'from-amber-700/15 via-white/[0.03] to-transparent',
      iconColor: 'text-amber-500',
      perks: [
        'SJCE-STEP Startup Workshop Passes',
        'Official Trophy & Cash Prize',
        'Prototyping Lab & Developer Ecosystem Credits',
        'Certificate of Merit & Goodies',
      ],
    },
  ];

  const renderPodium = (winners: WinnerCard[], trackLabel: string) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end">
      {/* 2nd Place (Desktop Left) */}
      <div className="order-2 md:order-1">
        <div
          className={`relative rounded-3xl border ${winners[1].borderClass} bg-gradient-to-b ${winners[1].glowClass} bg-black/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${winners[1].badgeClass}`}>
                {winners[1].badge}
              </span>
              <Award className={`w-6 h-6 ${winners[1].iconColor}`} />
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
              {winners[1].rankTitle}
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 break-words">
              {winners[1].teamName}
            </h4>
            <div className="h-px w-full bg-white/10 my-4" />
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
              {winners[1].perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-400 shrink-0 mt-0.5">•</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span>Rank: <strong className="text-white font-semibold">{winners[1].place}</strong></span>
            <span>Track: <strong className="text-white font-semibold">{trackLabel}</strong></span>
          </div>
        </div>
      </div>

      {/* 1st Place (Desktop Center - Highlighted & Elevated) */}
      <div className="order-1 md:order-2 md:-translate-y-4">
        <div
          className={`relative rounded-3xl border-2 ${winners[0].borderClass} bg-gradient-to-b ${winners[0].glowClass} bg-black/80 backdrop-blur-xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-2xl relative overflow-hidden`}
        >
          {/* Grand Champion Top Ribbon Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-amber-400 text-black text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow-md">
              Grand Champion
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${winners[0].badgeClass}`}>
                {winners[0].badge}
              </span>
              <Trophy className={`w-8 h-8 ${winners[0].iconColor}`} />
            </div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
              {winners[0].rankTitle}
            </div>
            <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 break-words drop-shadow-md">
              {winners[0].teamName}
            </h4>
            <div className="h-px w-full bg-amber-400/20 my-4" />
            <ul className="space-y-3 mb-6 text-xs sm:text-sm text-neutral-200">
              {winners[0].perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-amber-400/20 flex items-center justify-between text-xs text-neutral-300">
            <span>Rank: <strong className="text-amber-300 font-bold">{winners[0].place}</strong></span>
            <span>Track: <strong className="text-amber-300 font-bold">{trackLabel}</strong></span>
          </div>
        </div>
      </div>

      {/* 3rd Place (Desktop Right) */}
      <div className="order-3 md:order-3">
        <div
          className={`relative rounded-3xl border ${winners[2].borderClass} bg-gradient-to-b ${winners[2].glowClass} bg-black/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${winners[2].badgeClass}`}>
                {winners[2].badge}
              </span>
              <Award className={`w-6 h-6 ${winners[2].iconColor}`} />
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
              {winners[2].rankTitle}
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 break-words">
              {winners[2].teamName}
            </h4>
            <div className="h-px w-full bg-white/10 my-4" />
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
              {winners[2].perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 shrink-0 mt-0.5">•</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span>Rank: <strong className="text-white font-semibold">{winners[2].place}</strong></span>
            <span>Track: <strong className="text-white font-semibold">{trackLabel}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="results" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm font-semibold text-amber-300 mb-4 shadow-lg shadow-amber-950/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>MakerSprint 2026 • Official Results</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          MakerSprint Winners
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Celebrating the exceptional makers and student innovators who built cutting-edge prototypes during MakerSprint at SJCE-STEP Campus across both AI and Physical Prototyping tracks.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md gap-1">
          <button
            type="button"
            onClick={() => setSelectedTrack('all')}
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedTrack === 'all'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Tracks
          </button>
          <button
            type="button"
            onClick={() => setSelectedTrack('ai')}
            className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedTrack === 'ai'
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Track</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedTrack('physical')}
            className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedTrack === 'physical'
                ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Physical Track</span>
          </button>
        </div>
      </div>

      {/* ================= AI TRACK RESULTS ================= */}
      {(selectedTrack === 'all' || selectedTrack === 'ai') && (
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

          {renderPodium(aiWinners, 'AI for SMEs')}
        </div>
      )}

      {/* ================= PHYSICAL TRACK RESULTS ================= */}
      {(selectedTrack === 'all' || selectedTrack === 'physical') && (
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Physical Prototyping Track
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Announced
                  </span>
                </div>
                <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                  Hardware fabrication, embedded systems, and physical prototypes
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Jury Verdict Finalized</span>
            </div>
          </div>

          {renderPodium(physicalWinners, 'Physical Prototyping')}
        </div>
      )}
    </section>
  );
}
