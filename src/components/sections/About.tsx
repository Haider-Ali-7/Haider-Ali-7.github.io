"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { slideFromLeft, slideFromRight } from "@/lib/animations";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const avatarHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 3 }
  };

  return (
    <section id="about" className="pb-24 sm:pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center lg:justify-start gap-4"
            variants={shouldReduceMotion ? {} : slideFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative"
              whileHover={shouldReduceMotion ? undefined : "hover"}
              variants={avatarHoverVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card w-32 h-40 sm:w-40 sm:h-52 overflow-hidden flex items-end justify-center">
                <div className="w-24 h-28 sm:w-32 sm:h-36 bg-accent-soft rounded-t-full flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-surface-strong border border-glass-border rounded-full flex items-center justify-center text-2xl"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    🧔
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative mt-8"
              whileHover={shouldReduceMotion ? undefined : "hover"}
              variants={avatarHoverVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card w-32 h-40 sm:w-40 sm:h-52 overflow-hidden flex items-end justify-center">
                <div className="w-24 h-28 sm:w-32 sm:h-36 bg-rose-soft rounded-t-full flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-surface-strong border border-glass-border rounded-full flex items-center justify-center text-2xl"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    👩‍🎨
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? {} : slideFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="eyebrow mb-4">Background</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              My journey in software development began as a React Native Engineer after my gradutaion from GIFT
              University. With 6+ years of experience building fast, scalable mobile and web apps using React-Native,
              Expo, ReactJs, NextJs, TypeScript and Tailwind CSS. As my skills evolved, I became increasingly aware of
              the vulnerabilities in many mobile and web apps. This led me to specialize in Full Stack AI Engineer.
              Working across cultures has shaped my approach to problem-solving.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Being fluent in English has opened doors to international collaborations where diverse perspectives lead
              to more robust solutions. This multicultural background helps me build products that resonate globally.
            </p>

            <Button
              href="/pdfs/Haider Ali Tariq.pdf"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
