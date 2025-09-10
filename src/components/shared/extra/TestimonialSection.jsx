import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TestimonialSection() {
    const testimonials = [
        {
          name: "Arafat Hossain",
          feedback: "Learnify এর কোর্সগুলো খুবই detailed এবং সহজে বুঝার মত। Instructor এর teaching style অসাধারণ!",
        },
        {
          name: "Tania Akter",
          feedback: "আমি অনলাইনে এত সুন্দর ও organized কোর্স আগে কখনো পাইনি। Learnify এর support team ও খুব helpful।",
        },
        {
          name: "Shahin Rahman",
          feedback: "Video lectures ও notes দেখে আমি নিজে নিজে অনেক কিছু শিখতে পেরেছি। Certification পেয়েও confidence বেড়েছে।",
        },
        {
          name: "Fahim Sarker",
          feedback: "Learnify এর community খুব supportive। Instructor এবং student interaction অনেক ভালো।",
        },
        {
          name: "Moushumi Begum",
          feedback: "Courses খুব well-structured। Time management সহজ হয়ে গেছে, সবই step by step।",
        },
      ];
  return (
    <div className="w-full py-10 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>"{t.feedback}"</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
