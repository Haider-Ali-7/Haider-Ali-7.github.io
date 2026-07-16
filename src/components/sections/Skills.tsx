"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SkillIcon } from "@/components/ui/SkillIcon";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { GiBearFace } from "react-icons/gi";
import {
  SiAnthropic,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { TbCursorText } from "react-icons/tb";
import { EASINGS } from "@/lib/animations";

interface Skill {
  icon: IconType;
  label: string;
}

const skills: Skill[] = [
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React Native" },
  { icon: SiExpo, label: "Expo" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiRedux, label: "Redux" },
  { icon: GiBearFace, label: "Zustand" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: FaAws, label: "AWS" },
  { icon: SiGithubactions, label: "CI/CD" },
  { icon: SiAnthropic, label: "Claude" },
  { icon: TbCursorText, label: "Cursor" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "Github" }
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 }
  }
};

const skillItemVariants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASINGS.entrance }
  }
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12">
          <p className="eyebrow text-center mb-10">Toolbox</p>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12"
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map(skill => (
              <motion.div key={skill.label} variants={shouldReduceMotion ? {} : skillItemVariants}>
                <SkillIcon Icon={skill.icon} label={skill.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
