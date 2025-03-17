"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { PickCard } from '@/components/ui/PickCard';

type CardRowProps = {
  className?: string;
  title: string;
  cards: {
    label: string;
    href?: string;
    imageUrl: string;
  }[];
  isWatching?: boolean;
};

export function CardRow({ className, title, cards, isWatching = true }: CardRowProps) {
  return (
    <div className={cn("card-row-container my-12 px-8", className)}>
      <motion.h2
        className="row-title text-2xl font-bold text-white mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="card-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <PickCard
            key={`${card.label}-${index}`}
            label={card.label}
            href={isWatching ? card.href : undefined}
            imageUrl={card.imageUrl}
            animationDelay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}
