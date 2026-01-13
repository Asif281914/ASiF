import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-emerald-800/10 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-gold-400/10 to-transparent rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              স্থাপিত: ০১-০১-২০১৭
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6"
          >
            <span className="text-gradient">আদর্শ মানুষ</span>
            <br />
            <span className="gold-gradient">গড়ার কারিগর</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-hind font-bold text-emerald-800 mb-4">
              বাইতুল আমান নূরানী মাদ্রাসা
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              উত্তর কাদির হানিফ, মাইজদী কোর্ট, নোয়াখালী
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
            >
              আমাদের সম্পর্কে
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-emerald-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ভর্তি প্রক্রিয়া
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-emerald-600" />
      </motion.div>
    </section>
  )
}

export default Hero