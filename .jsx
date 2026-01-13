import React from 'react'
import { motion } from 'framer-motion'
import { Book, Globe, PenTool, Cpu } from 'lucide-react'

const Curriculum = () => {
  const subjects = [
    {
      icon: Book,
      title: "আরবি",
      description: "কুরআন-হাদিসের ভাষা শিক্ষা, উচ্চারণ শুদ্ধি ও আরবি সাহিত্য",
      color: "from-emerald-500 to-emerald-700",
      delay: 0
    },
    {
      icon: PenTool,
      title: "বাংলা",
      description: "মাতৃভাষার উপর পূর্ণ দক্ষতা, সাহিত্য ও রচনা শিক্ষা",
      color: "from-amber-500 to-amber-700",
      delay: 0.1
    },
    {
      icon: Globe,
      title: "ইংরেজি",
      description: "আন্তর্জাতিক ভাষায় যোগাযোগ দক্ষতা ও সাহিত্য চর্চা",
      color: "from-blue-500 to-blue-700",
      delay: 0.2
    },
    {
      icon: Cpu,
      title: "আধুনিক সমন্বয়",
      description: "প্রযুক্তি, বিজ্ঞান ও আধুনিক শিক্ষার ইসলামিক দৃষ্টিকোণ",
      color: "from-purple-500 to-purple-700",
      delay: 0.3
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-gold-100 rounded-full mb-4">
            <span className="text-emerald-700 font-semibold">শিক্ষাক্রম</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-emerald-900 mb-4">
            আমাদের শিক্ষা ব্যবস্থা
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            একটি ভারসাম্যপূর্ণ ও সমন্বিত শিক্ষাক্রম যা ধর্মীয় ও আধুনিক শিক্ষার অপূর্ব সংমিশ্রণ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: subject.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 rounded-3xl transform group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative glass-card rounded-3xl p-8 h-full border border-white/40 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-center text-emerald-800 mb-4">
                  {subject.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6 font-hind">
                  {subject.description}
                </p>
                
                <div className="text-center">
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                    বিস্তারিত জানুন
                  </span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold-400/30 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 italic max-w-3xl mx-auto text-lg">
            "শিক্ষা এমন একটি আলোকবর্তিকা যা অন্ধকার দূর করে জ্ঞানের পথ দেখায়। 
            আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীকে আলোকিত মানুষ হিসেবে গড়ে তোলা।"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Curriculum