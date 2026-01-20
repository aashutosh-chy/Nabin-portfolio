// File: src/components/Sections/Philosophy.js
import { motion } from 'framer-motion';
import { useState } from 'react';

const quotes = [
  {
    text: "The stage is a mirror where society sees its true reflection, sometimes beautiful, sometimes harsh, but always truthful.",
    author: "My Artistic Belief"
  },
  {
    text: "Every character I become teaches me something new about being human.",
    author: "On Transformation"
  },
  {
    text: "In the silence between lines, in the stillness before movement, that's where real acting lives.",
    author: "On Performance"
  },
  {
    text: "Art should comfort the disturbed and disturb the comfortable.",
    author: "On Impact"
  }
];

export default function Philosophy() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto"
        >
          Artistic Philosophy
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-center py-12 px-4"
            >
              <div className="text-6xl mb-6">❝</div>
              <p className="text-2xl md:text-3xl italic mb-8 leading-relaxed">
                {quotes[currentQuote].text}
              </p>
              <p className="text-lg text-accent-gold font-semibold">
                — {quotes[currentQuote].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={prevQuote}
              className="w-12 h-12 rounded-full border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentQuote === index
                      ? 'bg-accent-gold w-6'
                      : 'bg-gray-600 hover:bg-accent-warm'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextQuote}
              className="w-12 h-12 rounded-full border border-accent-gold flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Philosophy Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Emotional Truth",
              description: "Every performance must resonate with authentic human emotion",
              icon: "💫"
            },
            {
              title: "Collaborative Spirit",
              description: "Great art emerges from shared vision and mutual respect",
              icon: "🤝"
            },
            {
              title: "Continuous Evolution",
              description: "The artist never stops learning, never stops growing",
              icon: "🌱"
            }
          ].map((principle) => (
            <div
              key={principle.title}
              className="bg-secondary-dark/50 p-6 rounded-lg text-center hover:bg-secondary-dark transition-colors"
            >
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-text-muted">{principle.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}