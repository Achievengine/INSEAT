export default function FloatingModuleCards() {
  return (
    <>
      {/* KDS ticket card — top-right */}
      <div
        className="absolute z-20 hidden md:block animate-float"
        style={{ top: '4%', right: '-3%', transform: 'rotate(4deg)' }}
      >
        <div className="v2-glass-strong w-64 rounded-2xl p-4 shadow-card-v2">
          <div className="flex items-center justify-between">
            <span className="v2-chip !text-[9px] !tracking-[0.3em]" style={{ borderColor: 'rgba(0,229,196,0.35)', background: 'rgba(0,229,196,0.08)' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              KDS
            </span>
            <span className="font-mono text-[10px] text-dim">#4821</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-mono">Table</div>
              <div className="text-xl font-semibold text-foreground">T-07</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-mono">Elapsed</div>
              <div className="text-xl font-semibold font-mono text-foreground">04:12</div>
            </div>
          </div>
          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-foreground/85">Truffle Risotto</span>
              <span className="text-mint font-mono text-[10px]">READY</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground/85">Pan-seared Sea Bass</span>
              <span className="text-[#FFB84D] font-mono text-[10px]">COOKING</span>
            </div>
          </div>
          <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full"
              style={{
                width: '62%',
                background: 'linear-gradient(90deg, var(--v2-accent) 0%, var(--v2-accent-2) 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Reservation card — bottom-right */}
      <div
        className="absolute z-20 hidden md:block animate-float-delayed"
        style={{ bottom: '-4%', right: '6%', transform: 'rotate(-3deg)' }}
      >
        <div className="v2-glass-strong w-60 rounded-2xl p-4 shadow-card-v2">
          <div className="flex items-center gap-2">
            <span className="v2-chip !text-[9px] !tracking-[0.3em]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Reservation
            </span>
          </div>
          <div className="mt-3">
            <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-mono">Friday</div>
            <div className="text-lg font-semibold text-foreground">8:30 PM · Party of 4</div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-surface2"
                  style={{
                    background: `linear-gradient(135deg, hsl(${180 + i * 40} 80% 55%), hsl(${260 + i * 30} 70% 60%))`,
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] text-mint">CONFIRMED</span>
          </div>
        </div>
      </div>

      {/* Loyalty card — left */}
      <div
        className="absolute z-20 hidden md:block animate-float-more-delayed"
        style={{ top: '42%', left: '-4%', transform: 'rotate(-5deg)' }}
      >
        <div className="v2-glass-strong w-56 rounded-2xl p-4 shadow-card-v2">
          <div className="flex items-center gap-2">
            <span className="v2-chip !text-[9px] !tracking-[0.3em]" style={{ borderColor: 'rgba(0,229,196,0.35)', background: 'rgba(0,229,196,0.08)' }}>
              Loyalty
            </span>
            <span className="ml-auto font-mono text-[10px] text-mint">+42 pts</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15" fill="none"
                  stroke="url(#ringGrad)" strokeWidth="3" strokeLinecap="round"
                  strokeDasharray="94.2" strokeDashoffset="28" 
                />
                <defs>
                  <linearGradient id="ringGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7C5CFC" />
                    <stop offset="100%" stopColor="#00E5C4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-foreground">70%</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-mono">Tier up</div>
              <div className="text-sm font-semibold text-foreground">Aisha M.</div>
              <div className="text-[10px] text-dim">Gold · 930 / 1,000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
