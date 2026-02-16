"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  blur: number;
}

const PARTICLE_COLORS = [
  "0, 212, 255",
  "56, 189, 248",
  "14, 165, 233",
  "96, 165, 250",
  "6, 182, 212",
] as const;

export function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 36 }, (_, i): Particle => ({
      id: i,
      x: (i * 37 + 13) % 100,
      y: (i * 53 + 7) % 100,
      size: 2 + ((i * 3) % 7),
      opacity: 0.12 + ((i * 7) % 34) / 100,
      duration: 15 + ((i * 11) % 25),
      delay: (i * 2.3) % 10,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      blur: 0.5 + ((i * 5) % 9) / 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `rgba(${p.color}, ${p.opacity})`,
            filter: `blur(${p.blur}px)`,
            boxShadow: `0 0 ${p.size * 2.5}px rgba(${p.color}, ${p.opacity * 0.75}), 0 0 ${p.size * 8}px rgba(${p.color}, ${p.opacity * 0.28})`,
          }}
          animate={{
            y: [0, -34, 12, -20, 0],
            x: [0, 18, -12, 22, 0],
            scale: [1, 1.2, 0.95, 1.1, 1],
            opacity: [p.opacity, p.opacity * 1.55, p.opacity * 0.7, p.opacity * 1.35, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
