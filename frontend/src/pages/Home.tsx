import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faRocket, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons';

const logo = new URL('../i.png', import.meta.url).href;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const products = [
  {
    title: 'AI Chatbot Platform',
    desc: 'Conversational AI for customer support, sales, and automation. Easy integration, analytics, and multi-language support.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&h=300&q=80',
    cta: 'Learn More',
  },
  {
    title: 'DevOps Automation Suite',
    desc: 'CI/CD pipelines, monitoring, and cloud deployments in one powerful dashboard. Boost your team’s productivity.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=300&q=80',
    cta: 'See Details',
  },
  {
    title: 'Web Extension Toolkit',
    desc: 'Build, deploy, and manage browser extensions with ease. Analytics, updates, and cross-browser support.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80',
    cta: 'Explore',
  },
];

const features = [
  { icon: faRobot, title: 'Innovative Tech', desc: 'Cutting-edge AI, ML, and automation for your business.' },
  { icon: faRocket, title: 'Fast Delivery', desc: 'Agile teams, rapid prototyping, and on-time launches.' },
  { icon: faLock, title: 'Secure & Reliable', desc: 'Best practices for security, privacy, and uptime.' },
  { icon: faGlobe, title: 'Scalable Solutions', desc: 'From startups to enterprise, we scale with you.' },
];

const steps = [
  { icon: '1️⃣', title: 'Consult', desc: 'Understand your needs and goals.' },
  { icon: '2️⃣', title: 'Design', desc: 'Craft tailored solutions and prototypes.' },
  { icon: '3️⃣', title: 'Build', desc: 'Develop, test, and deploy with quality.' },
  { icon: '4️⃣', title: 'Support', desc: 'Ongoing help, updates, and scaling.' },
];

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'CTO, TechNova',
    text: 'Innosanskriti Labs delivered our AI project on time with amazing quality. Highly recommended!',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Verma',
    role: 'Product Manager, FinEdge',
    text: 'Their DevOps automation suite transformed our deployment process. Great team!',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul Mehra',
    role: 'Founder, EduSpark',
    text: 'The chatbot platform is super easy to use and our customers love it.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const Home = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50">
    {/* Hero Section */}
    <motion.section
      className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-16 py-20 bg-gradient-to-r from-indigo-100/90 to-orange-100/90 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      <motion.div className="flex-1 text-left z-10" variants={childVariants}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-500 leading-tight tracking-tight drop-shadow-lg">
          Empowering <span className="text-indigo-900">Innovation</span>.<br />
          Delivering <span className="text-orange-600">Excellence</span>.
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700 leading-relaxed max-w-lg">
          AI, DevOps, and Web Solutions for the next generation of tech. Build, launch, and scale with Innosanskriti Labs.
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-indigo-800 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:from-orange-500 hover:to-indigo-800 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="bg-white/90 text-indigo-800 px-8 py-3 rounded-full font-bold text-lg border border-indigo-200 hover:bg-indigo-100 transition-all shadow"
          >
            Our Services
          </Link>
        </div>
      </motion.div>
      <motion.div className="flex-1 flex justify-center md:justify-end z-10" variants={childVariants}>
        <img
          src={logo}
          alt="Innosanskriti Labs Logo"
          className="h-72 w-72 rounded-full border-4 border-indigo-100 shadow-2xl bg-white object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </motion.section>

    {/* Featured Products */}
    <motion.section
      className="py-16 px-4 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800 tracking-wide uppercase drop-shadow">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-xl border border-indigo-100/50 p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-40 w-40 object-cover rounded-xl mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-200"
            />
            <h3 className="text-xl font-bold text-indigo-800 mb-2 tracking-wide">{product.title}</h3>
            <p className="text-gray-600 mb-4 text-center leading-relaxed">{product.desc}</p>
            <button className="mt-auto bg-gradient-to-r from-indigo-800 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-orange-500 hover:to-indigo-800 transition-all duration-300">
              {product.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Features */}
    <motion.section
      className="py-16 px-4 max-w-5xl mx-auto bg-gradient-to-b from-white to-indigo-50"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800 tracking-wide uppercase">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 rounded-xl shadow-lg p-6 flex flex-col items-center border border-indigo-100/50 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-orange-500 mb-3" />
            <h4 className="font-bold text-indigo-800 mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm text-center leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Process Steps */}
    <motion.section
      className="py-16 px-4 max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800 tracking-wide uppercase">
        How We Work
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 rounded-xl shadow-lg p-6 flex flex-col items-center border border-indigo-100/50 w-full md:w-56 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            <span className="text-3xl mb-3 text-orange-500">{step.icon}</span>
            <h4 className="font-bold text-indigo-800 mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm text-center leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Testimonials */}
    <motion.section
      className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-orange-50 border-t border-indigo-100"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800 tracking-wide uppercase">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 rounded-2xl shadow-xl border border-indigo-100/50 p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            <img
              src={t.img}
              alt={t.name}
              className="h-20 w-20 object-cover rounded-full mb-4 border-2 border-orange-200 shadow"
            />
            <p className="text-gray-700 italic mb-4 text-center leading-relaxed">"{t.text}"</p>
            <h4 className="font-bold text-indigo-800">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default Home;