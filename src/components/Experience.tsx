"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-16 text-white text-center max-w-3xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-purple-500/30 pl-6 space-y-14">
        {/* Softlabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            Softlabs — Software Engineer Intern
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Nov 2025 — Jan 2026 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Developed custom WordPress plugins using PHP, MySQL, and WordPress
            APIs to automate manual workflows. Built admin dashboard features,
            file uploads, automated notifications, request tracking, and
            server-side validation while collaborating in an Agile development
            environment.
          </p>
        </motion.div>

        {/* XFlyve */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            XFlyve Logistics — Fleet Operations (Part-time)
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Oct 2024 — Aug 2025 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Started in fleet operations handling job assignments, driver
            paperwork, and delivery documentation. After identifying repetitive
            spreadsheet, phone, and WhatsApp-based workflows, independently
            designed and built XFlyve using React, Node.js, Express, and MongoDB.
            The platform supports admin and driver workflows for job tracking,
            POD approvals, work diaries, authentication, role-based access, and
            operational reporting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}