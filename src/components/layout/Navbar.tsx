'use client';

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className="relative text-sm text-muted hover:text-foreground transition-colors font-medium py-2 group">
      {item.label}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100" />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', v => setScrolled(v > 50));

  const mobileMenuVariants = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 }
  };

  const emphasized = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface-nav backdrop-blur-xl border-b transition-[border-color,box-shadow] duration-300 ${
        emphasized ? 'border-glass-ring shadow-glass' : 'border-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#home"
            className="text-xl sm:text-2xl font-medium tracking-tight text-foreground"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}>
            HTC
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <NavLink key={item.label} item={item} />
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <motion.button
              className="w-10 h-10 flex items-center justify-center text-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}>
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-glass-ring"
              variants={shouldReduceMotion ? {} : mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2, ease: 'easeOut' }}>
              <div className="flex flex-col gap-4 text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}>
                    <NavLink item={item} onClick={() => setMobileMenuOpen(false)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
