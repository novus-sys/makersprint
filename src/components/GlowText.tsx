import { useState, useRef } from 'react';

interface GlowTextProps {
  text: string;
  className?: string;
}

export function GlowText({ text, className = '' }: GlowTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      className={`relative w-full overflow-hidden select-none cursor-crosshair my-4 sm:my-6 ${className}`}
    >
      {/* Base Layer: Dark charcoal text with subtle contour */}
      <div
        className="w-full text-center whitespace-nowrap text-[15.8vw] font-bold tracking-tighter leading-none select-none px-2"
        style={{
          color: '#0d0d10',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
        }}
      >
        {text}
      </div>

      {/* Layer 2: Faint inner ambient illumination under cursor */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full text-center whitespace-nowrap text-[15.8vw] font-bold tracking-tighter leading-none select-none pointer-events-none px-2"
        style={{
          color: 'rgba(255, 255, 255, 0.03)',
          WebkitMaskImage: mousePos.active
            ? `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 65%)`
            : 'none',
          maskImage: mousePos.active
            ? `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 65%)`
            : 'none',
          opacity: mousePos.active ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        {text}
      </div>

      {/* Layer 3: Delicate, restrained outline rim glow around the cursor */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full text-center whitespace-nowrap text-[15.8vw] font-bold tracking-tighter leading-none select-none pointer-events-none px-2"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1.1px rgba(255, 255, 255, 0.65)',
          filter:
            'drop-shadow(0 0 6px rgba(255, 255, 255, 0.45)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.15))',
          WebkitMaskImage: mousePos.active
            ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 65%)`
            : 'none',
          maskImage: mousePos.active
            ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 65%)`
            : 'none',
          opacity: mousePos.active ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        {text}
      </div>
    </div>
  );
}
