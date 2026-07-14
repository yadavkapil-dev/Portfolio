"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { sectionPadding } from "../lib/ui";

export default function About() {
  return (
    <section id="about" className="w-full bg-bg-alt">
      <div
        className={`${sectionPadding} text-fg text-center max-w-3xl mx-auto`}
      >
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6 text-sm md:text-base text-fg-secondary leading-relaxed md:leading-loose"
        >
          <p>
            I&apos;m a Sydney-based Full-Stack Software Engineer who enjoys
            building practical, reliable software that solves real business
            problems. My experience spans{" "}
            <span className="text-accent font-semibold">
              Java, JavaScript, TypeScript, React, Next.js, Node.js, Express,
              MongoDB, PHP, and WordPress
            </span>
            , and I enjoy working across the full development lifecycle—from
            developing responsive user interfaces to building secure APIs,
            designing databases, and deploying applications.
          </p>

          <p>
            I enjoy understanding how businesses operate and using technology to
            simplify manual processes through well-designed software. I&apos;m
            always looking to improve as an engineer, learn from experienced
            teams, and build products that create real value. I&apos;m currently
            seeking a full-time Software Engineer opportunity and am open to
            relocation anywhere in Australia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
