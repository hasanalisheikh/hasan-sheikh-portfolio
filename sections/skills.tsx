"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Technologies I work with">
          Skills & Expertise
        </SectionHeading>

        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
              <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: techIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Git Version Control",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "UI/UX Design",
              "Performance Optimization",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-secondary hover:bg-muted rounded-lg p-4 text-center font-medium text-foreground transition-all duration-200 shadow-md hover:shadow-lg cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
