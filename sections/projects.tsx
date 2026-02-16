"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: "5rem", paddingBottom: "4rem", paddingLeft: "10rem" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Page Title - spans full grid width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 text-center"
            style={{ marginBottom: "2rem" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block"
            >
              Things I've Built
              <motion.span
                className="text-primary text-glow-cyan"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                !
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full"
              style={{ marginTop: "1.5rem" }}
            />
          </motion.div>
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-secondary border border-border hover:border-primary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-7xl opacity-20">🚀</span>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2" style={{ marginBottom: "2.5rem" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200"
                      >
                        <svg
                          className="w-5 h-5"
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
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200"
                      >
                        <svg
                          className="w-5 h-5"
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
                        {project.demo.includes("linkedin")
                          ? "LinkedIn Post"
                          : "Demo"}
                      </motion.a>
                    )}
                    {!project.github && !project.demo && (
                      <span className="text-sm text-muted-foreground italic">
                        Proprietary project
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
