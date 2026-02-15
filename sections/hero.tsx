"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 flex justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-[6px] border-primary shadow-2xl ring-4 ring-primary/20">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-14 sm:mb-16"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-16 sm:mb-20"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-20 sm:mb-24 leading-loose max-w-3xl mx-auto text-center"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-10 sm:gap-12 justify-center items-center"
        >
          <Button
            variant="outline"
            onClick={() => scrollToSection("#projects")}
            className="text-xl sm:text-2xl min-w-[240px] sm:min-w-[280px] px-10 py-6 font-semibold border-2 rounded-xl"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="text-xl sm:text-2xl min-w-[240px] sm:min-w-[280px] px-10 py-6 font-semibold border-2 rounded-xl"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
