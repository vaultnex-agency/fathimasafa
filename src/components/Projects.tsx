"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  FlaskConical,
  BarChart3,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Resampling Techniques and Its Applications",
    description:
      "Research project exploring bootstrap and jackknife resampling methods, analyzing their statistical properties, bias correction capabilities, and practical applications in hypothesis testing and confidence interval estimation.",
    icon: FlaskConical,
    tags: ["Statistics", "Research", "Bootstrap", "Jackknife"],
    gradient: "from-primary to-emerald-400",
  },
  {
    title: "Statistical Analysis of COVID-19 Patients in India",
    description:
      "Comprehensive statistical study analyzing COVID-19 patient data across India, employing regression analysis, time-series modeling, and descriptive statistics to identify patterns in transmission, recovery rates, and demographic factors.",
    icon: BarChart3,
    tags: ["Data Analysis", "COVID-19", "Regression", "Time Series"],
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Projects
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Research{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Academic research projects demonstrating analytical skills and
              statistical expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden h-full flex flex-col"
              >
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-surface text-xs font-medium text-text-muted border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More */}
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
