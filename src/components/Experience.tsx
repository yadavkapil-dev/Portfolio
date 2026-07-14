"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { cardSurface, sectionPadding } from "../lib/ui";

const roles = [
  {
    title: "Softlabs — Software Engineer Intern",
    date: "Nov 2025 — Jan 2026",
    location: "Sydney, Australia",
    description:
      "Developed custom WordPress plugins using PHP, MySQL, and WordPress APIs to automate manual workflows. Built admin dashboard features, file uploads, automated notifications, request tracking, and server-side validation while collaborating in an Agile development environment.",
  },
  {
    title: "XFlyve Logistics — Fleet Operations (Part-time)",
    date: "Oct 2024 — Aug 2025",
    location: "Sydney, Australia",
    description:
      "Started in fleet operations handling job assignments, driver paperwork, and delivery documentation. After identifying repetitive spreadsheet, phone, and WhatsApp-based workflows, independently designed and built XFlyve using React, Node.js, Express, and MongoDB. The platform supports admin and driver workflows for job tracking, POD approvals, work diaries, authentication, role-based access, and operational reporting.",
  },
  {
    title: "A Star Infotech — Web Developer",
    date: "Jan 2022 — Oct 2023",
    location: "Sri Ganganagar, India",
    description:
      "Developed and customized responsive WordPress websites for local businesses and schools using PHP, WordPress, HTML, CSS, JavaScript, and Elementor. Maintained existing websites, implemented new features, and delivered client-requested enhancements.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-bg">
      <div className={`${sectionPadding} text-fg max-w-3xl mx-auto`}>
        <SectionHeading title="Experience" />

        <div className="relative border-l border-border pl-6 md:pl-8 space-y-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[31px] md:-left-[39px] top-6 w-3 h-3 bg-accent rounded-full ring-4 ring-bg" />

              <div
                className={`${cardSurface} p-5 md:p-6 text-left hover:border-accent/30 transition-colors duration-300`}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 justify-between">
                  <h3 className="text-base md:text-xl font-semibold text-fg">
                    {role.title}
                  </h3>

                  <span className="text-xs font-medium text-accent bg-accent-soft border border-accent/20 rounded-full px-3 py-1 whitespace-nowrap">
                    {role.date}
                  </span>
                </div>

                <p className="text-fg-muted text-xs md:text-sm mt-1">
                  {role.location}
                </p>

                <p className="text-fg-secondary text-sm md:text-base mt-3 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
