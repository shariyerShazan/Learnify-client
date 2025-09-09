import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-800 py-6 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Learnify</h2>
          <p className="text-gray-600 max-w-sm">
            Empowering students and instructors with interactive online learning solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-1 text-gray-600">
            <a href="/courses" className="hover:text-gray-900 transition-colors">Courses</a>
            <a href="/about" className="hover:text-gray-900 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="/faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-3 text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Learnify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
