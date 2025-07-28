import React from 'react';
import { motion } from 'framer-motion';

const mission = {
  title: 'Our Mission',
  desc: 'To blend cutting-edge technology with timeless Indian values, delivering innovative, ethical, and impactful solutions in AI, DevOps, and Web Development.'
};
const vision = {
  title: 'Our Vision',
  desc: 'To be a global leader in tech innovation, empowering businesses and communities through responsible digital transformation.'
};

const About = () => (
  <motion.div
    className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 flex flex-col items-center py-16 px-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="bg-white/95 rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center border border-indigo-100/50 backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-500 mb-6 tracking-tight drop-shadow-md">
        About Innosanskriti Labs
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        Innosanskriti Labs Pvt. Ltd., founded in 2025, blends cutting-edge technology with the timeless essence of Indian values. We specialize in AI/ML, DevOps, Web Development, and MLOps, crafting solutions that are innovative, ethical, and impactful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 rounded-xl shadow p-6 border border-indigo-100">
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">{mission.title}</h2>
          <p className="text-gray-700">{mission.desc}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 via-purple-50 to-indigo-50 rounded-xl shadow p-6 border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">{vision.title}</h2>
          <p className="text-gray-700">{vision.desc}</p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">Our Team</h3>
        <div className="text-lg text-gray-500">Team details coming soon...</div>
      </div>
    </motion.div>
  </motion.div>
);

export default About;