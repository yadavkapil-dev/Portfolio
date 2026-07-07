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
            Softlabs — Software Developer Intern
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Nov 2025 — Jan 2026 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Developed a WordPress plugin to replace manual email-based request
            handling with a structured, database-driven workflow system. Built
            admin dashboard features, file uploads, automated notifications, and
            request tracking using PHP, WordPress APIs, and MySQL while working
            in an Agile development environment.
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
            XFlyve Logistics — Full-Stack Engineer
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Oct 2024 — Aug 2025 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Developed a logistics workflow platform using React, Node.js,
            Express, and MongoDB to replace spreadsheet, phone, and
            WhatsApp-based operations. Built driver and admin workflows for job
            tracking, POD uploads, work diaries, authentication, role-based
            access, and cloud deployment. The platform reduced manual
            operational workload by{" "}
            <span className="text-purple-400 font-semibold">~70%</span>.
          </p>
        </motion.div>

        {/* A-Star Infotech */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            A-Star Infotech — Web Developer
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Jan 2022 — Oct 2023 • Regional India
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Developed and maintained responsive client websites using HTML, CSS,
            JavaScript, PHP, and MySQL. Integrated frontend interfaces with
            backend services and relational databases, resolved production
            issues, implemented new functionality, and worked with clients to
            translate business requirements into practical web solutions.
          </p>
        </motion.div>

        {/* GS Global */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            GS Global — Database Administrator
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Nov 2019 — Dec 2021 • Regional India
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Administered MySQL databases by managing user accounts, permissions,
            backups, recovery procedures, and routine maintenance activities.
            Monitored database performance, supported secure data management
            practices, documented procedures, and assisted users with database
            related support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}