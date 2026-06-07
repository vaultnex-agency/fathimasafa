"use client";

import { useState, useRef, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7736984029",
    href: "tel:+917736984029",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fathima.safa17@yahoo.com",
    href: "mailto:fathima.safa17@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Anchikatte, Manjeshwar, Kasaragod, Kerala, India",
    href: null,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Fathima Safa",
    href: "https://www.linkedin.com/in/fathima-safa-423052282",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-lighter/60 text-primary text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-text mb-6">
              Get in{" "}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Feel free to reach out for collaboration, teaching opportunities,
              or just a friendly conversation about mathematics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 p-5 rounded-2xl hover:bg-surface transition-all duration-300 border border-transparent hover:border-border/50"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-muted mb-1">
                          {info.label}
                        </p>
                        <p className="text-text font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 rounded-2xl">
                      <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-muted mb-1">
                          {info.label}
                        </p>
                        <p className="text-text font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-surface rounded-2xl p-8 border border-border/50 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border/50 text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border/50 text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border/50 text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                  placeholder="Teaching Collaboration"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border/50 text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-primary-lighter text-primary text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium"
                >
                  <AlertCircle className="w-4 h-4" />
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
