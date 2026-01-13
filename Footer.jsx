import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-emerald-900 text-white overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 to-emerald-950"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-4">
              <span className="text-gold-400">বাইতুল আমান</span>
              <br />
              <span className="text-white">নূরানী মাদ্রাসা</span>
            </h2>
            <p className="text-emerald-200 mb-6 font-hind">
              আদর্শ মানুষ গড়ার মহান ব্রত নিয়ে যাত্রা শুরু। ধর্মীয় মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে গড়ে উঠেছে একটি অনন্য প্রতিষ্ঠান।
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold-300">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-emerald-200">
                  উত্তর কাদির হানিফ, মাইজদী কোর্ট, নোয়াখালী
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-emerald-200">+৮৮০ ১৭১১-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-emerald-200">info@baitulaman.edu.bd</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold-300">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-3">
              {['হোম', 'আমাদের সম্পর্কে', 'শিক্ষাক্রম', 'ভর্তি প্রক্রিয়া', 'যোগাযোগ'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-emerald-200 hover:text-gold-300 transition-colors duration-300 hover:pl-2 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold-300">সামাজিক যোগাযোগ</h3>
            <p className="text-emerald-200 mb-4">
              আমাদের সর্বশেষ খবর ও আপডেট পেতে ফলো করুন
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: Instagram, color: 'hover:bg-pink-600', label: 'Instagram' },
                { icon: Youtube, color: 'hover:bg-red-600', label: 'YouTube' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-emerald-300">
            © {currentYear} বাইতুল আমান নূরানী মাদ্রাসা. সকল অধিকার সংরক্ষিত।
          </p>
          <p className="text-emerald-400 text-sm mt-2">
            স্থাপিত: ০১-০১-২০১৭ | উত্তর কাদির হানিফ, মাইজদী কোর্ট, নোয়াখালী
          </p>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-500 to-emerald-600"></div>
    </footer>
  )
}

export default Footer