"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EASINGS, DURATIONS } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const textVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
    }
  };

  const heroStaggerContainer = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-24 right-[-10%] w-[28rem] h-[28rem] rounded-full bg-accent/25 blur-3xl will-change-transform"
          style={shouldReduceMotion ? {} : { y: y1 }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-80 h-80 rounded-full bg-rose/20 blur-3xl will-change-transform"
          style={shouldReduceMotion ? {} : { y: y2 }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[10%] w-96 h-96 rounded-full bg-mint/25 blur-3xl will-change-transform"
          style={shouldReduceMotion ? {} : { y: y3 }}
        />
      </div>

      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 hidden md:flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="glass-card px-8 py-6"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.entrance, ease: EASINGS.entrance, delay: 0.5 }}>
            <p className="eyebrow mb-3">Experience</p>
            <p className="text-5xl font-light text-foreground tracking-tight">
              6<span className="text-muted">+</span>
            </p>
            <p className="text-sm text-muted mt-2">years shipping apps</p>
          </motion.div>

          <motion.div
            className="glass-card absolute -right-24 -bottom-20 px-6 py-5"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.entrance, ease: EASINGS.entrance, delay: 0.7 }}>
            <p className="eyebrow mb-3">Projects</p>
            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-light text-foreground tracking-tight">13</p>
              <div className="w-16 h-1.5 rounded-full bg-accent-soft overflow-hidden">
                <div className="w-3/4 h-full rounded-full bg-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-xl"
          variants={shouldReduceMotion ? {} : heroStaggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p className="eyebrow mb-4" variants={shouldReduceMotion ? {} : textVariants}>
            Full Stack AI Engineer
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight mb-6"
            variants={shouldReduceMotion ? {} : textVariants}
          >
            <motion.span className="inline-block" variants={shouldReduceMotion ? {} : textVariants}>
              Haider Ali
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={shouldReduceMotion ? {} : textVariants}>
              Tariq
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={shouldReduceMotion ? {} : textVariants}>
              Cheema
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-muted text-lg mb-8 max-w-md"
            variants={shouldReduceMotion ? {} : textVariants}
          >
            Turning ideas into dynamic and scalable solutions.
          </motion.p>
          <motion.div variants={shouldReduceMotion ? {} : textVariants}>
            <Button href="#projects" variant="primary" size="lg">
              Explore Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
