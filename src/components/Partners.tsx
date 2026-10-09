export function Partners() {
  const partners = [
    {
      name: 'SJCE-STEP',
      type: 'Incubator',
      svg: (
        <span className="font-extrabold text-base sm:text-lg tracking-wider text-white">
          SJCE<span className="text-blue-500">-STEP</span>
        </span>
      ),
    },
    {
      name: 'JSS STU',
      type: 'University',
      svg: (
        <span className="font-bold text-base sm:text-lg tracking-widest text-neutral-300">
          JSS STU
        </span>
      ),
    },
    {
      name: 'Google Cloud',
      type: 'Cloud Partner',
      svg: (
        <span className="font-semibold text-base sm:text-lg tracking-tight text-neutral-300">
          Google<span className="font-normal text-neutral-400"> Cloud</span>
        </span>
      ),
    },
    {
      name: 'GitHub',
      type: 'Platform',
      svg: (
        <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-200">
          GitHub
        </span>
      ),
    },
    {
      name: 'Atlassian',
      type: 'Dev Tools',
      svg: (
        <span className="font-bold text-base sm:text-lg tracking-wider uppercase text-neutral-300">
          ▲ ATLASSIAN
        </span>
      ),
    },
    {
      name: 'Logitech',
      type: 'Hardware',
      svg: (
        <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-300 lowercase">
          logitech
        </span>
      ),
    },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-white/10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-20 sm:h-24 flex items-center justify-center px-6 transition-all duration-300 hover:bg-white/[0.04] group cursor-pointer select-none"
            >
              <div className="opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-200 flex items-center justify-center">
                {partner.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
