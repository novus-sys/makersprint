import { useState, useMemo, useEffect } from 'react';
import {
  Bot,
  Wrench,
  Search,
  Sparkles,
  Target,
  AlertCircle,
  Clock,
  Cpu,
  Layers,
  CheckCircle2,
  TrendingUp,
  UserCheck,
  Boxes,
  Languages,
  FileText,
  Scale,
  Activity,
  Cable,
  Maximize2,
  Shield,
  Store,
  Grid3X3,
  Recycle,
  Briefcase,
  X,
  ArrowRight,
} from 'lucide-react';

type TrackType = 'ai' | 'physical';

interface ProblemStatement {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: typeof Bot;
  problem: string;
  challenge: string;
  features: string[];
  extraLabel: string;
  extraValue: string;
}

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState<TrackType>('ai');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalStatement, setSelectedModalStatement] = useState<ProblemStatement | null>(null);

  // Lock body scroll and support Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedModalStatement(null);
      }
    };
    if (selectedModalStatement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModalStatement]);

  // AI Problem Statements (from AI_for_SMEs_Hackathon_Problem_Statements.docx)
  const aiStatements: ProblemStatement[] = [
    {
      id: 'ai-01',
      number: 'PS 01',
      title: 'SME Cash-Flow Early Warning System',
      category: 'Financial Intelligence',
      icon: TrendingUp,
      problem:
        'A profitable SME can still experience a cash-flow crisis when customer payments are delayed while salaries, supplier payments, rent, and other expenses remain due.',
      challenge:
        'Build a system that forecasts short-term cash flow and identifies potential cash shortages before they occur.',
      features: [
        'Receivables tracking',
        'Payables tracking',
        'Expense tracking',
        'Expected payment dates',
        'Cash-flow forecast',
        'Risk alerts',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Recommend actionable steps to mitigate a projected cash-flow shortfall.',
    },
    {
      id: 'ai-02',
      number: 'PS 02',
      title: 'AI Sales & Lead Follow-Up Engine',
      category: 'Sales & CRM Automation',
      icon: UserCheck,
      problem:
        'SMEs receive leads from WhatsApp, Instagram, websites, referrals, and marketplaces but often lose potential customers because follow-ups are inconsistent.',
      challenge:
        'Build an AI-powered lead management system that captures, scores, prioritises, and recommends follow-up actions for sales leads.',
      features: [
        'Lead capture',
        'Lead scoring',
        'Pipeline management',
        'Follow-up reminders',
        'Customer segmentation',
        'AI-generated communication',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Predict which leads are most likely to convert and suggest the next best action.',
    },
    {
      id: 'ai-03',
      number: 'PS 03',
      title: 'Smart Inventory & Demand Forecasting',
      category: 'Supply Chain & Inventory',
      icon: Boxes,
      problem:
        'Small retailers and distributors frequently overstock slow-moving products while running out of high-demand items.',
      challenge:
        'Build an intelligent inventory system that predicts demand and recommends purchasing quantities.',
      features: [
        'Inventory tracking',
        'Low-stock alerts',
        'Dead-stock identification',
        'Demand forecasting',
        'Purchase recommendations',
        'Sales analytics',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Account for seasonality, festivals, local events, or sudden market demand signals.',
    },
    {
      id: 'ai-06',
      number: 'PS 06',
      title: 'Local-Language Business Intelligence',
      category: 'Multilingual & Voice AI',
      icon: Languages,
      problem:
        'Many SME owners are more comfortable discussing their business in regional languages, while most business software expects structured English input.',
      challenge:
        'Build a multilingual business intelligence assistant that lets SME owners query business data using natural language or voice.',
      features: [
        'Regional-language input',
        'Natural-language business queries',
        'Business data retrieval',
        'Simple insights',
        'Voice input',
        'Multilingual responses',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Support regional Indian vernacular dialects with contextual voice synthesis.',
    },
    {
      id: 'ai-07',
      number: 'PS 07',
      title: 'SME Compliance & Document Intelligence',
      category: 'Document Intelligence & Legal',
      icon: FileText,
      problem:
        'SMEs manage invoices, purchase orders, contracts, licences, certificates, and other documents manually, making it difficult to find information and track deadlines.',
      challenge:
        'Build a document intelligence platform that extracts important information and alerts businesses about upcoming actions.',
      features: [
        'Document upload',
        'OCR / extraction',
        'Document categorisation',
        'Important-date extraction',
        'Expiry alerts',
        'Natural-language document search',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Allow querying across multiple unstructured business documents with grounded citations.',
    },
    {
      id: 'ai-08',
      number: 'PS 08',
      title: 'AI Procurement & Supplier Comparison',
      category: 'Procurement & Vendor Analysis',
      icon: Scale,
      problem:
        'SMEs often compare supplier prices and terms manually through calls, WhatsApp, emails, and quotations.',
      challenge:
        'Build a procurement assistant that extracts supplier quotations and helps businesses compare suppliers based on price, delivery, MOQ, payment terms, and reliability.',
      features: [
        'Quotation extraction',
        'Supplier comparison',
        'Price analysis',
        'MOQ comparison',
        'Delivery analysis',
        'Supplier scoring',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Generate trade-off explanations comparing delivery speed vs cost efficiency.',
    },
    {
      id: 'ai-09',
      number: 'PS 09',
      title: 'SME Customer Intelligence & Churn Prediction',
      category: 'Customer Retention & Analytics',
      icon: Activity,
      problem:
        'Large enterprises use customer analytics to identify churn, but many SMEs lack the tools to understand why customers stop purchasing.',
      challenge:
        'Build a customer intelligence platform that analyses purchase behaviour and identifies customers at risk of churn.',
      features: [
        'Purchase history',
        'Recency / frequency analysis',
        'Customer segmentation',
        'Churn-risk score',
        'Customer lifetime value',
        'Re-engagement recommendations',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Generate personalized re-engagement offers tailored to customer churn factors.',
    },
    {
      id: 'ai-10',
      number: 'PS 10',
      title: 'AI Business Operations Copilot',
      category: 'Unified Operations & BI',
      icon: Sparkles,
      problem:
        'SME owners often manage sales, customers, inventory, payments, staff, and expenses across spreadsheets, WhatsApp, paper records, and disconnected applications.',
      challenge:
        'Build an AI operations copilot that gives an SME owner a single interface to understand their business and take action.',
      features: [
        'Business dashboard',
        'Data upload / integration',
        'Natural-language queries',
        'Business insights',
        'Alerts',
        'Action recommendations',
      ],
      extraLabel: 'Bonus Opportunity',
      extraValue: 'Support proactive triggers like overdue collections, fast-selling stock, and lead reminders.',
    },
  ];

  // Physical Problem Statements (from MakerSprint_2026_Physical_Prototyping_Problem_Statements.docx)
  const physicalStatements: ProblemStatement[] = [
    {
      id: 'phys-01',
      number: 'PS 01',
      title: 'Safe Cable Storage at Home',
      category: 'Home & Electrical Safety',
      icon: Cable,
      problem:
        'Households use multiple charging cables, extension cords, and electrical accessories that can become tangled, cluttered, or difficult to store safely.',
      challenge:
        'Design and build a compact product that helps users organise and store frequently used electrical cables while keeping them accessible and reducing tangling.',
      features: [
        'Separate storage for different cables',
        'Simple cable access & return',
        'Neat, compact footprint',
        'Safe cable routing without sharp edges',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Cable Management Box',
    },
    {
      id: 'phys-02',
      number: 'PS 02',
      title: 'Compact Workstation for Limited Spaces',
      category: 'Ergonomic & Space-Saving',
      icon: Maximize2,
      problem:
        'Students and people working in small rooms often have limited space for studying, writing, or using a laptop.',
      challenge:
        'Develop a portable or foldable workstation that creates a usable study surface and can be stored away easily when not in use.',
      features: [
        'Stable working surface',
        'Foldable or space-saving structure',
        'Easy setup and storage',
        'Suitable dimensions for study tasks',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Foldable Study Table',
    },
    {
      id: 'phys-03',
      number: 'PS 03',
      title: 'Spill-Reducing Multi-Container Carrier',
      category: 'Logistics & Spill Prevention',
      icon: Shield,
      problem:
        'Carrying several small containers together can be awkward, and containers may tilt or spill during movement.',
      challenge:
        'Design a carrier that holds multiple small containers securely and makes them easier to transport together with reduced risk of tipping or spilling.',
      features: [
        'Secure placement for varied containers',
        'Comfortable grip or carrying method',
        'Improved stability during transit',
        'Easy loading and removal',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Multi-Container Carrier',
    },
    {
      id: 'phys-04',
      number: 'PS 04',
      title: 'Portable Display for Stalls and Exhibitions',
      category: 'Modular Retail & Display',
      icon: Store,
      problem:
        'Small businesses, student makers, and exhibitors need simple ways to display products at temporary stalls without bulky or difficult-to-transport fixtures.',
      challenge:
        'Create a compact display product that can be transported, assembled quickly, and used to present small products clearly at stalls or exhibitions.',
      features: [
        'Quick assembly and disassembly',
        'Stable product presentation',
        'Compact transport footprint',
        'Flexible multi-tier arrangement',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Portable Display Stand',
    },
    {
      id: 'phys-05',
      number: 'PS 05',
      title: 'Faster Sorting of Small Hardware',
      category: 'Workshop & Hardware Tooling',
      icon: Grid3X3,
      problem:
        'Small screws, nuts, bolts, washers, and similar components are often mixed together, making identification and sorting slow during repair or assembly work.',
      challenge:
        'Design a sorting tray or organiser that helps users separate, identify, and access small hardware components more efficiently.',
      features: [
        'Multiple sorting compartments',
        'Fast transfer & retrieval of parts',
        'Clear labelling & gauge areas',
        'Practical workbench handling',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Hardware Sorting Tray',
    },
    {
      id: 'phys-06',
      number: 'PS 06',
      title: 'Reusable Packaging for Small Products',
      category: 'Sustainable Packaging',
      icon: Recycle,
      problem:
        'Small products are often packed using disposable packaging that is discarded after a single use, creating repeated material use and waste.',
      challenge:
        'Design a reusable packaging solution that protects a small product during handling and can be opened, closed, and reused multiple times.',
      features: [
        'Reusable locking mechanism',
        'Adequate structural protection',
        'Simple assembly and packing',
        'Efficient use of raw material',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Reusable Product Packaging',
    },
    {
      id: 'phys-07',
      number: 'PS 07',
      title: 'One Structure for Packing, Carrying and Display',
      category: 'Dual-Form Structural Design',
      icon: Layers,
      problem:
        'Small products may require separate packaging for transport and a separate stand or arrangement for display, adding material and setup effort.',
      challenge:
        'Develop a product structure that can protect or hold a small item during packing and transport, then convert into a display arrangement with minimal effort.',
      features: [
        'Pack-to-display transformation',
        'Secure item containment',
        'Minimal additional loose parts',
        'Simple, repeatable deployment',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Pack-and-Display Box',
    },
    {
      id: 'phys-08',
      number: 'PS 08',
      title: 'Pocket-Friendly Travel Tech Organiser',
      category: 'Travel & Electronics Storage',
      icon: Briefcase,
      problem:
        'USB drives, card readers, adapters, and small electronic accessories are easy to misplace or damage when carried loosely in a bag or pocket.',
      challenge:
        'Design a compact travel organiser with a lid or closure that keeps small tech accessories together and makes them easy to carry and retrieve.',
      features: [
        'Compact, pocket-friendly form factor',
        'Lid or snap closure',
        'Dedicated accessory slots',
        'Scratch & loose movement prevention',
      ],
      extraLabel: 'Possible Product',
      extraValue: 'Travel Tech Organizer',
    },
  ];

  // Active statements based on current track
  const currentStatements = activeTrack === 'ai' ? aiStatements : physicalStatements;

  // Filtered statements based on search query
  const filteredStatements = useMemo(() => {
    if (!searchQuery.trim()) return currentStatements;
    const q = searchQuery.toLowerCase();
    return currentStatements.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.number.toLowerCase().includes(q) ||
        s.problem.toLowerCase().includes(q) ||
        s.challenge.toLowerCase().includes(q) ||
        s.extraValue.toLowerCase().includes(q) ||
        s.features.some((f) => f.toLowerCase().includes(q))
    );
  }, [currentStatements, searchQuery]);

  return (
    <section id="tracks" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background ambient lighting */}
      <div
        className={`absolute top-1/4 ${
          activeTrack === 'ai' ? 'right-10 bg-blue-600/10' : 'left-10 bg-amber-600/10'
        } w-[500px] h-[400px] blur-[140px] rounded-full pointer-events-none -z-10 transition-all duration-700`}
      />

      {/* Header */}
      <div className="max-w-4xl mb-12">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent mb-4 select-none">
          Innovation Tracks
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <strong className="text-white font-bold">Pick your engineering battlefield. </strong>
          <span className="text-neutral-400">
            Select between AI Software Systems and Physical Hardware Prototyping to explore the official problem statements.
          </span>
        </p>
      </div>

      {/* 2-Option Selector: AI & Physical */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        {/* Compact Toggle Pills with Animated Sliding Background */}
        <div className="relative grid grid-cols-2 w-[310px] sm:w-[360px] p-1 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-2xl shadow-lg shadow-black/40 select-none">
          {/* Smooth Sliding Pill Indicator */}
          <div
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-md shadow-white/20 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0 ${
              activeTrack === 'ai' ? 'translate-x-0' : 'translate-x-full'
            }`}
          />

          <button
            type="button"
            onClick={() => {
              setActiveTrack('ai');
              setSearchQuery('');
            }}
            className={`relative z-10 w-full py-2 px-2.5 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-400 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTrack === 'ai' ? 'text-black font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bot
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors duration-400 ${
                activeTrack === 'ai' ? 'text-black' : 'text-blue-400'
              }`}
            />
            <span className="truncate">AI Track</span>
            <span
              className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0 transition-colors duration-400 ${
                activeTrack === 'ai' ? 'bg-black/15 text-neutral-900' : 'bg-white/10 text-neutral-400'
              }`}
            >
              8 PS
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTrack('physical');
              setSearchQuery('');
            }}
            className={`relative z-10 w-full py-2 px-2.5 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-400 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTrack === 'physical' ? 'text-black font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Wrench
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors duration-400 ${
                activeTrack === 'physical' ? 'text-black' : 'text-amber-400'
              }`}
            />
            <span className="truncate">Physical Track</span>
            <span
              className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0 transition-colors duration-400 ${
                activeTrack === 'physical' ? 'bg-black/15 text-neutral-900' : 'bg-white/10 text-neutral-400'
              }`}
            >
              8 PS
            </span>
          </button>
        </div>

        {/* Compact Search Bar for Problem Statements */}
        <div className="relative w-full sm:w-60">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeTrack === 'ai' ? 'AI' : 'Physical'} problems...`}
            className="w-full pl-9 pr-3.5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
          />
        </div>
      </div>

      {/* Compact Track Overview Banner */}
      {activeTrack === 'ai' ? (
        <div className="mb-8 rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-950/25 via-black/50 to-indigo-950/20 p-4 sm:p-5 backdrop-blur-xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>AI for SMEs Hackathon</span>
                <span className="text-white/40">•</span>
                <span>Tier-1 & Tier-2 Focus</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                Build the AI Operating System for India&apos;s Next Million SMEs
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Build practical software prototypes solving cash-flow, inventory, lead follow-up, and procurement bottlenecks using agentic workflows and document intelligence.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>12-Hour Hackathon</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-blue-400" />
                <span>LLMs, RAG & Voice AI</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-950/25 via-black/50 to-orange-950/20 p-4 sm:p-5 backdrop-blur-xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Wrench className="w-3 h-3" />
                <span>MakerSprint 2026 Prototyping</span>
                <span className="text-white/40">•</span>
                <span>SJCE-STEP Facility</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                From Idea to Tangible Product
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Design and fabricate tangible physical products within 12 hours using 3D printing, laser cutting, CNC routing, woodworking, and metalworking.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>12-Hour Physical Sprint</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>3D Print & Makerspace Labs</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Problem Statements Grid: 4 Cards in One Row on Desktop */}
      {filteredStatements.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center my-6">
          <p className="text-neutral-400 text-sm mb-2">No problem statements match &ldquo;{searchQuery}&rdquo;.</p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-xs font-semibold text-white underline hover:opacity-80"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filteredStatements.map((item) => {
            const Icon = item.icon;
            const isAI = activeTrack === 'ai';
            return (
              <div
                key={item.id}
                onClick={() => setSelectedModalStatement(item)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-3px] cursor-pointer shadow-lg shadow-black/30"
              >
                {/* Subtle ambient accent glow */}
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 ${
                    isAI ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-amber-500/10 group-hover:bg-amber-500/20'
                  } rounded-full blur-xl transition-all`}
                />

                <div>
                  {/* Top Header: Icon, PS Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${
                          isAI
                            ? 'bg-blue-500/10 border-blue-500/25 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/40'
                            : 'bg-amber-500/10 border-amber-500/25 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                          isAI
                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                            : 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 font-medium truncate max-w-[125px]">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug tracking-tight group-hover:text-neutral-100 transition-colors line-clamp-2 min-h-[2.5rem]">
                    {item.title}
                  </h3>

                  {/* Short Problem Description */}
                  <p className="text-neutral-400 text-xs leading-relaxed mb-4 line-clamp-3 min-h-[3.25rem]">
                    {item.problem}
                  </p>
                </div>

                {/* Footer Action prompt */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/10 group-hover:border-white/30 transition-all ${
                      isAI
                        ? 'group-hover:bg-blue-500/15 group-hover:text-blue-400'
                        : 'group-hover:bg-amber-500/15 group-hover:text-amber-400'
                    }`}
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pop-up Modal for Full Problem Statement Details (Compact & Well-proportioned) */}
      {selectedModalStatement && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedModalStatement(null)}
        >
          <div
            className="relative w-full max-w-lg max-h-[88vh] bg-[#0d0e13] border border-white/15 rounded-2xl p-5 sm:p-6 overflow-y-auto shadow-2xl shadow-black/90 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glow accent inside modal */}
            <div
              className={`absolute top-0 right-0 w-48 h-48 ${
                activeTrack === 'ai' ? 'bg-blue-600/15' : 'bg-amber-600/15'
              } blur-3xl rounded-full pointer-events-none -z-10`}
            />

            {/* Compact Close Button */}
            <button
              type="button"
              onClick={() => setSelectedModalStatement(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Header: Icon, Badges & Track Name */}
            <div className="flex items-center gap-3 mb-3 pr-10">
              <div
                className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                  activeTrack === 'ai'
                    ? 'bg-blue-500/15 border-blue-500/30 text-blue-400'
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                }`}
              >
                <selectedModalStatement.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                      activeTrack === 'ai'
                        ? 'bg-blue-500/15 border-blue-500/30 text-blue-300'
                        : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                    }`}
                  >
                    {selectedModalStatement.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium">
                    {selectedModalStatement.category}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400">
                  {activeTrack === 'ai' ? 'AI for SMEs Track' : 'MakerSprint 2026 Prototyping'}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-4 leading-snug">
              {selectedModalStatement.title}
            </h3>

            {/* Full Problem Context */}
            <div className="mb-3.5">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                <AlertCircle className="w-3 h-3 text-rose-400" />
                <span>The Problem Context</span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed bg-white/[0.03] border border-white/5 rounded-xl p-3">
                {selectedModalStatement.problem}
              </p>
            </div>

            {/* The Challenge */}
            <div
              className={`mb-3.5 p-3.5 rounded-xl border ${
                activeTrack === 'ai'
                  ? 'bg-blue-950/25 border-blue-500/25'
                  : 'bg-amber-950/25 border-amber-500/25'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider mb-1">
                <Target className={`w-3 h-3 ${activeTrack === 'ai' ? 'text-blue-400' : 'text-amber-400'}`} />
                <span className={activeTrack === 'ai' ? 'text-blue-300' : 'text-amber-300'}>
                  The Engineering Challenge
                </span>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                {selectedModalStatement.challenge}
              </p>
            </div>

            {/* Suggested Capabilities / Prototype Features */}
            <div className="mb-3.5">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-neutral-400" />
                <span>
                  {activeTrack === 'ai' ? 'Suggested MVP Capabilities' : 'Suggested Prototype Features'}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedModalStatement.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Highlight: Bonus Opportunity or Target Product */}
            <div
              className={`p-3 rounded-xl border mb-4 ${
                activeTrack === 'ai'
                  ? 'bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border-blue-500/25'
                  : 'bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-amber-500/25'
              }`}
            >
              <div className="flex items-start gap-2 text-xs">
                <Sparkles className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${activeTrack === 'ai' ? 'text-blue-400' : 'text-amber-400'}`} />
                <div>
                  <strong className={activeTrack === 'ai' ? 'text-blue-300 font-bold' : 'text-amber-300 font-bold'}>
                    {selectedModalStatement.extraLabel}:{' '}
                  </strong>
                  <span className="text-neutral-200">{selectedModalStatement.extraValue}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedModalStatement(null)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
