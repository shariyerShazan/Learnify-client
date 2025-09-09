import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="relative bg-gradient-to-r min-h-screen from-indigo-600 via-purple-600 to-pink-500 text-white py-24 px-6 overflow-hidden">
      {/* Animated background circles */}
      <motion.div 
        className="absolute w-72 h-72 bg-purple-400 rounded-full opacity-30 top-[-100px] left-[-100px] animate-pulse"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-pink-400 rounded-full opacity-20 bottom-[-150px] right-[-150px] animate-pulse"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Learnify
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Learnify is a cutting-edge Learning Management System (LMS) designed to
          empower students and instructors worldwide. With interactive courses,
          engaging video lessons, and personalized learning paths, Learnify
          brings the classroom to your fingertips.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <div className="bg-white text-purple-700 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="font-bold text-xl mb-2">Interactive Courses</h3>
            <p>Engage with quizzes, assignments, and interactive content.</p>
          </div>

          <div className="bg-white text-pink-600 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="font-bold text-xl mb-2">Video Lessons</h3>
            <p>High-quality videos for step-by-step learning.</p>
          </div>

          <div className="bg-white text-indigo-600 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="font-bold text-xl mb-2">Personalized Paths</h3>
            <p>Courses tailored to your learning pace and goals.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
