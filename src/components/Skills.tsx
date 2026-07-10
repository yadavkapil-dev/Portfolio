"use client";

import { motion } from "framer-motion";

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
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Passport.js",
      "Socket.IO",
      "OpenAI API",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL", "Cloudinary"],
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
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jest",
      "MySQL Workbench",
      "Agile/Scrum",
      "GitHub Copilot",
      "Cursor",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 md:px-10 py-16 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-14"
      >
        Skills
      </motion.h2>

      <div className="space-y-12">
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
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-8 md:w-12 bg-purple-500/40" />

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {group.title}
              </h3>

              <span className="h-px w-8 md:w-12 bg-purple-500/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
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
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="
                    cursor-default
                    rounded-lg
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-2
                    text-sm md:text-base
                    text-gray-300
                    shadow-sm
                    transition-all duration-300
                    hover:border-purple-500/70
                    hover:bg-purple-500/15
                    hover:text-white
                    hover:shadow-[0_0_18px_rgba(168,85,247,0.28)]
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}