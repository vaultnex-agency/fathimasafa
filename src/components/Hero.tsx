"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  BookOpen,
  Calculator,
  Brain,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const floatingCards = [
  {
    icon: Calculator,
    label: "Mathematics",
    color: "bg-primary-lighter text-primary",
    delay: 0,
  },
  {
    icon: Brain,
    label: "Problem Solving",
    color: "bg-amber-50 text-amber-600",
    delay: 0.5,
  },
  {
    icon: BookOpen,
    label: "CBSE Curriculum",
    color: "bg-blue-50 text-blue-600",
    delay: 1,
  },
  {
    icon: TrendingUp,
    label: "Analytics",
    color: "bg-purple-50 text-purple-600",
    delay: 1.5,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary-lighter/30 blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary-lighter/20 blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-lighter/60 border border-primary/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Mathematics Educator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text"
            >
              Fathima{" "}
              <span className="gradient-text">Safa</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-lg sm:text-xl text-text-secondary font-medium">
                Mathematics Teacher
              </p>
              <p className="text-base text-text-muted">
                M.Sc. Statistics | B.Ed.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Passionate Mathematics Educator dedicated to helping students
              develop analytical thinking, problem-solving skills, and academic
              excellence through engaging learning experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/FathimaSafa_CV.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary/20 text-primary font-medium rounded-xl hover:border-primary/40 hover:bg-primary-lighter/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Content - Photo placeholder + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Professional Photo */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Rotating green ring behind */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #166534, #22C55E, #166534)",
                  opacity: 0.15,
                }}
              />
              {/* Static outer green ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20" />
              {/* Photo frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Fathima Safa – Professional Photo"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Green status dot */}
              <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-primary-light border-2 border-white shadow-lg" />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
              const positions = [
                "top-0 -left-8",
                "-top-8 right-0",
                "bottom-12 -left-12",
                "bottom-0 right-4",
              ];
              return (
                <motion.div
                  key={card.label}
                  className={`absolute ${positions[index]} z-10`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    delay: card.delay,
                    ease: "easeInOut",
                  }}
                >
                  <div className="glass rounded-2xl px-4 py-3 shadow-lg shadow-black/5 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}
                    >
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-text whitespace-nowrap">
                      {card.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
