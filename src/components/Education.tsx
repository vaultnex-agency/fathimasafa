"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";

const educationItems = [
  {
    degree: "Bachelor of Education (B.Ed.)",
    institution: "Professional Teaching Qualification",
    score: "B.Ed.",
    icon: GraduationCap,
    gradient: "from-primary to-primary-light",
    description:
      "Comprehensive training in pedagogical methods, classroom management, curriculum design, and educational psychology.",
  },
  {
    degree: "M.Sc. Statistics",
    institution: "Master of Science",
    score: "84%",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-400",
    description:
      "Advanced study of statistical theory, probability, regression analysis, experimental design, and computational methods.",
  },
  {
    degree: "B.Sc. Statistics",
    institution: "Bachelor of Science",
    score: "90.19%",
    icon: Award,
    gradient: "from-amber-500 to-orange-400",
    description:
      "Strong foundation in mathematical statistics, probability theory, data analysis, and quantitative methods.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Academic{" "}
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A strong academic record built on dedication and passion for
              mathematics and statistics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <AnimatedSection key={item.degree} delay={index * 0.15}>
              <div className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 h-full flex flex-col">
                {/* Score Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Score Display */}
                <div className="mb-4">
                  <span
                    className={`text-3xl font-[family-name:var(--font-outfit)] font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    {item.score}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text mb-2">
                  {item.degree}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {item.institution}
                </p>
                <p className="text-text-secondary leading-relaxed mt-auto">
                  {item.description}
                </p>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.gradient} opacity-5 rounded-bl-[80px] rounded-tr-2xl`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
