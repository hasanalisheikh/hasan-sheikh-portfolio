"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/button";
import { Typewriter } from "@/components/typewriter";
import { personalInfo, socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-8 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left mobile-mt-reset" style={{ marginTop: "3rem" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl text-foreground font-medium"
              style={{ marginBottom: "0.01rem" }}
            >
              Hello, It&apos;s Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shimmer"
              style={{ marginBottom: "1.5rem" }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground"
              style={{ marginBottom: "2rem" }}
            >
              And I&apos;m a{" "}
              <Typewriter
                text="Software Developer"
                className="text-primary text-glow-cyan font-bold"
                delay={0.7}
                speed={80}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ marginBottom: "2.5rem" }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start"
              style={{ marginBottom: "3rem" }}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_22px_rgba(0,212,255,0.45)] hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_22px_rgba(0,212,255,0.45)] hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={socialLinks.email}
                className="w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_22px_rgba(0,212,255,0.45)] hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button variant="outline" href="/projects" className="!px-8 sm:!px-16 !py-5 sm:!py-7 text-base sm:text-xl rounded-full shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                View My Work
              </Button>
              <Button variant="outline" href="/contact" className="!px-8 sm:!px-16 !py-5 sm:!py-7 text-base sm:text-xl rounded-full shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Hexagonal Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end hero-photo-float"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]">
              {/* Cyan glow behind hexagon - pulsing */}
              <div className="absolute inset-0 hexagon-clip bg-primary/25 blur-xl hex-glow-a" />
              <div className="absolute inset-0 hexagon-clip bg-primary/15 hex-glow-b" />
              {/* Photo */}
              <div className="relative w-full h-full hexagon-clip overflow-hidden">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, 448px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-24 w-[28rem] h-[28rem] bg-cyan-400/20 rounded-full blur-3xl aurora-blob" />
        <div className="absolute -bottom-16 right-0 w-[24rem] h-[24rem] bg-sky-400/20 rounded-full blur-3xl aurora-blob-delayed" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-[0.08]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-[0.05]" />
      </div>
    </section>
  );
}
