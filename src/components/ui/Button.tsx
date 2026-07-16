"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants, buttonTransition } from "@/lib/animations";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  onClick,
  className = ""
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-[background-color,color,border-color,box-shadow] duration-200";

  const variants = {
    primary: "bg-ink text-background hover:bg-ink-hover",
    secondary:
      "bg-surface backdrop-blur-md border border-glass-border shadow-glass text-foreground hover:shadow-glass-hover",
    outline: "border border-glass-ring text-muted hover:text-foreground hover:border-faint"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (shouldReduceMotion) {
    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={buttonTransition}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={buttonTransition}
    >
      {children}
    </motion.button>
  );
}
