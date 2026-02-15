"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { TechIcon } from "@/components/tech-icon";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading>
          Skills & Expertise
        </SectionHeading>

        <div className="space-y-16 sm:space-y-20">
          {skills.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 sm:mb-12 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-background border-2 border-border hover:border-primary rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-default"
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                        <TechIcon name={tech.name} />
                        <span className="text-foreground font-semibold text-sm md:text-base">
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
