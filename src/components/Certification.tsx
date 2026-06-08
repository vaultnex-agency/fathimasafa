"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Shield,
  X,
  ZoomIn,
  Download,
  ExternalLink,
  Award,
} from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  imagePath: string;
  downloadPath?: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Completion Certificate – Tilawah",
    issuer: "Islamic Education Centre for Women (R)",
    date: "November 2023 – January 2025",
    badge: "Academic Year 1445–1446",
    imagePath: "/cert-tilawah.jpg",
    category: "Qur'anic Studies",
  },
  {
    id: 2,
    title: "Tajweed Certificate",
    issuer: "Islamic Cultural Centre Gheras – Women's Committee",
    date: "November 2023 – January 2025",
    badge: "Grade: Good (جيد)",
    imagePath: "/cert-tajweed.jpg",
    category: "Qur'anic Studies",
  },
  {
    id: 3,
    title: "SWAYAM Online Course Certification",
    issuer: "Madurai Kamaraj University via SWAYAM–CEC",
    date: "Issued: 22 January 2026",
    badge: "Score: 74 / 100  |  Roll No: KL12010887",
    imagePath: "/cert-swayam.jpg",
    category: "Academic",
  },
  {
    id: 4,
    title: "AI Tools Workshop Certificate",
    issuer: "be10x",
    date: "Issued: March 8th, 2026",
    badge: "be10x Verified",
    imagePath: "/cert-be10x.jpg",
    category: "Professional",
  },
];

export default function Certification() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate Image */}
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={selected.imagePath}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain bg-white"
                />
              </div>

              {/* Info bar */}
              <div className="bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-outfit)] font-bold text-text text-lg">
                    {selected.title}
                  </p>
                  <p className="text-primary text-sm font-medium">{selected.issuer}</p>
                </div>
                <div className="flex gap-3">
                  {selected.downloadPath && (
                    <>
                      <a
                        href={selected.downloadPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> View PDF
                      </a>
                      <a
                        href={selected.downloadPath}
                        download
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-lighter text-primary text-sm font-medium hover:bg-primary-lighter/80 transition-all"
                      >
                        <Download className="w-4 h-4" /> Download PDF
                      </a>
                    </>
                  )}
                  <a
                    href={selected.imagePath}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-lighter text-primary text-sm font-medium hover:bg-primary-lighter/80 transition-all"
                  >
                    <Download className="w-4 h-4" /> Save Image
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Section ─── */}
      <section id="certification" className="py-24 lg:py-32 bg-surface relative">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Green decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-light/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Certifications
              </span>
              <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-5">
                Verified{" "}
                <span className="gradient-text">Certifications</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-lg">
                Academic, professional and Qur&apos;anic certifications earned
                through dedication and continuous learning.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <AnimatedSection key={cert.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-3xl border border-border/50 shadow-lg shadow-black/5 overflow-hidden flex flex-col h-full cursor-pointer"
                  onClick={() => setSelected(cert)}
                >
                  {/* Green top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-primary-light" />

                  {/* Certificate Photo */}
                  <div className="relative w-full overflow-hidden bg-gray-50"
                    style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={cert.imagePath}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>

                    {/* Category pill */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-primary text-xs font-semibold backdrop-blur-sm shadow-sm">
                      {cert.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-[family-name:var(--font-outfit)] text-sm font-bold text-text leading-snug mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary text-xs font-semibold mb-3 leading-tight">
                      {cert.issuer}
                    </p>

                    <div className="space-y-1.5 mt-auto">
                      <div className="flex items-start gap-1.5 text-xs text-text-muted">
                        <CalendarDays className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-text-muted">
                        <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{cert.badge}</span>
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-lighter/60 text-primary text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                        Verified
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-text-muted group-hover:text-primary transition-colors">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to view
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
