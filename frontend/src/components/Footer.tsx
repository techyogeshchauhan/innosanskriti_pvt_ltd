import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

// Animation variants for entrance
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => (
  <motion.footer
    className="bg-gradient-to-r from-indigo-800 via-purple-200 to-orange-200 text-indigo-900 py-8 mt-12 shadow-inner"
    initial="hidden"
    animate="visible"
    variants={footerVariants}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
      {/* Brand & Copyright */}
      <motion.div
        className="text-lg font-bold tracking-wide text-center md:text-left"
        whileHover={{ scale: 1.05 }}
      >
        © {new Date().getFullYear()} Innosanskriti Labs Pvt. Ltd. All rights reserved.
      </motion.div>

      {/* Social Media Icons */}
      <div className="flex gap-6 text-2xl">
        <motion.a
          href="https://linkedin.com/company/innosanskriti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          aria-label="Visit our LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </motion.a>
        <motion.a
          href="https://x.com/innosanskriti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          aria-label="Visit our Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </motion.a>
        <motion.a
          href="https://github.com/innosanskriti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          aria-label="Visit our GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </motion.a>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link
          to="/about"
          className="hover:text-orange-600 transition-colors duration-300 hover:underline"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:text-orange-600 transition-colors duration-300 hover:underline"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="hover:text-orange-600 transition-colors duration-300 hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  </motion.footer>
);

export default Footer;