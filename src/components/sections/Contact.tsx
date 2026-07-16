'use client';

import { DURATIONS, EASINGS, fadeInUp } from '@/lib/animations';
import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.entrance }
  }
};

const iconHoverVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5 }
};

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={shouldReduceMotion ? {} : fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground">Get in Touch</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            🌎 Building products globally. 🤝 Open to collaborations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}>
          <motion.div
            className="glass-card p-8 flex flex-col items-center gap-4 text-center transition-shadow duration-300 hover:shadow-glass-hover"
            variants={shouldReduceMotion ? {} : cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className="w-14 h-14 rounded-chip bg-mint-soft flex items-center justify-center"
              variants={shouldReduceMotion ? {} : iconHoverVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-foreground/70">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </motion.div>
            <span className="eyebrow">Email</span>
            <motion.a
              href=" https://mail.google.com/mail/?view=cm&to=haideralitariqcheema@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent underline-offset-4 transition-colors text-base font-medium break-all"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
              haideralitariqcheema@gmail.com
            </motion.a>
          </motion.div>

          <motion.div
            className="glass-card p-8 flex flex-col items-center gap-4 text-center transition-shadow duration-300 hover:shadow-glass-hover"
            variants={shouldReduceMotion ? {} : cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className="w-14 h-14 rounded-chip bg-accent-soft flex items-center justify-center"
              variants={shouldReduceMotion ? {} : iconHoverVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-foreground/70 shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.div>

            <span className="eyebrow">Availability</span>
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 animate-pulse" />
                <span className="text-foreground text-base font-medium">Available for hire</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
