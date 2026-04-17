import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import RevealText from '../../ui/RevealText';
import MagneticButton from '../../ui/MagneticButton';
import DashboardPanel from './DashboardPanel';
import FloatingModuleCards from './FloatingModuleCards';

export default function HeroV2() {
  const reduced = useReducedMotion();
  const dashboardWrapRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const credRef = useRef<HTMLDivElement | null>(null);

  const adminUrl = (import.meta.env.VITE_ADMIN_URL as string | undefined) || 'http://localhost:5173';

  // Page-load choreography
  useEffect(() => {
    if (reduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (eyebrowRef.current) {
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 12, letterSpacing: '0em' },
        { opacity: 1, y: 0, letterSpacing: '0.22em', duration: 1.1 },
        0.2
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.querySelectorAll('[data-stagger]'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        0.9
      );
    }

    if (credRef.current) {
      tl.fromTo(
        credRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.0
      );
    }

    if (dashboardWrapRef.current) {
      tl.fromTo(
        dashboardWrapRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out' },
        0.6
      );
    }
  }, [reduced]);

  // Cursor-reactive tilt on dashboard
  useEffect(() => {
    if (reduced) return;
    const el = dashboardWrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      gsap.to(el, {
        rotateY: dx * 4,
        rotateX: -dy * 3,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 1200,
        transformOrigin: '50% 50%',
      });
    };
    const onLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced]);

  return (
    <section className="relative pt-28 md:pt-32 pb-24 md:pb-32 overflow-hidden" id="top">
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 v2-grid-bg opacity-40" />
        {/* top fade */}
        <div
          className="absolute inset-x-0 top-0 h-64"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,92,252,0.18), transparent 70%)' }}
        />
        {/* accent glow left */}
        <div
          className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.7), transparent 70%)' }}
        />
        {/* mint glow right */}
        <div
          className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,229,196,0.5), transparent 70%)' }}
        />
        <div className="v2-noise" />
      </div>

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80 backdrop-blur mb-6"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              All-in-one hospitality OS
            </div>

            <RevealText
              as="h1"
              className="font-display text-[42px] leading-[1.04] sm:text-6xl lg:text-[76px] xl:text-[82px] font-bold tracking-[-0.02em]"
            >
              <span className="block text-foreground">The operating</span>
              <span className="block">
                <span className="v2-gradient-text">system restaurants</span>
              </span>
              <span className="block text-foreground">run on.</span>
            </RevealText>

            <RevealText
              as="p"
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted"
              delay={0.6}
            >
              POS, QR ordering, kitchen display, reservations, floor plans, staff, loyalty, and
              analytics — one platform, every shift, every guest.
            </RevealText>

            <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-3">
              <div data-stagger>
                <MagneticButton
                  as="a"
                  href={`${adminUrl}/register?plan=mid`}
                  className="v2-btn-primary"
                  cursor="view"
                  cursorText="START"
                >
                  Start free
                  <ArrowRight />
                </MagneticButton>
              </div>
              <div data-stagger>
                <MagneticButton
                  as="a"
                  href="#demo"
                  className="v2-btn-secondary"
                  cursor="view"
                  cursorText="DEMO"
                >
                  <PlayIcon />
                  Book a live demo
                </MagneticButton>
              </div>
            </div>

            <div ref={credRef} className="mt-9 flex flex-wrap items-center gap-5 text-xs text-dim">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#e60000]" />
                <span className="h-2 w-2 rounded-full bg-[#17a95a]" />
                <span className="h-2 w-2 rounded-full bg-[#fdbb30]" />
                Trusted across UAE · Ethiopia · India
              </span>
              <span className="hidden sm:block h-4 w-px bg-hairline" />
              <span>Setup in 5 minutes · No card required</span>
            </div>
          </div>

          {/* Right: dashboard + orbiting cards */}
          <div className="relative">
            <div className="relative pt-10 pb-14 lg:py-6">
              <div
                ref={dashboardWrapRef}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <DashboardPanel />
                <FloatingModuleCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
