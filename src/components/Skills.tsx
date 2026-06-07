"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Teaching Skills",
    color: "bg-primary",
    skills: [
      "Curriculum Design & Development",
      "Lesson Planning",
      "Classroom Management",
      "Student Assessment & Evaluation",
      "Differentiated Instruction",
      "Interactive Teaching Methods",
    ],
  },
  {
    title: "Technical Skills",
    color: "bg-blue-500",
    skills: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Educational Technology",
      "Data Analysis",
      "Statistical Software",
      "Digital Content Creation",
    ],
  },
  {
    title: "Professional Skills",
    color: "bg-purple-500",
    skills: [
      "Communication",
      "Problem Solving",
      "Critical Thinking",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Skills &{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A diverse skill set spanning teaching, technology, and
              professional development.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.15}>
              <div className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-3 h-8 rounded-full ${category.color}`}
                  />
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-surface text-sm font-medium text-text-secondary border border-border/50 hover:border-primary/30 hover:text-primary hover:bg-primary-lighter/30 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
