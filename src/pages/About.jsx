import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {

  useEffect(()=>{
    document.title = `About | Learnify`
  },[])

  return (

    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      
      {/* Image / Illustration */}
      <motion.div 
        className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="https://www.analyticssteps.com/backend/media/thumbnail/2419395/9525800_1640581900_Top%20Game%20Development%20SoftwaresArtboard%201.jpg" 
          alt="Learnify Illustration" 
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col gap-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Welcome to Learnify</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Learnify is your friendly online learning platform where students and instructors connect effortlessly. 
          Discover interactive courses, watch engaging lectures, and level up your skills from the comfort of your home.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to make learning fun, flexible, and accessible to everyone. Whether you're a beginner or a pro, 
          Learnify helps you grow at your own pace.
        </p>

        <motion.button 
          className="w-max px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.button>
      </motion.div>

    </section>
  );
};

export default About;
