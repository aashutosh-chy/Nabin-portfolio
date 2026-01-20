// File: src/components/Sections/Education.js
import { motion } from 'framer-motion';

const education = [
  {
    year: "2018-2022",
    title: "Bachelor of Performing Arts",
    institution: "National School of Drama",
    description: "Specialization in Theatre Arts and Performance"
  },
  {
    year: "2020",
    title: "Advanced Acting Workshop",
    institution: "Royal Academy of Dramatic Arts",
    description: "Intensive training in classical and contemporary techniques"
  },
  {
    year: "2019",
    title: "Movement & Physical Theatre",
    institution: "International Theatre Institute",
    description: "Exploring body as primary instrument of expression"
  },
  {
    year: "2018",
    title: "Voice & Speech Training",
    institution: "Voice Dynamics Institute",
    description: "Mastering vocal projection, modulation, and accent work"
  }
];

export default function Education() {
  return (
    <section className="section-padding bg-secondary-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Training & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-accent-gold via-accent-warm to-transparent" />
          
          {education.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-[50%] md:pl-0 md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-gold rounded-full transform -translate-x-1/2 -translate-y-1/2 top-8" />
              
              <div className={`ml-8 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-primary-dark/50 p-6 rounded-lg shadow-cinematic hover:bg-primary-dark transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-accent-gold font-bold">{item.year}</span>
                    <span className="text-sm bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-medium text-accent-warm mb-2">{item.institution}</p>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}