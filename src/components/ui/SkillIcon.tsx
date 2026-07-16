"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { skillIconVariants } from "@/lib/animations";

interface SkillIconProps {
  Icon: IconType;
  label: string;
}

export function SkillIcon({ Icon, label }: SkillIconProps) {
  const chip = (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-chip bg-mint-soft border border-glass-border flex items-center justify-center">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-foreground/60" />
    </div>
  );

  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-col items-center gap-3">
        {chip}
        <span className="text-xs sm:text-sm text-muted font-medium text-center">{label}</span>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      variants={skillIconVariants}
      initial="initial"
      whileHover="hover"
    >
      {chip}
      <span className="text-xs sm:text-sm text-muted font-medium text-center">{label}</span>
    </motion.div>
  );
}
