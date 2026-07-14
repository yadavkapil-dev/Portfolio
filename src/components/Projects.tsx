"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import Modal from "./Modal";
import BrowserFrame from "./ui/BrowserFrame";
import SectionHeading from "./ui/SectionHeading";
import {
  btnGhost,
  btnPrimary,
  btnSecondary,
  sectionPadding,
} from "../lib/ui";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="w-full bg-bg">
      <div className={`${sectionPadding} text-fg max-w-6xl mx-auto`}>
        <SectionHeading
          title="Projects"
          description="A collection of full-stack applications I've designed, built, and shipped end to end."
        />

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                onClick={() => setActive(project.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="will-change-transform will-change-opacity cursor-pointer group grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-6 md:p-10 rounded-3xl bg-surface border border-border shadow-lg shadow-black/20 hover:border-accent/40 hover:bg-elevated transition-all duration-300"
              >
                <div className={reversed ? "md:order-2" : "md:order-1"}>
                  <BrowserFrame
                    src={project.image}
                    alt={`${project.title} preview`}
                    url={project.live}
                  />
                </div>

                <div
                  className={`${
                    reversed ? "md:order-1" : "md:order-2"
                  } text-center space-y-4`}
                >
                  <span className="text-xs font-mono text-accent/70 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-fg">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          title="Live Demo"
                          aria-label={`Open ${project.title} live demo`}
                          className="text-fg-muted hover:text-accent transition"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                          </svg>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          title="GitHub"
                          aria-label={`Open ${project.title} GitHub repository`}
                          className="text-fg-muted hover:text-accent transition"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.4-3.87-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.7 10.7 0 0 1 12 6.8c.97.01 1.94.13 2.85.38 2.2-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.16 1.82 1.16 3.07 0 4.41-2.7 5.36-5.27 5.65.43.37.81 1.1.81 2.23v3.31c0 .32.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-fg-secondary text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-elevated border border-border text-fg-secondary text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <span className={`${btnGhost} pt-1`}>
                      View Case Study
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M13 5l7 7-7 7-1.41-1.41L16.17 13H4v-2h12.17l-4.58-4.59L13 5Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {projects.map(
          (project) =>
            active === project.id && (
              <Modal
                key={project.id}
                open
                title={project.title}
                onClose={() => setActive(null)}
              >
                <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">
                  {project.details}
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={btnPrimary}
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={btnSecondary}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </Modal>
            )
        )}
      </div>
    </section>
  );
}