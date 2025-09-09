import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">Learnify</h2>
          <p className="max-w-sm">Empowering students and instructors with interactive learning solutions worldwide.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-300 transition duration-300"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-yellow-300 transition duration-300"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-yellow-300 transition duration-300"><FaLinkedinIn size={20} /></a>
          <a href="#" className="hover:text-yellow-300 transition duration-300"><FaInstagram size={20} /></a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Learnify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
