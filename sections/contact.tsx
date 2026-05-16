"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { socialLinks } from "@/lib/data";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // Simulate form submission
    // In production, integrate with a service like Web3Forms, Formspree, or EmailJS
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "2rem" }}
    >
      <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl aurora-blob pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl aurora-blob-delayed pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto"
          style={{ marginBottom: "3rem" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block"
          >
            Get In Touch
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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto flex-1">
          {/* Contact Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="flex flex-col gap-9 h-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/70 text-foreground text-base placeholder:text-muted-foreground shadow-[0_0_12px_rgba(0,212,255,0.08)] focus:shadow-[0_0_28px_rgba(0,212,255,0.28)] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/70 text-foreground text-base placeholder:text-muted-foreground shadow-[0_0_12px_rgba(0,212,255,0.08)] focus:shadow-[0_0_28px_rgba(0,212,255,0.28)] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/70 text-foreground text-base placeholder:text-muted-foreground resize-none flex-1 shadow-[0_0_12px_rgba(0,212,255,0.08)] focus:shadow-[0_0_28px_rgba(0,212,255,0.28)] transition-all duration-300"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-20 mt-8">
              <div className="border border-primary/15 rounded-2xl p-6 bg-secondary/30 shadow-[0_0_25px_rgba(0,212,255,0.06)] text-center">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                  animate={{
                    y: [0, -3, 0],
                    textShadow: [
                      "0 0 0px rgba(0,212,255,0)",
                      "0 0 18px rgba(0,212,255,0.28)",
                      "0 0 0px rgba(0,212,255,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Let&apos;s{" "}
                  <span className="text-primary text-glow-cyan">Connect</span>
                </motion.h3>
                <motion.div
                  className="relative h-1 w-24 rounded-full bg-primary/20 overflow-hidden mx-auto mb-6"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(0,212,255,0.15)",
                      "0 0 18px rgba(0,212,255,0.45)",
                      "0 0 8px rgba(0,212,255,0.15)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ x: ["0%", "220%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out!
                </p>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <motion.h4
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                  animate={{
                    y: [0, -3, 0],
                    scale: [1, 1.015, 1],
                    textShadow: [
                      "0 0 0px rgba(0,212,255,0)",
                      "0 0 20px rgba(0,212,255,0.3)",
                      "0 0 0px rgba(0,212,255,0)",
                    ],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  Find{" "}
                  <span className="text-primary text-glow-cyan">Me On</span>
                </motion.h4>
                <motion.div
                  className="relative h-1 w-24 rounded-full bg-primary/20 overflow-hidden mx-auto"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(0,212,255,0.15)",
                      "0 0 18px rgba(0,212,255,0.45)",
                      "0 0 8px rgba(0,212,255,0.15)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ x: ["0%", "220%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                <div className="flex justify-center gap-6 px-4" style={{ marginTop: "4rem" }}>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={socialLinks.email}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                    aria-label="Email"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
