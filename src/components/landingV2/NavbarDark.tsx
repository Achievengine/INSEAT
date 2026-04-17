import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Blog', href: '/blog' },
];

export default function NavbarDark() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const reduced = useReducedMotion();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y < 10) setVisible(true);
      else if (y < lastY.current) setVisible(true);
      else if (y > lastY.current && y > 120) setVisible(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Page-load slide-in
  useEffect(() => {
    if (!navRef.current || reduced) return;
    gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
    );
  }, [reduced]);

  const adminUrl = (import.meta.env.VITE_ADMIN_URL as string | undefined) || 'http://localhost:5173';

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
      }}
      aria-label="Primary"
    >
      <div className="px-4 sm:px-6 lg:px-8 pt-3">
        <div
          className={`mx-auto max-w-6xl rounded-full border transition-all duration-500 ${
            scrolled ? 'v2-glass-strong border-hairline' : 'border-transparent bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between pl-5 pr-2 py-2">
            <Link to="/" className="flex items-center gap-2.5 group" data-cursor="hover">
              <div className="relative">
                <img src="/logo.png?v=20260226" alt="INSEAT" className="h-8 w-8 object-contain" />
                <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">INSEAT</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="#demo"
                className="v2-btn-secondary text-xs !py-2 !px-4"
                data-cursor="hover"
              >
                Book a demo
              </a>
              <a
                href={`${adminUrl}/register?plan=mid`}
                className="v2-btn-primary text-xs !py-2 !px-4"
                data-cursor="hover"
              >
                Start free
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground rounded-full hover:bg-white/5"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              data-cursor="hover"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" strokeLinecap="round" />
                    <path d="M4 17h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="v2-glass-strong rounded-3xl border border-hairline p-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/5 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="#demo" className="v2-btn-secondary text-sm !py-3 justify-center">Book a demo</a>
              <a href={`${adminUrl}/register?plan=mid`} className="v2-btn-primary text-sm !py-3 justify-center">
                Start free
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isAnchor = href.startsWith('#');
  const className =
    'relative px-4 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors group';
  const inner = (
    <>
      {label}
      <span
        className="absolute left-4 right-4 bottom-1.5 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
        aria-hidden="true"
      />
    </>
  );
  if (isAnchor) {
    return (
      <a href={href} className={className} data-cursor="hover">
        {inner}
      </a>
    );
  }
  return (
    <Link to={href} className={className} data-cursor="hover">
      {inner}
    </Link>
  );
}
