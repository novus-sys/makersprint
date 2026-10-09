import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Who is eligible to participate in MakerSprint?',
      answer:
        'Any student enrolled in undergraduate or postgraduate degrees, recent alumni, designers, hardware hackers, and developers from any educational institution are welcome to apply.',
    },
    {
      question: 'What is the team size policy?',
      answer:
        'Teams can consist of 2 to 4 members. We strongly recommend forming multidisciplinary teams combining software engineers, hardware makers, and product designers.',
    },
    {
      question: 'Is there any registration fee?',
      answer:
        'No, participation in MakerSprint is 100% free. Selected participants will also be provided meals, snacks, high-speed Wi-Fi, workspace access, and maker swag kits.',
    },
    {
      question: 'Can we bring our own hardware and components?',
      answer:
        'Yes! You are encouraged to bring microcontrollers (Arduino, ESP32, Raspberry Pi), sensor kits, development boards, and components. Basic prototyping equipment will also be accessible at the venue.',
    },
    {
      question: 'Who owns the intellectual property (IP) developed during the sprint?',
      answer:
        '100% of the IP and code created during MakerSprint belongs strictly to you and your team. Neither the organizers nor the sponsors claim any ownership over your work.',
    },
    {
      question: 'Can we work on a pre-existing project?',
      answer:
        'All projects must be started and built from scratch during the 36-hour sprint. You are free to use open-source libraries, public packages, APIs, and boilerplate setups, but all core features must be implemented during the hackathon.',
    },
    {
      question: 'Where is the hackathon venue located?',
      answer:
        'MakerSprint will be hosted at the SJCE-STEP campus premises, located within JSS Science and Technology University (SJCE), Mysuru, Karnataka.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Frequently Asked
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Everything you need to know. </strong>
          <span className="text-neutral-400">
            Clear answers on eligibility, hardware tools, team limits, and 100% free participation.
          </span>
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-white/25 bg-white/[0.06] shadow-lg shadow-black/40'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-semibold text-white text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
