import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
      <p className="text-gray-700 mb-6">Sign up and join thousands of learners today!</p>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Join Learnify</Button>
    </motion.div>
  );
}
