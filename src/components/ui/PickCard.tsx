"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type PickCardProps = {
  className?: string;
  label: string;
  href?: string;
  imageUrl: string;
  animationDelay?: number;
};

export function PickCard({
  className,
  label,
  href,
  imageUrl,
  animationDelay = 0
}: PickCardProps) {
  const CardContent = () => (
    <motion.div
      className={cn(
        "pick-card relative w-full h-48 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10",
        className
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animationDelay: `${animationDelay}s`
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay * 0.2 }}
    >
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
        <div className="pick-label p-4 text-white font-medium">{label}</div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
