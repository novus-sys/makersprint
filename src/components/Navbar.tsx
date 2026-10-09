import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: SJCE-STEP Logo & Nav Links */}
        <div className="flex items-center gap-8 lg:gap-10">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src="/SJCE-STEP%20Logo%20for%20dark%20background.png"
              alt="SJCE-STEP Logo"
              className="h-12 sm:h-14 w-auto object-contain select-none"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveItem(link.name)}
                className={`text-sm font-medium transition-opacity duration-200 cursor-pointer text-white hover:opacity-75 ${
                  activeItem === link.name ? 'opacity-100 font-semibold' : 'opacity-90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Register Now Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={onRegisterClick}
            className="px-6 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveItem(link.name);
                setMobileMenuOpen(false);
              }}
              className="text-base text-white hover:opacity-75 py-1 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col">
            <button
              type="button"
              onClick={onRegisterClick}
              className="w-full py-2.5 rounded-full bg-white text-black text-sm font-semibold"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
