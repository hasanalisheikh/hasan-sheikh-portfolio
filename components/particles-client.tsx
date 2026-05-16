"use client";

import dynamic from "next/dynamic";

const FloatingParticles = dynamic(
  () =>
    import("@/components/floating-particles").then((m) => ({
      default: m.FloatingParticles,
    })),
  { ssr: false }
);

export function ParticlesClient() {
  return <FloatingParticles />;
}
