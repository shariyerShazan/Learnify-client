import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Video, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    { icon: <BookOpen />, title: "Expert Courses", desc: "High-quality courses by top instructors." },
    { icon: <Video />, title: "Video Lectures", desc: "Engaging video lectures with notes." },
    { icon: <Award />, title: "Certification", desc: "Get certificates after course completion." },
  ];

  return (
    <div className="w-full py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Why Learnify?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="text-blue-600 mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.desc}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
