import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faCloud } from '@fortawesome/free-solid-svg-icons';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Developed a multi-lingual AI chatbot for e-commerce, boosting customer engagement by 40%. Integrated with analytics and CRM.',
    icon: faRobot,
    image: 'https://images.unsplash.com/photo-1516321318427-5b78b18f3b61?auto=format&fit=crop&w=400&h=300&q=80',
    cta: 'View Case Study',
    link: '#',
  },
  {
    title: 'DevOps Automation Platform',
    description: 'Built a CI/CD pipeline with real-time monitoring for a fintech client, reducing deployment time by 60%.',
    icon: faCloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=300&q=80',
    cta: 'Explore Details',
    link: '#',
  },
  {
    title: 'Web Extension Suite',
    description: 'Created a browser extension toolkit for productivity, supporting Chrome and Firefox with 10K+ active users.',
    icon: faCode,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&h=300&q=80',
    cta: 'See Features',
    link: '#',
  },
  {
    title: 'MLOps Pipeline',
    description: 'Designed an end-to-end MLOps pipeline for a healthcare startup, enabling scalable AI model deployment.',
    icon: faRobot,
    image: 'https://images.unsplash.com/photo-1507146150940-2b5f090e0221?auto=format&fit=crop&w=400&h=300&q=80',
    cta: 'Learn More',
    link: '#',
  },
];

const Portfolio = () => (
  <motion.div
    className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 flex flex-col items-center py-16 px-4"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div className="max-w-7xl w-full text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-500 mb-6 tracking-tight drop-shadow-lg"
        variants={cardVariants}
      >
        Our Portfolio
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        variants={cardVariants}
      >
        Discover how Innosanskriti Labs transforms ideas into reality with innovative AI, DevOps, and Web solutions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 rounded-2xl shadow-xl p-6 border border-indigo-100/50 hover:shadow-2xl transition-all duration-300 flex flex-col"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover rounded-xl mb-4 shadow-md"
            />
            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={project.icon} className="text-2xl text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-indigo-800">{project.title}</h2>
            </div>
            <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{project.description}</p>
            <Link
              to={project.link}
              className="mt-auto bg-gradient-to-r from-indigo-800 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-500 hover:to-indigo-800 transition-all duration-300 text-center"
            >
              {project.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12"
        variants={cardVariants}
      >
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-indigo-800 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:from-orange-500 hover:to-indigo-800 transition-all duration-300"
        >
          Start Your Project
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default Portfolio;