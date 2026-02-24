import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type AdminView = 'dashboard' | 'reservations' | 'orders' | 'users' | 'menu' | 'inventory' | 'settings' | 'integrations' | 'reports';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState<AdminView>('dashboard');

  const navItems = useMemo(
    () => [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'reservations', label: 'Reservations' },
      { id: 'orders', label: 'Orders' },
      { id: 'users', label: 'User Management' },
      { id: 'menu', label: 'Menu Items' },
      { id: 'inventory', label: 'Inventory' },
      { id: 'settings', label: 'System Settings' },
      { id: 'integrations', label: 'Integrations' },
      { id: 'reports', label: 'Reports' }
    ] as { id: AdminView; label: string }[],
    []
  );

  const metrics = [
    { title: 'Total Revenue', value: '$42,389', change: '+12.5%' },
    { title: 'Average Order', value: '$28.45', change: '+3.2%' },
    { title: 'Customer Retention', value: '68.7%', change: '+5.3%' },
    { title: 'Avg. Service Time', value: '14.3m', change: '-1.2m' }
  ];

  const salesData = [
    { day: 'Mon', value: 24 },
    { day: 'Tue', value: 14 },
    { day: 'Wed', value: 40 },
    { day: 'Thu', value: 27 },
    { day: 'Fri', value: 32 },
    { day: 'Sat', value: 36 },
    { day: 'Sun', value: 29 }
  ];

  const loyaltyData = [
    { tier: 'Bronze', value: 856 },
    { tier: 'Silver', value: 623 },
    { tier: 'Gold', value: 297 },
    { tier: 'Platinum', value: 117 }
  ];

  const recentUsers = [
    { name: 'Alex Johnson', role: 'Manager', location: 'Main Branch', status: 'Active' },
    { name: 'Maria Garcia', role: 'Server', location: 'Main Branch', status: 'Active' },
    { name: 'James Wilson', role: 'Kitchen Staff', location: 'Downtown', status: 'Offline' },
    { name: 'Sarah Lee', role: 'Admin', location: 'Main Branch', status: 'Active' }
  ];

  return (
    <section id="admin-dashboard" className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(97,6,235,0.3),transparent_38%)]" />
      <div className="container-custom relative z-10">
        <div className="mb-10 text-center md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-heading text-white"
          >
            INSEAT Admin
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-3xl border border-white/15 bg-black/70 p-4 shadow-[0_34px_64px_-45px_rgba(0,0,0,0.95)] lg:grid-cols-12 lg:p-5">
          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 lg:col-span-3">
            <div className="mb-4 rounded-xl border border-primary/30 bg-primary/15 px-3 py-2.5">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">CONSOLE</p>
              <p className="mt-1 text-lg font-bold text-white">Admin Panel</p>
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const active = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveView(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      active ? 'border-primary bg-primary text-white' : 'border-white/10 bg-black text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`h-2 w-2 rounded-full ${active ? 'bg-white' : 'bg-primary/60'}`} />
                  </button>
                );
              })}
            </nav>
          </aside>

          <main className="rounded-2xl border border-white/10 bg-white p-4 text-black lg:col-span-9 lg:p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-black">Dashboard Overview</h3>
                <p className="text-sm text-black/60">Tuesday, February 24, 2026</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-black/80">Export Data</button>
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Refresh Data</button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {metrics.map((metric) => (
                    <article key={metric.title} className="rounded-xl border border-black/10 bg-black px-3 py-3 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{metric.title}</p>
                      <p className="mt-2 text-2xl font-bold">{metric.value}</p>
                      <p className="mt-1 text-xs text-primary">{metric.change}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-2">
                  <section className="rounded-xl border border-black/10 bg-white p-4">
                    <h4 className="mb-3 text-sm font-semibold tracking-[0.14em] text-black/70">Sales by Day (This Week)</h4>
                    <div className="flex h-44 items-end justify-between gap-2">
                      {salesData.map((item) => (
                        <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                          <div className="w-full rounded-md bg-primary/15">
                            <div className="w-full rounded-md bg-primary" style={{ height: `${item.value * 2.6}px` }} />
                          </div>
                          <span className="text-xs font-semibold text-black/60">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-xl border border-black/10 bg-black p-4 text-white">
                    <h4 className="mb-3 text-sm font-semibold tracking-[0.14em] text-white/75">Loyalty Program Analytics</h4>
                    <div className="space-y-2">
                      {loyaltyData.map((item) => {
                        const max = loyaltyData[0].value;
                        return (
                          <div key={item.tier}>
                            <div className="mb-1 flex justify-between text-xs text-white/75">
                              <span>{item.tier}</span>
                              <span>{item.value}</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-2 rounded-full bg-primary" style={{ width: `${(item.value / max) * 100}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>

                <section className="mt-4 rounded-xl border border-black/10 bg-white p-4">
                  <h4 className="mb-3 text-sm font-semibold tracking-[0.14em] text-black/70">Team Activity</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-black/10 text-left text-black/55">
                          <th className="pb-2 font-semibold">Name</th>
                          <th className="pb-2 font-semibold">Role</th>
                          <th className="pb-2 font-semibold">Location</th>
                          <th className="pb-2 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={`${user.name}-${user.role}`} className="border-b border-black/10 last:border-0">
                            <td className="py-2.5 font-medium text-black">{user.name}</td>
                            <td className="py-2.5 text-black/75">{user.role}</td>
                            <td className="py-2.5 text-black/75">{user.location}</td>
                            <td className="py-2.5 text-right">
                              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                user.status === 'Active' ? 'bg-primary/15 text-primary' : 'bg-black/10 text-black/60'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
