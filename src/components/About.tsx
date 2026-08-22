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
            Full-Stack Software Engineer based in Sydney, with a Master of IT.
            I build{" "}
            <span className="text-accent font-semibold">
              MERN applications
            </span>{" "}
            end to end — from the database schema to the tests to the server
            it runs on. XFlyve exists because I was running fleet jobs through
            spreadsheets and WhatsApp, so I replaced that with software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
