// File: src/components/Layout/Footer.js
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Nabina Rana Bhat</h2>
            <p className="text-text-muted mt-2">Performer • Storyteller • Artist</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {['🎭', '🎬', '📷', '✉️'].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -5 }}
                className="text-2xl hover:text-accent-gold transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-text-muted">
              © {currentYear} Nabina Rana Bhat. All rights reserved.
            </p>
            <p className="text-sm text-text-muted mt-2">
              Crafted with passion for the performing arts
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-text-muted italic">
            "The purpose of art is washing the dust of daily life off our souls." — Picasso
          </p>
        </div>
      </div>
    </footer>
  );
}