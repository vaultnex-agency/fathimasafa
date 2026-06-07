"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent", color: "from-primary to-primary-light" },
  { name: "Malayalam", level: "Native", color: "from-blue-500 to-cyan-400" },
  { name: "Kannada", level: "Fluent", color: "from-purple-500 to-pink-400" },
  { name: "Hindi", level: "Fluent", color: "from-amber-500 to-orange-400" },
];

export default function Languages() {
  return (
    <section id="languages" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Languages
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Language{" "}
              <span className="gradient-text">Proficiency</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {languages.map((lang, index) => (
            <AnimatedSection key={lang.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative bg-white rounded-2xl px-8 py-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center shadow-lg`}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-text-muted">{lang.level}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
