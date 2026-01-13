import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, BookOpen } from 'lucide-react'

const InfoBar = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: "ঠিকানা",
      description: "উত্তর কাদির হানিফ, মাইজদী কোর্ট, নোয়াখালী",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Calendar,
      title: "স্থাপিত",
      description: "০১-০১-২০১৭",
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: BookOpen,
      title: "শিক্ষাক্রম",
      description: "আধুনিক ও ইসলামি শিক্ষার সমন্বয়",
      color: "from-emerald-600 to-gold-600"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative -mt-12 mb-20 z-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 backdrop-blur-xl border border-white/30 shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 font-hind">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default InfoBar