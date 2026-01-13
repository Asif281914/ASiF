import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Curriculum from './components/Curriculum'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { BookOpen, Users, Award, Home } from 'lucide-react'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  const stats = [
    { icon: Users, value: '500+', label: 'বর্তমান শিক্ষার্থী' },
    { icon: BookOpen, value: '৪', label: 'বিষয় সমূহ' },
    { icon: Award, value: '100+', label: 'পুরস্কার প্রাপ্ত' },
    { icon: Home, value: '৭', label: 'স্থায়ী শিক্ষক' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-gold-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Info Bar */}
      <InfoBar />

      {/* Stats Section */}
      <section className="py-16 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gold-gradient mb-4">
              আমাদের অর্জন
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              গুণগত শিক্ষা ও নৈতিক মূল্যবোধের উপর ভিত্তি করে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-gold-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="text-3xl font-bold text-emerald-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <Curriculum />

      {/* Gallery Section */}
      <Gallery openLightbox={openLightbox} />

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-gold-900/5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-gold-600 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-emerald-900 mb-6">
              "আদর্শ মানুষ গড়ার কারিগর"
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              বাইতুল আমান নূরানী মাদ্রাসা শুধুমাত্র শিক্ষাদানের প্রতিষ্ঠান নয়, এটি একটি আদর্শ মানুষ গড়ার কারখানা। 
              আমরা বিশ্বাস করি যে প্রকৃত শিক্ষা শুধুমাত্র বইয়ের পাতায় সীমাবদ্ধ নয়, বরং তা জীবন গঠনের একটি অবিচ্ছেদ্য অংশ।
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ভর্তি তথ্য জানুন
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold">{selectedImage.caption}</h3>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App