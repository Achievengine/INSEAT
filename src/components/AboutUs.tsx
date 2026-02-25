import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dharmaraj",
      role: "CEO/Founder",
      bio: "Visionary leader and founder of Inseat, driving the company's growth and strategic direction."
    },
    {
      id: 2,
      name: "Fiker",
      role: "VP",
      bio: "Strategic leader, guiding the company's business strategy and operations with expertise and dedication."
    },
    {
      id: 3,
      name: "Abenezer",
      role: "CTO",
      bio: "Leading our technical innovation and product development with expertise in scalable software solutions."
    },
    {
      id: 4,
      name: "Elie Ghazeb",
      role: "Product Director",
      bio: "Product strategist and innovation catalyst with a proven track record in product development. Elie ensures our solutions meet market needs, exceed expectations, and deliver measurable business value."
    }
  ];

  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About Inseat</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Revolutionizing the restaurant industry with innovative technology solutions since 2025.
            </p>
          </motion.div>

          {/* Company story */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Inseat was founded with a simple mission: to transform the dining experience for both restaurants and their customers.
              We recognized the challenges faced by restaurant owners in managing orders, engaging customers, and optimizing operations.
            </p>
            <p className="text-gray-600 mb-4">
              Our QR code ordering system began as a solution to streamline the ordering process, but quickly evolved into a comprehensive
              platform that addresses every aspect of restaurant management - from kitchen operations to customer loyalty programs.
            </p>
            <p className="text-gray-600 mb-4">
              INSEAT is a product of{' '}
              <a href="https://achievengine.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Achievengine
              </a>
              {' '}(achievengine.com). Achievengine is a subsidiary of{' '}
              <a href="https://vizasia.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Vizasia
              </a>
              {' '}(vizasia.co).
            </p>
          </motion.div>

          {/* Team members */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').length > 1
                        ? member.name.split(' ').map(n => n[0]).join('').toUpperCase()
                        : member.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
