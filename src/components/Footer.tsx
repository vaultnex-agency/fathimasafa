"use client";

import {
  GraduationCap,
  Heart,
  ExternalLink,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-text text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-[family-name:var(--font-outfit)] font-bold text-lg">
                Fathima Safa
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mathematics Educator passionate about shaping young minds and
              making mathematics accessible to all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-bold mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "About",
                "Experience",
                "Education",
                "Skills",
                "Projects",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 text-sm hover:text-primary-light transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-bold mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="tel:+917736984029"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:fathima.safa17@yahoo.com"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/fathima-safa-423052282"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Fathima Safa. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
