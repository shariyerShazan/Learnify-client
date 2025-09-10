import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Learn Anytime, Anywhere
        </h1>
        <p className="text-gray-700 mb-6">
          Join thousands of learners and top instructors online. Upgrade your skills today!
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
          Get Started
        </Button>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5QKADNcpgV0vof8b3jSYD94vNgBlZYS11w&s" alt="Learnify Hero" className="w-full max-w-md" />
      </motion.div>
    </div>
  );
}
