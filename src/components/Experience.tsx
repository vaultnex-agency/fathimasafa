"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
} from "lucide-react";

const experiences = [
  {
    role: "Computational Mathematics Lecturer",
    company: "Yenepoya School of Engineering",
    period: "August 2025 – Present",
    description:
      "Teaching Computational Mathematics to Computer Science and Engineering students, covering numerical methods, discrete mathematics, and applied mathematical concepts for engineering applications.",
    isCurrent: true,
  },
  {
    role: "Mathematics Teacher",
    company: "A J I English School",
    period: "June 2024 – March 2025",
    description:
      "Taught CBSE Mathematics curriculum to middle and high school students, focusing on analytical thinking, problem-solving strategies, and academic excellence.",
    isCurrent: false,
  },
  {
    role: "Mathematics Teacher",
    company: "Barakah International School",
    period: "September 2023 – April 2024",
    description:
      "Delivered engaging mathematics instruction, designed creative lesson plans, and implemented student-centered teaching methodologies to foster mathematical understanding.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Professional{" "}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A growing career in education, from classroom teaching to engineering
              lectures.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-light to-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={index * 0.15}>
                <div className="relative flex gap-8">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 shadow-lg ${
                        exp.isCurrent
                          ? "bg-primary text-white shadow-primary/25"
                          : "bg-white text-primary border-2 border-primary/20 shadow-black/5"
                      }`}
                    >
                      <Briefcase className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 group relative rounded-2xl p-8 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                      exp.isCurrent
                        ? "bg-gradient-to-br from-primary/5 to-primary-lighter/30 border-primary/20 hover:shadow-primary/10"
                        : "bg-white border-border/50 hover:border-primary/20 hover:shadow-primary/5"
                    }`}
                  >
                    {exp.isCurrent && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Current
                      </span>
                    )}
                    <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
