"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { TechIcon } from "@/components/tech-icon";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: "5rem", paddingBottom: "4rem", paddingLeft: "14rem" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto"
          style={{ marginBottom: "3rem", marginLeft: "-3rem" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block"
          >
            Skills & Expertise
            <motion.span
              className="text-primary text-glow-cyan"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              .
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

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {skills.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
              <div>
                {/* Category Title */}
                <div className="text-center max-w-5xl mx-auto" style={{ marginBottom: "3.5rem" }}>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-foreground inline-block"
                  >
                    {category.category}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-0.5 bg-gradient-to-r from-primary to-transparent"
                      style={{ marginTop: "0.5rem" }}
                    />
                  </motion.h3>
                </div>
                {/* Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-secondary border border-border hover:border-primary rounded-xl text-center shadow-lg hover:shadow-primary/10 transition-all duration-200 cursor-default"
                      style={{ padding: "2.5rem 2rem" }}
                    >
                      <div className="flex flex-col items-center justify-center gap-5">
                        <div className="text-6xl">
                          <TechIcon name={tech.name} />
                        </div>
                        <span className="text-foreground font-semibold text-lg md:text-xl">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
