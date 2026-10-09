import { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  tag?: string;
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const day1Events: TimelineEvent[] = [
    {
      time: '08:30 AM',
      title: 'Reporting & Check-in',
      description: 'Collect your maker badges, exclusive swag kit, and set up your workspace.',
      tag: 'Logistics',
    },
    {
      time: '10:00 AM',
      title: 'Opening Ceremony & Keynote',
      description: 'Address by SJCE-STEP leadership, event overview, rules, and track insights.',
      tag: 'Keynote',
    },
    {
      time: '11:30 AM',
      title: 'Hacking Commences',
      description: 'The sprint officially begins! Connect to high-speed internet and push your initial commits.',
      tag: 'Sprint Kickoff',
    },
    {
      time: '01:30 PM',
      title: 'Lunch & Networking',
      description: 'Recharge and connect with fellow hackers and student founders.',
      tag: 'Food',
    },
    {
      time: '04:30 PM',
      title: 'Mentorship Checkpoint 1',
      description: 'Industry experts and tech founders review your architecture, hardware choices, and approach.',
      tag: 'Mentorship',
    },
    {
      time: '08:00 PM',
      title: 'Dinner & Lightning Activities',
      description: 'Hot dinner served followed by quick icebreaker games and sponsor giveaways.',
      tag: 'Food & Fun',
    },
    {
      time: '11:59 PM',
      title: 'Midnight Energy Boost',
      description: 'Midnight snacks, coffee, and all-night collaborative hacking session.',
      tag: 'Fuel',
    },
  ];

  const day2Events: TimelineEvent[] = [
    {
      time: '08:00 AM',
      title: 'Breakfast & Morning Standup',
      description: 'Power breakfast and final review of sprint deliverables with your team.',
      tag: 'Fuel',
    },
    {
      time: '10:30 AM',
      title: 'Mentorship Checkpoint 2: Demo Prep',
      description: 'Dry run of your pitch deck and live product demo with senior mentors.',
      tag: 'Pitching',
    },
    {
      time: '01:00 PM',
      title: 'Lunch & Code Freeze',
      description: 'Final repository push, README documentation, and portal submission.',
      tag: 'Deadline',
    },
    {
      time: '02:30 PM',
      title: 'Grand Jury Demos & Pitching',
      description: 'Live interactive demonstrations before an esteemed jury of founders, VCs, and tech leads.',
      tag: 'Evaluation',
    },
    {
      time: '05:30 PM',
      title: 'Valedictory & Prize Distribution',
      description: 'Announcement of winners, track bounties, SJCE-STEP incubation offers, and closing remarks.',
      tag: 'Ceremony',
    },
  ];

  const events = activeDay === 'day1' ? day1Events : day2Events;

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-4xl mb-14">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Event Schedule
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">36 hours of relentless momentum. </strong>
          <span className="text-neutral-400">
            From architecture checkpoints and midnight sprints to live jury demos and grand valedictory.
          </span>
        </p>
      </div>

      {/* Day Toggle Switcher */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex p-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setActiveDay('day1')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeDay === 'day1'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Day 1: Kickoff & Sprint
          </button>
          <button
            type="button"
            onClick={() => setActiveDay('day2')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeDay === 'day2'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Day 2: Ship & Pitch
          </button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-white/20 to-transparent -translate-x-1/2" />

        <div className="space-y-8">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.title}
                className={`relative flex items-center flex-col sm:flex-row ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-blue-400 z-10 shadow-[0_0_12px_rgba(0,82,204,0.8)]" />

                {/* Content Box */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left sm:pr-8' : 'sm:text-left sm:pl-8'
                  }`}
                >
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                      {event.tag && (
                        <span className="text-[11px] font-medium text-neutral-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                          {event.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
