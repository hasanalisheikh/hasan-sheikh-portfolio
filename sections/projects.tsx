"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl aurora-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl aurora-blob-delayed pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto">
        {/* 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
        >
          {/* Page Title - spans full grid width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 text-center"
            style={{ marginBottom: "0.5rem" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block">
              Things I&apos;ve Built
              <motion.span
                className="text-primary text-glow-cyan"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                !
              </motion.span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full"
              style={{ marginTop: "1.5rem" }}
            />
          </motion.div>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <div
                className="group relative bg-secondary border border-border hover:border-primary/60 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_34px_rgba(0,212,255,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full card-glow-pulse"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_25%_20%,rgba(0,212,255,0.16),transparent_45%)]" />
                {/* Project Image */}
                <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  {project.image ? (
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) calc(100vw - 2rem), calc((1152px - 1.5rem) / 2)"
                        className={project.imageContain ? "object-contain" : "object-cover"}
                        style={{
                          ...(project.imageBg ? { backgroundColor: project.imageBg } : { backgroundColor: project.imageContain ? "#0d0d0d" : undefined }),
                          ...((project.imageScale || project.imageOffsetY) ? { transform: `scale(${project.imageScale ?? 1}) translateY(${project.imageOffsetY ?? 0}px)` } : {}),
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-secondary"
                        initial={{ x: 0 }}
                        whileInView={{ x: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 + 0.2 }}
                      />
                    </div>
                  ) : (
                    <span className="text-7xl opacity-20">🚀</span>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className="text-sm sm:text-base text-muted-foreground font-light">
                          {project.year}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Demo
                      </motion.a>
                    )}
                    {project.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.983 3.5C4.983 4.88 3.87 6 2.5 6S.018 4.88.018 3.5 1.13 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V23h-4V8zm7 0h3.833v2.05h.055c.534-1.013 1.84-2.083 3.788-2.083C19.227 7.967 21 10.18 21 14.24V23h-4v-7.53c0-1.797-.032-4.108-2.5-4.108-2.502 0-2.885 1.954-2.885 3.978V23h-4V8z" />
                        </svg>
                        LinkedIn Post
                      </motion.a>
                    )}
                    {!project.github && !project.demo && !project.linkedin && (
                      <span className="text-sm text-muted-foreground italic">
                        Proprietary project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
