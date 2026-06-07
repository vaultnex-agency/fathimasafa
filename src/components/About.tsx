"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Heart,
  Target,
  Lightbulb,
  Users,
} from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "Passion for Teaching",
    description:
      "Dedicated to igniting curiosity and nurturing a deep love for mathematics in every student, transforming complex concepts into engaging learning moments.",
    color: "text-rose-500 bg-rose-50",
  },
  {
    icon: Target,
    title: "Student-Centered Approach",
    description:
      "Focused on individual student growth through personalized teaching strategies, ensuring every learner achieves their full potential in mathematics.",
    color: "text-primary bg-primary-lighter",
  },
  {
    icon: Lightbulb,
    title: "Innovative Methods",
    description:
      "Employing modern pedagogical techniques and real-world applications to make mathematics accessible, relatable, and enjoyable for all students.",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Creating an inclusive classroom environment that encourages peer learning, healthy discussion, and collective problem-solving skills.",
    color: "text-blue-500 bg-blue-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Nurturing Mathematical{" "}
              <span className="gradient-text">Minds</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              With a strong academic background in Statistics and a B.Ed.
              qualification, I bring both deep subject expertise and
              pedagogical skill to the classroom. My teaching philosophy
              centers on building conceptual understanding, fostering
              analytical thinking, and empowering students to embrace the
              beauty of mathematics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text mb-3">
                  {card.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
