import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white relative overflow-hidden px-4">
      
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-white/10 rounded-full top-[-100px] left-[-100px] animate-pulse"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-white/20 rounded-full bottom-[-80px] right-[-80px] animate-pulse"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Error content */}
      <motion.h1
        className="text-9xl font-extrabold mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-center max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button onClick={() => navigate('/')} className="bg-white cursor-pointer text-red-500 hover:bg-white/90 hover:text-red-600">
          Go Back Home
        </Button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
