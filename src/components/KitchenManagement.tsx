import { motion } from 'framer-motion';
// Mockup suggestion: Tablet showing the KDS order queue interface

const KitchenManagement = () => {
   const kitchenFeatures = [
    { title: 'Intelligent Order Display (KDS)', description: 'Real-time order queue with customizable station routing and prep timers.' },
    { title: 'Quality Control System', description: 'Access recipes, plating guides, and verification steps for consistency.' },
    { title: 'Allergen & Modification Alerts', description: 'Clear visual warnings for special requests and dietary needs.' },
    { title: 'Kitchen Analytics', description: 'Track preparation times, station performance, and identify bottlenecks.' },
    { title: 'Production Forecasting', description: 'AI-assisted recommendations based on historical order patterns.' },
    { title: 'Waste Reduction Tools', description: 'Monitor discarded items to identify patterns and minimize waste.' }
  ];
  return (
    <section id="kitchen" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
           <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-heading">
            Advanced Kitchen Management
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-subheading">
            Streamline back-of-house operations with our sophisticated Kitchen Display System (KDS).
          </motion.p>
          {/* Mockup suggestion: KDS screen showing order details and quality control checklist */}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenFeatures.map((feature, index) => (
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
export default KitchenManagement;
