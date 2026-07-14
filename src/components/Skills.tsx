"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { cardSurface, sectionPadding } from "../lib/ui";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "HTML5",
      "CSS3",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Vite",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Passport.js",
      "Socket.IO",
      "WordPress",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Cloudinary",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Render",
      "CI/CD",
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Git",
      "GitHub",
      "Jest",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-bg-alt">
      <div className={`max-w-6xl mx-auto ${sectionPadding} text-fg text-center`}>
        <SectionHeading title="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.07,
              }}
              viewport={{ once: true }}
              className={`${cardSurface} p-6 text-center hover:border-accent/30 transition-colors duration-300`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-secondary mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.05 + skillIndex * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="cursor-default rounded-lg border border-border bg-elevated px-3 py-1.5 text-xs md:text-sm text-fg-secondary transition-all duration-300 hover:border-accent/70 hover:bg-accent-soft hover:text-fg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
