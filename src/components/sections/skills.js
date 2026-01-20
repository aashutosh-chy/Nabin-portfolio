// File: src/components/Sections/Skills.js
import { motion } from 'framer-motion';

const skills = [
  { name: 'Acting', level: 95, description: 'Stage & screen performance' },
  { name: 'Theatre', level: 90, description: 'Classical & contemporary' },
  { name: 'Film Performance', level: 85, description: 'Cinematic storytelling' },
  { name: 'Movement & Expression', level: 88, description: 'Physical theatre & dance' },
  { name: 'Voice & Monologue', level: 92, description: 'Vocal control & delivery' },
  { name: 'Storytelling', level: 94, description: 'Narrative development' },
];

export default function Skills() {
  return (
    <section className="section-padding bg-secondary-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto"
        >
          Artistic Skills
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-text-muted">{skill.description}</p>
                </div>
                <span className="text-accent-gold font-bold">{skill.level}%</span>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-accent-gold to-accent-warm rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {['Character Analysis', 'Improvisation', 'Accent Work', 'Stage Combat'].map((skill) => (
            <div
              key={skill}
              className="bg-primary-dark/50 p-4 rounded-lg text-center hover:bg-primary-dark transition-colors"
            >
              <div className="text-2xl mb-2">✨</div>
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}