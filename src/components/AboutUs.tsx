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
      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="text-secondary">About </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 100%)',
                }}
              >
                Inseat
              </span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 text-lg max-w-4xl">
              Helping hospitality teams streamline service, simplify operations, and deliver better guest experiences since 2025.
            </p>
          </motion.div>

          {/* Company story */}
          <motion.div variants={itemVariants} className="mb-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              We built Inseat because hospitality teams should not need disconnected tools to run service, menus, reservations, payments, loyalty, and operations. INSEAT gives operators one platform for smoother shifts, clearer workflows, and repeatable guest experiences.
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
            <h3 className="text-2xl font-bold text-secondary mb-6">The Team Behind Inseat</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
