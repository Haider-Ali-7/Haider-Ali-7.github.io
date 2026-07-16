"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { socialLinkVariants } from "@/lib/animations";

interface SocialLink {
  Icon: IconType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/haider-ali-tariq-n129", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com/Haider-Ali-7", label: "Github" },
  { Icon: FaXTwitter, href: "https://x.com/htc007Cheema", label: "Twitter" }
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-background border-t border-glass-ring py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-faint">&copy; 2026 Haider Ali Tariq Cheema.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-surface backdrop-blur-md border border-glass-border shadow-glass flex items-center justify-center text-muted hover:text-foreground hover:shadow-glass-hover transition-[color,box-shadow]"
                aria-label={link.label}
                variants={shouldReduceMotion ? {} : socialLinkVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <link.Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
