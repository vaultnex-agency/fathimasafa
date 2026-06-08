"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "Current Focus",
    icon: Target,
    gradient: "from-primary to-primary-light",
    items: ["Mathematics Education", "Statistics"],
  },
  {
    title: "Future Focus",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-400",
    items: [
      "English Grammar",
      "Spoken English",
      "Communication Skills",
      "Language Development",
    ],
  },
  {
    title: "Learning Path",
    icon: Compass,
    gradient: "from-amber-500 to-orange-400",
    items: [
      "Continuous Professional Development",
      "Language Teaching Skills",
      "Student Communication Enhancement",
    ],
  },
];

export default function Aspirations() {
  return (
    <section id="aspirations" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              🎯 Vision
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Professional{" "}
              <span className="gradient-text">Aspirations</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Where I&apos;m headed — a glimpse into the skills I&apos;m building
              and the educator I aspire to become.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-white via-white to-primary-lighter/20 rounded-3xl border border-border/50 shadow-xl shadow-black/5 overflow-hidden"
            >
              {/* Decorative top bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-purple-500 to-amber-500" />

              {/* Decorative background elements */}
              <div className="absolute top-16 right-8 w-64 h-64 rounded-full bg-primary-lighter/15 blur-[80px]" />
              <div className="absolute bottom-8 left-8 w-48 h-48 rounded-full bg-purple-100/20 blur-[60px]" />

              <div className="relative p-8 lg:p-12">
                {/* Header icon */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/20">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text">
                      Career Growth Roadmap
                    </h3>
                    <p className="text-sm text-text-muted">
                      From mathematics to multilingual education
                    </p>
                  </div>
                </div>

                {/* Three columns */}
                <div className="grid md:grid-cols-3 gap-8">
                  {sections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + sectionIndex * 0.15 }}
                      className="relative"
                    >
                      {/* Section Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-md`}
                        >
                          <section.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-[family-name:var(--font-outfit)] font-bold text-text">
                          {section.title}
                        </h4>
                      </div>

                      {/* Items */}
                      <div className="space-y-2.5 pl-1">
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.4 + sectionIndex * 0.15 + itemIndex * 0.07,
                            }}
                            className="group flex items-center gap-2.5"
                          >
                            <ArrowRight
                              className={`w-3.5 h-3.5 shrink-0 text-transparent bg-gradient-to-r ${section.gradient} bg-clip-text`}
                              style={{
                                color:
                                  sectionIndex === 0
                                     ? "#1e3a8a"
                                    : sectionIndex === 1
                                    ? "#a855f7"
                                    : "#f59e0b",
                              }}
                            />
                            <span className="text-sm text-text-secondary group-hover:text-text transition-colors duration-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Connector arrow between columns (desktop) */}
                      {sectionIndex < 2 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-border">
                          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
