// File: src/components/Sections/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'collaboration'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '', projectType: 'collaboration' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { platform: 'Instagram', handle: '@nabinaranabhat', icon: '📷', color: 'hover:text-pink-500' },
    { platform: 'YouTube', handle: '/NabinaRanaBhat', icon: '🎬', color: 'hover:text-red-500' },
    { platform: 'Facebook', handle: '/NabinaRanaBhatActor', icon: '👥', color: 'hover:text-blue-500' },
    { platform: 'Email', handle: 'hello@nabinabhat.com', icon: '✉️', color: 'hover:text-accent-gold' },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-dark rounded-lg p-8 shadow-cinematic">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <p className="text-xl font-semibold mb-2">Message Sent!</p>
                  <p className="text-text-muted">Thank you for reaching out. I'll respond soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-gold transition-colors"
                    >
                      <option value="collaboration">Collaboration</option>
                      <option value="performance">Performance Inquiry</option>
                      <option value="workshop">Workshop/Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-gold transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-gold to-accent-warm text-primary-dark font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Social & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href="#"
                    className={`flex items-center gap-4 p-4 bg-primary-dark/50 rounded-lg hover:bg-primary-dark transition-all duration-300 ${social.color}`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <p className="font-medium">{social.platform}</p>
                      <p className="text-sm text-text-muted">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary-dark/50 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Availability</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Theatre Projects</span>
                  <span className="text-accent-gold font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Film Roles</span>
                  <span className="text-accent-gold font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Workshops</span>
                  <span className="text-accent-gold font-medium">Limited</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-accent-gold/10 to-accent-warm/10 rounded-lg">
              <p className="text-lg font-semibold mb-2">Let's create something memorable</p>
              <p className="text-text-muted">
                Whether it's a groundbreaking performance or an intimate character study,
                I'm ready to bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}