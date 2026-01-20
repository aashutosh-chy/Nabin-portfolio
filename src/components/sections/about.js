// File: src/components/Sections/About.js
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-cinematic">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-warm/20" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                🎭
              </div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent-gold text-primary-dark px-6 py-3 rounded-lg shadow-lg">
              <span className="font-bold">🏆 Winner</span>
              <p className="text-sm">Acting Star – Season 1</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold gradient-text">
              The Art of Emotional Storytelling
            </h3>
            
            <p className="text-lg leading-relaxed">
              I am a performer who feels most alive under the spotlight. From raw, emotional monologues 
              to bold, socially-driven stories, I use acting as a way to shake hearts and stir minds.
            </p>
            
            <p className="text-lg leading-relaxed">
              Theatre raised me, but my dreams stretch beyond the stage — into film, movement, 
              and everything in between. Each character I portray is a journey into the human soul, 
              exploring depths of emotion that connect us all.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Artistic Philosophy</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-accent-gold pl-4">
                  <p className="font-medium">Authenticity</p>
                  <p className="text-sm text-text-muted">Truth in every emotion</p>
                </div>
                <div className="border-l-4 border-accent-warm pl-4">
                  <p className="font-medium">Transformation</p>
                  <p className="text-sm text-text-muted">Becoming the character</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}