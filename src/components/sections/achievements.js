// File: src/components/Sections/Achievements.js
import { motion } from 'framer-motion';

const achievements = [
  {
    year: "2023",
    title: "Acting Star – Season 1",
    role: "Winner",
    description: "National level acting competition with 500+ participants"
  },
  {
    year: "2022",
    title: "Best Monologue Performance",
    role: "Award Winner",
    description: "International Theatre Festival, New Delhi"
  },
  {
    year: "2021",
    title: "Rising Talent Award",
    role: "Recipient",
    description: "Youth Theatre Federation of India"
  },
  {
    year: "2020",
    title: "Excellence in Classical Theatre",
    role: "Honoree",
    description: "National School of Drama Annual Awards"
  }
];

export default function Achievements() {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Recognition & Awards
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-secondary-dark rounded-lg p-8 shadow-cinematic hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-5xl font-bold text-accent-gold/20 group-hover:text-accent-gold/30 transition-colors">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl font-semibold mt-2">{achievement.title}</h3>
                  </div>
                  <div className="text-4xl">🏆</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-accent-gold/10 text-accent-gold px-4 py-1 rounded-full font-medium">
                    {achievement.role}
                  </span>
                </div>
                
                <p className="text-text-muted">{achievement.description}</p>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-gold to-accent-warm group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-accent-gold to-accent-warm rounded-lg">
            <div className="bg-primary-dark rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for the Next Chapter</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                These recognitions fuel my passion for creating even more impactful performances
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-accent-gold to-accent-warm text-primary-dark font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Let's Create Together
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}