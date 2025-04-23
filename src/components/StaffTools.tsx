import { motion } from 'framer-motion';
// Mockup suggestion: Phone showing Runner App notification + Waiter App table status

const StaffTools = () => {
  const staffFeatures = [
    { title: 'Runner Notification System', description: 'Instant alerts on mobile devices when orders are ready for delivery, with table details.' },
    { title: 'Waiter Assistance App', description: 'Real-time table status, order management, and customer preference notes on the go.' },
    { title: 'Table Transfer System', description: 'Seamlessly move orders and tabs between tables or servers.' },
    { title: 'Direct Manager Communication', description: 'Request assistance or flag issues instantly from the waiter app.' },
    { title: 'Performance Metrics', description: 'Track delivery times and service efficiency for runners and waiters.' },
    { title: 'Multi-Device Coordination', description: 'Intelligent task distribution for efficient teamwork.' }
  ];
  return (
    <section id="staff-tools" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
           <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-heading">
            Staff Efficiency Tools
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-subheading">
            Empower your team with purpose-built applications for runners and service staff.
          </motion.p>
           {/* Mockup suggestion: Split phone screen showing runner alert on one side, waiter table view on other */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StaffTools;
