import { useState } from 'react';
import { Clock, Calendar, Rocket } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  tag: string;
  type?: 'keynote' | 'food' | 'sprint' | 'mentorship' | 'buffer' | 'deadline' | 'ceremony' | 'logistics';
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const day1Events: TimelineEvent[] = [
    {
      time: '02:00 PM - 02:30 PM',
      title: 'Arrival & Inauguration Ceremony',
      description: 'Official inauguration at SJCE-STEP auditorium, lamp lighting ceremony, and arrival of academic leadership & industry dignitaries.',
      tag: 'Inauguration',
      type: 'ceremony',
    },
    {
      time: '02:30 PM - 03:00 PM',
      title: 'Keynote Address by SJCE-STEP Leadership',
      description: 'Inspirational address on deep-tech innovation, university ecosystem support, incubation opportunities, and the maker mindset.',
      tag: 'Keynote',
      type: 'keynote',
    },
    {
      time: '03:00 PM - 03:30 PM',
      title: 'Hackathon Guidelines & Track Briefing',
      description: 'Comprehensive walkthrough of innovation tracks, problem statements, evaluation rubrics, commit requirements, and mentorship protocol.',
      tag: 'Instructions',
      type: 'logistics',
    },
    {
      time: '03:30 PM - 03:45 PM',
      title: 'Participant Q&A & High Tea',
      description: 'Interactive query resolution with organizers followed by high tea, informal networking, and prep for the sprint day.',
      tag: 'Networking',
      type: 'food',
    },
  ];

  const day2Events: TimelineEvent[] = [
    {
      time: '08:30 AM',
      title: 'Reporting & Check-in',
      description: 'Participant check-in, confirmation of team registrations, ID badge collection, and distribution of maker kits.',
      tag: 'Reporting',
      type: 'logistics',
    },
    {
      time: '09:00 AM',
      title: 'Workspace Setup & Discrepancy Buffer',
      description: 'Hardware lab bench allocation, high-speed Wi-Fi setup, component collection, and resolution of any team or portal discrepancies.',
      tag: 'Discrepancy Buffer',
      type: 'buffer',
    },
    {
      time: '09:30 AM',
      title: 'Final Sprint Instructions & Platform Guidelines',
      description: 'Briefing on GitHub commit standards, mentor callout workflows, prototype evaluation metrics, and lab safety guidelines.',
      tag: 'Instructions',
      type: 'logistics',
    },
    {
      time: '10:00 AM',
      title: 'Hackathon Sprint Commences',
      description: 'The hackathon clock officially starts! Connect to compute, start drafting hardware schematics, scaffold repos, and push your first commits.',
      tag: 'Sprint Kickoff',
      type: 'sprint',
    },
    {
      time: '01:00 PM - 02:00 PM',
      title: 'Lunch Break & Informal Sync',
      description: 'Nutritious catered lunch for all teams. Take a mental break, sync with teammates, and connect with fellow hackers.',
      tag: 'Lunch Time',
      type: 'food',
    },
    {
      time: '03:30 PM',
      title: 'Mentorship Checkpoint 1',
      description: '1-on-1 desk reviews by tech founders, architects, and hardware experts to validate circuit designs, code structure, and roadmap.',
      tag: 'Mentorship',
      type: 'mentorship',
    },
    {
      time: '06:30 PM',
      title: 'Mentorship Checkpoint 2 (Pitch & Demo Prep)',
      description: 'Dry run of product demos and pitch decks with senior startup mentors to hone the value proposition before final jury evaluation.',
      tag: 'Pitching',
      type: 'mentorship',
    },
    {
      time: '07:30 PM',
      title: 'Evening Refreshments & Submission Discrepancy Buffer',
      description: 'Coffee and snacks with a dedicated buffer period to resolve merge conflicts, upload demo assets, and address portal discrepancies.',
      tag: 'Buffer & Snacks',
      type: 'buffer',
    },
    {
      time: '08:00 PM',
      title: 'Code Freeze & Project Submission',
      description: 'Strict code freeze. Final repository push, README documentation, demo video link, and project portal submission.',
      tag: 'Code Freeze',
      type: 'deadline',
    },
    {
      time: '08:30 PM',
      title: 'Grand Jury Demos & Live Pitching',
      description: 'Live interactive demonstrations before an esteemed jury of startup founders, VCs, and technical architects.',
      tag: 'Evaluation',
      type: 'ceremony',
    },
    {
      time: '09:45 PM',
      title: 'Valedictory & Prize Distribution Ceremony',
      description: 'Announcement of winners, track bounties, SJCE-STEP incubation vouchers, seed grant pathways, and closing remarks.',
      tag: 'Awards',
      type: 'ceremony',
    },
    {
      time: '10:15 PM - 10:30 PM',
      title: 'Wrap-up & Wrap Discrepancy Clearance',
      description: 'Certificate collection, lab equipment return, team photography, and closing wrap-up of MakerSprint.',
      tag: 'Wrap-up',
      type: 'logistics',
    },
  ];

  const events = activeDay === 'day1' ? day1Events : day2Events;

  const getTagStyle = (type?: string) => {
    switch (type) {
      case 'ceremony':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'keynote':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'sprint':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'food':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'mentorship':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'buffer':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'deadline':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-neutral-400 bg-white/5 border-white/10';
    }
  };

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Event Schedule
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Two days of relentless creation. </strong>
          <span className="text-neutral-400">
            From the inauguration ceremony on Oct 30 to the full hackathon sprint, judging, and awards on Oct 31.
          </span>
        </p>
      </div>

      {/* Day Switcher Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
        {/* Day 1 Button */}
        <button
          type="button"
          onClick={() => setActiveDay('day1')}
          className={`p-5 sm:p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
            activeDay === 'day1'
              ? 'border-blue-500/60 bg-blue-500/[0.08] shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30'
              : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
              <Calendar className="w-3.5 h-3.5" />
              Day 1 • 30th October
            </span>
            <span className="text-xs font-medium text-neutral-400">
              2:00 PM – 3:45 PM
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            Inauguration Ceremony
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Keynotes by leadership, problem statement release, track briefing & participant Q&A.
          </p>
        </button>

        {/* Day 2 Button */}
        <button
          type="button"
          onClick={() => setActiveDay('day2')}
          className={`p-5 sm:p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
            activeDay === 'day2'
              ? 'border-emerald-500/60 bg-emerald-500/[0.08] shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
              : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              <Rocket className="w-3.5 h-3.5" />
              Day 2 • 31st October
            </span>
            <span className="text-xs font-medium text-neutral-400">
              8:30 AM – 10:30 PM
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            Hackathon Sprint Day
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Instructions, building, mentorship checkpoints, lunch, code freeze, jury demos & valedictory.
          </p>
        </button>
      </div>

      {/* Active Day Overview Banner */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-neutral-300">
          <Clock className="w-4 h-4 text-blue-400" />
          <span>
            {activeDay === 'day1'
              ? '30th October: 2:00 PM to 3:45 PM (Inauguration, Track Briefing & Q&A)'
              : '31st October: 8:30 AM to 10:30 PM (Reporting, Instructions, Lunch, Discrepancies & Full Sprint)'}
          </span>
        </div>
        <span className="text-neutral-500 font-medium">
          {activeDay === 'day1' ? '4 Sessions' : '12 Milestones'}
        </span>
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
                key={`${event.time}-${event.title}`}
                className={`relative flex items-center flex-col sm:flex-row ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div
                  className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 z-10 ${
                    activeDay === 'day1'
                      ? 'border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                      : 'border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                  }`}
                />

                {/* Content Box */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left sm:pr-8' : 'sm:text-left sm:pl-8'
                  }`}
                >
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-white/25 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                      {event.tag && (
                        <span
                          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${getTagStyle(
                            event.type
                          )}`}
                        >
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
