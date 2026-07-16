'use client';

import { cardTransition, cardVariants } from '@/lib/animations';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import {
  FaCar,
  FaChartLine,
  FaCode,
  FaComments,
  FaFileAlt,
  FaHeart,
  FaQrcode,
  FaShoppingCart,
  FaStore,
  FaTruck
} from 'react-icons/fa';

type ProjectIcon =
  | 'finance'
  | 'communication'
  | 'ecommerce'
  | 'delivery'
  | 'document'
  | 'legacy'
  | 'qr'
  | 'car'
  | 'store'
  | 'default';

const iconMap: Record<ProjectIcon, React.ComponentType<{ className?: string }>> = {
  finance: FaChartLine,
  communication: FaComments,
  ecommerce: FaShoppingCart,
  delivery: FaTruck,
  document: FaFileAlt,
  legacy: FaHeart,
  qr: FaQrcode,
  car: FaCar,
  store: FaStore,
  default: FaCode
};

interface FeatureCardProps {
  bgColor?: string;
  title: string;
  description: string;
  href?: string;
  images?: string[];
  icon?: ProjectIcon;
  onClick?: () => void;
}

export function FeatureCard({
  bgColor = 'bg-accent-soft',
  title,
  description,
  href,
  images,
  icon = 'default',
  onClick
}: FeatureCardProps) {
  const IconComponent = iconMap[icon];
  const shouldReduceMotion = useReducedMotion();

  const cardContent = (
    <motion.div
      className="relative group h-full"
      variants={cardVariants}
      initial="initial"
      whileHover={shouldReduceMotion ? undefined : 'hover'}
      transition={cardTransition}>
      {/* hover shadow crossfaded via opacity — cheaper than animating box-shadow */}
      <div
        className="absolute inset-0 rounded-card shadow-glass-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="glass-card overflow-hidden relative h-full">
        <div className={`aspect-[4/3] ${bgColor} flex items-center justify-center relative overflow-hidden`}>
          {images && images.length > 0 ? (
            <Image
              src={images[0]}
              alt={`${title} thumbnail`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-mint-soft flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-foreground/50" />
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full h-full text-left cursor-pointer">
        {cardContent}
      </button>
    );
  }

  return cardContent;
}
