"use client";

import { motion } from "framer-motion";

export function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: "80px" }}>
      <motion.svg
        className="absolute bottom-0 h-full"
        style={{ width: "200%" }}
        viewBox="0 0 2400 80"
        preserveAspectRatio="none"
        animate={{ x: [0, -1200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,80 L0,80 Z"
          fill="rgba(0, 212, 255, 0.05)"
        />
        <path
          d="M0,50 C200,20 400,70 600,50 C800,30 1000,70 1200,50 C1400,30 1600,70 1800,50 C2000,30 2200,70 2400,50 L2400,80 L0,80 Z"
          fill="rgba(0, 212, 255, 0.03)"
        />
      </motion.svg>
    </div>
  );
}
