// File: src/components/Sections/Gallery.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: "The Awakening",
    story: "Behind the curtains, moments before becoming someone else",
    category: "Backstage"
  },
  {
    id: 2,
    title: "Urban Solitude",
    story: "Finding characters in the city's forgotten corners",
    category: "Street"
  },
  {
    id: 3,
    title: "Echoes of Tradition",
    story: "Connecting classical roots with contemporary expression",
    category: "Cultural"
  },
  {
    id: 4,
    title: "Silent Dialogue",
    story: "Stories told through eyes and hands alone",
    category: "Portrait"
  },
  {
    id: 5,
    title: "Dance of Shadows",
    story: "Exploring light and darkness in physical expression",
    category: "Movement"
  },
  {
    id: 6,
    title: "Monologue in Rain",
    story: "Raw emotion meeting nature's elements",
    category: "Dramatic"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section-padding bg-primary-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Stories Through Images
        </motion.h2>

        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-text-muted">
          Each photograph captures a moment of transformation, a story waiting to be told
        </p>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative rounded-lg overflow-hidden bg-secondary-dark shadow-cinematic">
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-800 to-black relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-accent-gold/20 backdrop-blur-sm p-4 rounded-full">
                      <span className="text-2xl">👁️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-sm bg-primary-dark/80 px-3 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.story}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-secondary-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                      <p className="text-accent-gold">{selectedImage.category}</p>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-2xl hover:text-accent-gold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="h-96 bg-gradient-to-br from-gray-800 to-black rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">🖼️</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">The Story Behind</h4>
                    <p className="text-lg leading-relaxed">{selectedImage.story}</p>
                    <p className="text-text-muted italic">
                      "Every image holds a moment of truth, a fragment of a larger narrative waiting to unfold."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}