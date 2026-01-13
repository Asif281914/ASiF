import React from 'react'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

const Gallery = ({ openLightbox }) => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "পুরস্কার বিতরণী অনুষ্ঠান",
      category: "অনুষ্ঠান",
      cols: "md:col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "শ্রেণীকক্ষ",
      category: "শিক্ষা",
      cols: "md:col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "শিক্ষক মণ্ডলী",
      category: "শিক্ষক",
      cols: "md:col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "গ্রন্থাগার",
      category: "সুযোগ-সুবিধা",
      cols: "md:col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "ক্রীড়া প্রতিযোগিতা",
      category: "ক্রীড়া",
      cols: "md:col-span-2"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-emerald-900 mb-4">
            মাদ্রাসা জীবন
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            শিক্ষা, সংস্কৃতি ও ক্রীড়ার সমন্বয়ে আমাদের বৈচিত্র্যময় কর্মকাণ্ডের একটি দৃশ্যাবলী
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.cols}`}
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-square md:aspect-auto h-full">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.caption}</h3>
                      <span className="text-sm text-emerald-200">{item.category}</span>
                    </div>
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              {/* Overlay Label */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold text-emerald-700">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300">
            আরও ছবি দেখুন
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery