/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Service {
  title: string;
  description: string;
}

const icons = [
  '🤖', '🔗', '⚙️', '💻', '📱', '🚀', '☁️', '🛠️', '🗄️', '🔌', '🎨', '🤖', '🧪'
];

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 py-12 px-4">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-500 mb-10 text-center tracking-wide uppercase drop-shadow">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-8 bg-white/95 rounded-2xl shadow-xl border border-indigo-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200 flex flex-col items-center">
            <span className="text-4xl mb-4">{icons[index % icons.length]}</span>
            <h3 className="text-2xl font-bold text-indigo-800 mb-2 tracking-wide">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-base text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;