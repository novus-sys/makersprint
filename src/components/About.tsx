import { Clock, Trophy, Users, Rocket, Cpu } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Clock,
      value: '36 Hours',
      label: 'Continuous Building',
      desc: 'An intense, focused sprint to take your prototype from zero to one.',
    },
    {
      icon: Trophy,
      value: '₹1,00,000+',
      label: 'Prize & Grant Pool',
      desc: 'Cash rewards, track bounties, and prototype development support.',
    },
    {
      icon: Users,
      value: '300+ Hackers',
      label: 'Selective Cohort',
      desc: 'Top developers, hardware makers, and creative problem solvers.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Tag & Title */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Why MakerSprint
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Where ideas transform into built reality. </strong>
          <span className="text-neutral-400">
            An intensive 36-hour sprint backed by SJCE-STEP bringing together bold engineers and makers to build working code and hardware.
          </span>
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Large Feature Card: The Maker Philosophy */}
        <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-white/25 transition-all duration-300">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-all" />
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Build, Test, and Ship
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
            We prioritize real engineering over pitch presentations. Whether you are assembling autonomous IoT systems, 
            orchestrating multi-agent AI pipelines, or writing distributed protocols, MakerSprint gives you the mentorship, 
            lab tools, and compute needed to deliver proof-of-work.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">36-Hour Sprint</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Hardware Lab Access</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">1-on-1 Mentorship</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Demo Day</span>
          </div>
        </div>

        {/* Feature Card: SJCE-STEP Incubation Pipeline */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-white/25 transition-all duration-300 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-6">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Incubation Track
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Exceptional prototypes earn direct fast-track evaluation for incubation, seed funding, and patent filing assistance at SJCE-STEP.
            </p>
          </div>
          <a
            href="https://sjcestep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Explore SJCE-STEP Ecosystem →
          </a>
        </div>

        {/* 3 Metric Cards */}
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  {stat.label}
                </span>
                <Icon className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                {stat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
