// File: src/components/Sections/Projects.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Silent Echoes",
    category: "Monologue",
    description: "A powerful solo performance exploring grief and memory",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    year: "2023"
  },
  {
    id: 2,
    title: "Urban Dreams",
    category: "Short Film",
    description: "Modern adaptation of classical themes in city landscape",
    videoId: "dQw4w9WgXcQ",
    year: "2023"
  },
  {
    id: 3,
    title: "The Last Light",
    category: "Theatre",
    description: "Stage play about hope in darkest times",
    videoId: "dQw4w9WgXcQ",
    year: "2022"
  },
  {
    id: 4,
    title: "Whispers of Wind",
    category: "Movement",
    description: "Physical theatre piece combining dance and drama",
    videoId: "dQw4w9WgXcQ",
    year: "2022"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Monologue', 'Short Film', 'Theatre', 'Movement'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-primary-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Works
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-gold text-primary-dark font-semibold'
                  : 'bg-secondary-dark text-text-light hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden bg-secondary-dark shadow-cinematic">
                  {/* Video Thumbnail */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">▶</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary-dark/80 px-3 py-1 rounded">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-accent-gold transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-text-muted">{project.description}</p>
                    
                    <button className="mt-4 text-accent-gold hover:text-accent-warm flex items-center gap-2">
                      Watch Performance
                      <span className="transform group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}