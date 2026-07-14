"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { cardSurface, sectionPadding } from "../lib/ui";

const education = [
  {
    title: "Master of Information Technology",
    school: "Asia Pacific International College, Australia, Jan 2026",
    details: "Focused on information systems, data management, cloud computing, networking, cyber security, and applied software projects."
  },
  {
    title: "Bachelor of Technology ",
    school: "Jodhpur National University, India, June 2019",
    details: "Studied core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering."
  }
];

export default function Education() {
  return (
    <section id="education" className="w-full bg-bg-alt">
      <div className={`${sectionPadding} text-fg max-w-3xl mx-auto`}>
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardSurface} p-6 md:p-8 text-center hover:border-accent/30 transition-colors duration-300`}
            >
              <h3 className="text-lg md:text-2xl font-semibold text-fg">
                {edu.title}
              </h3>

              <p className="text-fg-muted mt-1">{edu.school}</p>
              <p className="text-fg-secondary mt-3 leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
