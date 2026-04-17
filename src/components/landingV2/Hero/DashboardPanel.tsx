import { useEffect, useRef, useState } from 'react';
import NumberCounter from '../../ui/NumberCounter';

const tabs = ['POS', 'Orders', 'Reservations', 'Kitchen', 'Menu', 'Staff', 'Analytics'];

const orders = [
  { id: '#4821', table: 'T-07', items: 2, time: '04:12', status: 'ready' },
  { id: '#4820', table: 'T-12', items: 4, time: '06:48', status: 'cooking' },
  { id: '#4819', table: 'T-03', items: 3, time: '08:22', status: 'cooking' },
  { id: '#4818', table: 'T-09', items: 1, time: '11:05', status: 'late' },
];

const statusColor: Record<string, string> = {
  ready: '#00E5C4',
  cooking: '#FFB84D',
  late: '#FF4D6A',
};

export default function DashboardPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const [hour, setHour] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const h = d.getHours().toString().padStart(2, '0');
      const m = d.getMinutes().toString().padStart(2, '0');
      setHour(`${h}:${m}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab((v) => (v + 1) % tabs.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="v2-glass-strong relative overflow-hidden rounded-2xl p-0 shadow-card-v2">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-white/[0.02] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF4D6A]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFB84D]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00E5C4]/70" />
          <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-dim font-mono">
            inseat · command center
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-dim">
          <span className="flex items-center gap-1.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            LIVE
          </span>
          <span>{hour}</span>
        </div>
      </div>

      {/* tab row */}
      <div className="relative border-b border-hairline px-4">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`relative shrink-0 px-3 py-3 text-xs font-medium transition ${
                i === activeTab ? 'text-foreground' : 'text-dim hover:text-foreground/80'
              }`}
              data-cursor="hover"
            >
              {t}
              {i === activeTab && (
                <span
                  className="absolute left-2 right-2 bottom-0 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--v2-accent), var(--v2-accent-2))' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline/60 border-b border-hairline">
        <Kpi label="Today's revenue" value="$4,812" to={4812} prefix="$" />
        <Kpi label="Orders" value="128" to={128} />
        <Kpi label="Avg ticket time" value="11:42" raw />
        <Kpi label="Tables occupied" value="17/24" raw subtle="71%" />
      </div>

      {/* body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative border-b lg:border-b-0 lg:border-r border-hairline p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-dim font-mono">Revenue · Last 24h</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-foreground">$4,812.40</span>
                <span className="text-xs font-mono text-mint">+18.2%</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-dim">
              {['1H', '6H', '24H', '7D'].map((p, idx) => (
                <span
                  key={p}
                  className={`rounded-full px-2 py-1 ${idx === 2 ? 'bg-white/10 text-foreground' : ''}`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <Chart />

          {/* data sweep overlay */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="absolute top-0 h-full w-20 animate-data-sweep"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,229,196,0.18), transparent)',
              }}
            />
          </div>
        </div>

        {/* live orders + floor */}
        <div className="p-5 space-y-5">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.22em] text-dim font-mono">Active orders</div>
              <span className="text-[10px] font-mono text-dim">{orders.length} in queue</span>
            </div>
            <div className="space-y-2">
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between rounded-xl border border-hairline bg-white/[0.02] px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative inline-flex h-2 w-2">
                      <span
                        className="absolute inset-0 animate-ping rounded-full opacity-60"
                        style={{ background: statusColor[o.status] }}
                      />
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full"
                        style={{ background: statusColor[o.status] }}
                      />
                    </span>
                    <span className="font-mono text-[11px] text-foreground">{o.id}</span>
                    <span className="text-[11px] text-dim">· {o.table}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="text-dim">{o.items} items</span>
                    <span className="text-foreground">{o.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.22em] text-dim font-mono">Floor</div>
              <span className="text-[10px] font-mono text-dim">17 / 24 occupied</span>
            </div>
            <FloorMap />
          </div>
        </div>
      </div>

      {/* shortcut pill */}
      <div className="absolute bottom-3 right-3 hidden md:flex items-center gap-1.5 rounded-full border border-hairline bg-white/[0.04] px-3 py-1.5 text-[10px] font-mono text-dim backdrop-blur">
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-foreground">⌘</kbd>
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-foreground">K</kbd>
        <span>Search</span>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  to,
  prefix,
  raw,
  subtle,
}: {
  label: string;
  value: string;
  to?: number;
  prefix?: string;
  raw?: boolean;
  subtle?: string;
}) {
  return (
    <div className="bg-[#0B0B12] px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-mono">{label}</div>
      <div className="mt-1.5 flex items-baseline gap-2">
        {raw ? (
          <span className="text-lg font-semibold text-foreground font-mono">{value}</span>
        ) : (
          <NumberCounter
            to={to ?? 0}
            prefix={prefix}
            duration={1.6}
            className="text-lg font-semibold text-foreground font-mono"
          />
        )}
        {subtle && <span className="text-[11px] font-mono text-mint">{subtle}</span>}
      </div>
    </div>
  );
}

function Chart() {
  // Static-looking line chart with dash-draw animation
  const pts = [
    [0, 62],
    [12, 58],
    [24, 48],
    [36, 52],
    [48, 38],
    [60, 42],
    [72, 28],
    [84, 34],
    [96, 22],
    [100, 18],
  ];
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  const area = `${d} L 100 100 L 0 100 Z`;

  return (
    <div className="relative h-44 w-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#7C5CFC" />
            <stop offset="100%" stopColor="#00E5C4" />
          </linearGradient>
        </defs>

        {/* grid */}
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
        ))}

        <path d={area} fill="url(#areaFill)" />
        <path
          d={d}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'drawLine 2.4s ease-out 0.4s forwards' }}
        />
      </svg>
      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* data point */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: '72%', top: '28%' }}
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-60" />
          <span className="relative block h-2.5 w-2.5 rounded-full bg-mint ring-4 ring-mint/20" />
        </div>
      </div>
    </div>
  );
}

function FloorMap() {
  const tables = [
    { id: 1, occupied: true, pulse: true },
    { id: 2, occupied: true },
    { id: 3, occupied: false },
    { id: 4, occupied: true },
    { id: 5, reserved: true },
    { id: 6, occupied: true, pulse: true },
    { id: 7, occupied: true },
    { id: 8, occupied: false },
  ];
  return (
    <div className="relative rounded-xl border border-hairline bg-[#0B0B12] p-3">
      <div className="grid grid-cols-4 gap-2">
        {tables.map((t) => {
          const color = t.reserved
            ? 'bg-[#FFB84D]/20 border-[#FFB84D]/40'
            : t.occupied
            ? 'bg-mint/10 border-mint/30'
            : 'bg-white/[0.02] border-hairline';
          const dot = t.reserved ? 'bg-[#FFB84D]' : t.occupied ? 'bg-mint' : 'bg-white/30';
          return (
            <div
              key={t.id}
              className={`relative aspect-square rounded-lg border ${color} flex items-center justify-center`}
            >
              <div className="relative">
                {t.pulse && (
                  <span
                    className="absolute inset-[-6px] rounded-full opacity-50"
                    style={{ background: `radial-gradient(circle, var(--v2-accent-2) 0%, transparent 70%)` }}
                  />
                )}
                <span className={`relative inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
              </div>
              <span className="absolute bottom-0.5 right-1 text-[8px] font-mono text-dim">T{t.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
