import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Table management', href: '/table-management' },
      { label: 'Reservations', href: '/reservations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press kit', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export default function FooterV2() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-hairline bg-ink">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5" data-cursor="hover">
              <img src="/logo.png?v=20260226" alt="INSEAT" className="h-9 w-9 object-contain" />
              <span className="text-lg font-semibold tracking-tight text-foreground">INSEAT</span>
            </Link>
            <p className="mt-5 text-sm text-muted max-w-xs leading-relaxed">
              The operating system restaurants run on. Built by Achievengine.
            </p>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="block text-[10px] font-mono uppercase tracking-[0.22em] text-dim mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex items-center gap-2 border-b border-hairline focus-within:border-accent transition-colors">
                <input
                  type="email"
                  required
                  placeholder="you@restaurant.com"
                  className="flex-1 bg-transparent text-foreground placeholder:text-dim/60 text-sm py-2 outline-none"
                  data-cursor="hover"
                />
                <button
                  type="submit"
                  className="text-xs font-semibold text-foreground/80 hover:text-foreground transition"
                  data-cursor="hover"
                >
                  Subscribe →
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Twitter, href: 'https://x.com/inseat_hq', label: 'Twitter' },
                { Icon: Instagram, href: 'https://www.instagram.com/inseat_hq/', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/showcase/inseat/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-hairline bg-white/[0.02] flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-accent/40 hover:bg-white/[0.06] transition"
                  data-cursor="hover"
                >
                  <Icon size={14} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim mb-4">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith('/') ? (
                        <Link
                          to={l.href}
                          className="text-sm text-foreground/75 hover:text-foreground transition-colors"
                          data-cursor="hover"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-foreground/75 hover:text-foreground transition-colors"
                          data-cursor="hover"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-dim">
          <div>© {year} INSEAT · A product of Achievengine. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              All systems operational
            </span>
            <span className="hidden md:block h-3 w-px bg-hairline" />
            <span>Shams Business Center · Sharjah, UAE</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-10 h-px relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(124,92,252,0.4), rgba(0,229,196,0.4), transparent)',
          }}
        />
      </div>
    </footer>
  );
}
