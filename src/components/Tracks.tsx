import { Bot, Cpu, Network, HeartPulse, Leaf, Sparkles } from 'lucide-react';

export function Tracks() {
  const tracks = [
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'AI & Autonomous Agents',
      description:
        'Build agentic workflows, multi-modal reasoning models, and intelligent automated tools that solve complex human challenges.',
      tags: ['LLMs', 'Agent Swarms', 'RAG', 'Vision AI'],
    },
    {
      id: 'hardware-iot',
      icon: Cpu,
      title: 'Smart Hardware & IoT',
      description:
        'Engineer connected embedded devices, sensor meshes, edge computing nodes, robotics, and physical computing solutions.',
      tags: ['ESP32 / Arduino', 'Edge AI', 'Robotics', 'Sensors'],
    },
    {
      id: 'web3',
      icon: Network,
      title: 'Web3 & Decentralization',
      description:
        'Architect verifiable, decentralized apps, transparent financial primitives, identity proofs, and censorship-resistant protocols.',
      tags: ['Smart Contracts', 'DeFi', 'zk-Proofs', 'IPFS'],
    },
    {
      id: 'healthtech',
      icon: HeartPulse,
      title: 'HealthTech & BioInnovation',
      description:
        'Design solutions for clinical accessibility, assistive tech, wearable health analytics, and patient diagnostics.',
      tags: ['Wearables', 'Telemedicine', 'Assistive Tech', 'BioData'],
    },
    {
      id: 'cleantech',
      icon: Leaf,
      title: 'CleanTech & Sustainability',
      description:
        'Combat environmental challenges through renewable energy monitoring, waste reduction, precision agritech, and green mobility.',
      tags: ['Smart Grid', 'AgriTech', 'Carbon Tracking', 'EVs'],
    },
    {
      id: 'open-innovation',
      icon: Sparkles,
      title: 'Open Innovation',
      description:
        'Have a groundbreaking moonshot that transcends traditional categories? The open track is your canvas to build without constraints.',
      tags: ['Wildcard', 'Full Stack', 'Cross-Domain', 'Moonshots'],
    },
  ];

  return (
    <section id="tracks" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Innovation Tracks
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Pick your engineering battlefield. </strong>
          <span className="text-neutral-400">
            From autonomous AI agents to physical hardware and deep tech, build solutions across six cutting-edge domains.
          </span>
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <div
              key={track.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px]"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {track.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
