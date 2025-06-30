import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: just show submitted, in real app integrate with backend or email service
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      {/* CTA Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          See the impact of good,
          <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            conversion-oriented design
          </span>
          on your business.
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to transform your digital presence? Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:shivranjankumar917@gmail.com"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
          >
            <Send size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Hire Me
            <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a 
            href="https://github.com/shivranjan0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            View My Work
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
      {/* Two-column layout for form and location */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 items-stretch justify-center">
        {/* Contact Form */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transition-colors duration-300 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
          {submitted ? (
            <div className="text-center text-emerald-500 text-lg font-semibold">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </div>
        {/* Location & Info */}
        <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transition-colors duration-300 justify-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <MapPin size={28} className="text-cyan-400" /> My Location
          </h3>
          <div className="mb-6 text-gray-700 dark:text-gray-300 text-lg text-center">
            Patna, Bihar, India
          </div>
          <div className="flex flex-col gap-4 w-full">
            <a href="mailto:shivranjankumar917@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-50 dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 font-medium shadow hover:bg-cyan-100 dark:hover:bg-gray-700 transition-all duration-300">
              <Mail size={20} /> shivranjankumar917@gmail.com
            </a>
          </div>
          <div className="mt-8 w-full h-48 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Patna Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.0911%2C25.5941%2C85.1911%2C25.6941&amp;layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ minHeight: '100%', minWidth: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
 