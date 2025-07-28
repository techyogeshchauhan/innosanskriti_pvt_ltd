/// <reference types="vite/client" />
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Something went wrong!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-white/95 rounded-2xl shadow-2xl p-10 max-w-lg w-full border border-indigo-100">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-500 mb-6 tracking-wide drop-shadow text-center">Contact Us</h1>
        {submitted ? (
          <div className="text-green-600 text-lg font-semibold text-center">Thank you for contacting us! We will get back to you soon.</div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-5 py-3 rounded-lg border border-indigo-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg shadow"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="px-5 py-3 rounded-lg border border-indigo-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg shadow"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="px-5 py-3 rounded-lg border border-indigo-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg shadow min-h-[120px]"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-800 to-orange-500 text-white px-7 py-3 rounded-lg shadow-lg font-bold text-lg hover:from-orange-500 hover:to-indigo-800 transition-all disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
        <div className="mt-8 text-center">
          <div className="text-gray-700 mb-2">Or email us at <a href="mailto:info@innosanskriti.com" className="text-indigo-800 font-semibold underline">info@innosanskriti.com</a></div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-indigo-800 hover:text-orange-500 text-2xl"><i className="fab fa-linkedin"></i>🔗</a>
            <a href="#" className="text-indigo-800 hover:text-orange-500 text-2xl"><i className="fab fa-twitter"></i>🐦</a>
            <a href="#" className="text-indigo-800 hover:text-orange-500 text-2xl"><i className="fab fa-github"></i>💻</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;