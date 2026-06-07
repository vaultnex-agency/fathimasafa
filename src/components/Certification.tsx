"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Award, Shield, CalendarDays } from "lucide-react";

export default function Certification() {
  return (
    <section id="certification" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Certification
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Professional{" "}
              <span className="gradient-text">Certification</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-3xl p-10 border border-border/50 shadow-xl shadow-black/5 overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-lighter/40 to-transparent rounded-bl-[100px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-lighter/20 to-transparent rounded-tr-[80px]" />

              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/25"
                  >
                    <Award className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Certificate Info */}
                <div className="text-center space-y-4">
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text">
                    CBSE Capacity Building Programme
                  </h3>
                  <p className="text-text-secondary">
                    Certification for professional development in CBSE teaching
                    methodologies and curriculum implementation.
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>CBSE/TRG/T/2024/91</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      <span>September 2024</span>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary-light" />
                      Verified Certification
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
