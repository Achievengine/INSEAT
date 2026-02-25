import { motion } from 'framer-motion';

const tools = [
  {
    name: 'Multi-Branch Control',
    description: 'Manage all businesses, restaurants, venues, tables, and table types from one admin panel.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h4.5v18H4.5V3zm10.5 6h4.5v12H15V9zm-5.25 4.5h3v7.5h-3v-7.5z" />
      </svg>
    ),
  },
  {
    name: 'Menu & Category Ops',
    description: 'Control categories, items, modifiers, pricing, and staged publishing for every menu.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12m-12 4.5h12m-12 4.5h12M3.75 6.75h.008v.008H3.75V6.75zm0 4.5h.008v.008H3.75v-.008zm0 4.5h.008v.008H3.75v-.008z" />
      </svg>
    ),
  },
  {
    name: 'Orders & Reservations',
    description: 'Track order flow, manage reservations, and operate dynamic pricing rules from the same stack.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5m-7.5 4.5h7.5m-7.5 4.5H12m7.5 3h-15a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 014.5 3.75h15A1.5 1.5 0 0121 5.25v12a1.5 1.5 0 01-1.5 1.5z" />
      </svg>
    ),
  },
  {
    name: 'Inventory & Recipes',
    description: 'Run inventory items, recipe mapping, cost tracking, and stock movement operations.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-8.69 8.69a1.5 1.5 0 01-2.12 0L3.75 10.5m16.5-3l-5.25-5.25-11.25 11.25 5.25 5.25L20.25 7.5z" />
      </svg>
    ),
  },
  {
    name: 'Website Builder',
    description: 'Build and publish branded restaurant sites with menu sync directly from admin.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25zm0 3.75h18" />
      </svg>
    ),
  },
  {
    name: 'Customers & Loyalty',
    description: 'Manage customer records, loyalty rules, ratings, reviews, and targeted promotions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
      </svg>
    ),
  },
  {
    name: 'Kitchen, Cashier & Scheduling',
    description: 'Coordinate kitchen workflow, cashier control, and schedule management in one place.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Analytics Dashboard',
    description: 'Monitor historical dashboards, sales trends, and performance insights across all restaurants.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v17.25h16.5M8.25 15l3-3 2.25 2.25L18 9.75" />
      </svg>
    ),
  },
];

const AdminDashboard = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Operational Tools
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-5"
          >
            Run every restaurant workflow from one admin stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            From branch setup to menu operations, orders, reservations, kitchen, inventory, website builder, and analytics, everything is managed in one dashboard.
          </motion.p>
        </div>

        {/* Operational module cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
