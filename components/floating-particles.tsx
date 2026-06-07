import type React from "react";

const PARTICLES = [
  { id:  0, x: 13,  y:  7,  size: 5, opL: 0.12, opH: 0.22, dur: 18, del: 0,   anim: "a", color: "0,212,255" },
  { id:  1, x: 50,  y: 20,  size: 3, opL: 0.10, opH: 0.18, dur: 22, del: 1.5, anim: "b", color: "56,189,248" },
  { id:  2, x: 80,  y: 35,  size: 6, opL: 0.14, opH: 0.25, dur: 16, del: 3,   anim: "c", color: "14,165,233" },
  { id:  3, x: 25,  y: 60,  size: 4, opL: 0.11, opH: 0.20, dur: 20, del: 0.8, anim: "a", color: "96,165,250" },
  { id:  4, x: 68,  y: 75,  size: 3, opL: 0.09, opH: 0.16, dur: 25, del: 4,   anim: "b", color: "0,212,255" },
  { id:  5, x: 90,  y: 10,  size: 5, opL: 0.13, opH: 0.22, dur: 19, del: 2,   anim: "c", color: "6,182,212" },
  { id:  6, x: 40,  y: 88,  size: 4, opL: 0.10, opH: 0.19, dur: 23, del: 5,   anim: "a", color: "56,189,248" },
  { id:  7, x: 10,  y: 45,  size: 6, opL: 0.15, opH: 0.26, dur: 17, del: 1,   anim: "b", color: "14,165,233" },
  { id:  8, x: 60,  y: 55,  size: 3, opL: 0.08, opH: 0.14, dur: 28, del: 6,   anim: "c", color: "0,212,255" },
  { id:  9, x: 35,  y: 30,  size: 5, opL: 0.12, opH: 0.21, dur: 21, del: 3.5, anim: "a", color: "96,165,250" },
  { id: 10, x: 75,  y: 90,  size: 4, opL: 0.11, opH: 0.18, dur: 24, del: 7,   anim: "b", color: "6,182,212" },
  { id: 11, x: 55,  y: 15,  size: 3, opL: 0.09, opH: 0.17, dur: 26, del: 2.5, anim: "c", color: "56,189,248" },
  { id: 12, x: 20,  y: 80,  size: 5, opL: 0.13, opH: 0.23, dur: 20, del: 4.5, anim: "a", color: "14,165,233" },
  { id: 13, x: 85,  y: 50,  size: 4, opL: 0.10, opH: 0.18, dur: 22, del: 8,   anim: "b", color: "0,212,255" },
  { id: 14, x: 45,  y: 65,  size: 6, opL: 0.14, opH: 0.24, dur: 18, del: 1.2, anim: "c", color: "96,165,250" },
] as const;

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(${p.color}, ${p.opL})`,
            boxShadow: `0 0 ${p.size * 3}px rgba(${p.color}, ${p.opL * 0.6})`,
            "--p-opacity-low": p.opL,
            "--p-opacity-high": p.opH,
            animation: `particle-float-${p.anim} ${p.dur}s ease-in-out ${p.del}s infinite, particle-opacity ${Math.round(p.dur * 0.7)}s ease-in-out ${p.del}s infinite`,
            willChange: "transform, opacity",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
