interface Partner {
  name: string;
  type: string;
  src: string;
  hasOwnCard?: boolean;
  caption?: string;
}

export function Partners() {
  const partners: Partner[] = [
    {
      name: 'SJCE-STEP',
      type: 'Incubator & Science Park',
      src: '/SJCE-STEP%20Logo%20for%20dark%20background.png',
      hasOwnCard: true,
    },
    {
      name: 'JSS STU',
      type: 'University Partner',
      src: '/Maker%20sprint%20Insta%20post.png',
    },
    {
      name: 'DST NIDHI',
      type: 'National Partner',
      src: '/Maker%20sprint%20Insta%20post%20(1).png',
    },
    {
      name: 'Govt of Karnataka',
      type: 'Government Partner',
      src: '/Maker%20sprint%20Insta%20post%20(2).png',
    },
    {
      name: 'KDEM',
      type: 'Ecosystem Partner',
      src: '/Maker%20sprint%20Insta%20post%20(3).png',
    },
    {
      name: 'JSS Polytechnic, Nanjangud',
      type: 'Academic Partner',
      src: '/Maker%20sprint%20Insta%20post%20(4).png',
      caption: 'JSS Polytechnic, Nanjangud',
    },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-white/10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-20 sm:h-24 flex items-center justify-center px-4 sm:px-6 transition-all duration-300 hover:bg-white/[0.04] group cursor-pointer select-none"
              title={`${partner.name} - ${partner.type}`}
            >
              <div className="opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center w-full">
                {partner.hasOwnCard ? (
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-12 sm:h-14 w-auto max-w-[130px] sm:max-w-[150px] object-contain drop-shadow-sm"
                  />
                ) : partner.caption ? (
                  <div className="bg-white rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 h-11 sm:h-12 flex flex-col items-center justify-center shadow-sm w-auto max-w-[155px] sm:max-w-[170px]">
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="h-5 sm:h-6 w-auto object-contain shrink-0"
                    />
                    <span className="text-[9px] sm:text-[10px] font-bold text-neutral-900 leading-tight tracking-tight text-center whitespace-nowrap mt-0.5">
                      {partner.caption}
                    </span>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-1.5 h-11 sm:h-12 flex items-center justify-center shadow-sm w-auto max-w-[140px] sm:max-w-[160px]">
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
