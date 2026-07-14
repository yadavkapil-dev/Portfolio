"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { btnPrimary, btnSecondary, sectionPadding } from "../lib/ui";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-bg">
      <div
        className={`${sectionPadding} pb-32 text-fg text-center max-w-2xl mx-auto`}
      >
        <SectionHeading title="Contact" />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-fg-secondary text-sm md:text-base leading-relaxed mb-10 -mt-6"
        >
          I&apos;m open to full-time & part-time developer roles, freelance
          work or any collaboration that brings ideas to life.
        </motion.p>

        {/* Email Button */}
        <motion.a
          href="mailto:ykapil086@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={btnPrimary}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13l8-6.99V6H4Zm16 2.24-7.4 6.47a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24Z" />
          </svg>
          Email Me
        </motion.a>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="https://github.com/yadavkapil-dev"
            target="_blank"
            className={btnSecondary}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.4-3.87-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.7 10.7 0 0 1 12 6.8c.97.01 1.94.13 2.85.38 2.2-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.16 1.82 1.16 3.07 0 4.41-2.7 5.36-5.27 5.65.43.37.81 1.1.81 2.23v3.31c0 .32.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yadav-kapil"
            target="_blank"
            className={btnSecondary}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9.75h4v11H3v-11zm7 0h3.6v1.7h.05c.5-.9 1.7-1.85 3.5-1.85 3.7 0 4.4 2.45 4.4 5.65v5.5h-4V15c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v5.9h-4v-11z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Small mini caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-fg-muted text-xs"
        >
          Response time: usually within 24 hours
        </motion.p>
      </div>
    </section>
  );
}
