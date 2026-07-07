"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-16 text-white text-center max-w-3xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed"
      >
        <p>
          I'm a Full-Stack Software Engineer based in Sydney who enjoys solving
          real business problems through practical software. I like turning
          manual, repetitive workflows into reliable applications that save
          people time and make everyday work easier.
        </p>

        <p>
          My primary stack includes{" "}
          <span className="text-purple-400 font-semibold">
            React, TypeScript, Next.js, Node.js, Express, MongoDB, and MySQL
          </span>
          . During my internship at Softlabs, I built custom WordPress plugins,
          backend workflow automation, and internal tools used to improve
          day-to-day business processes.
        </p>

        <p>
          My biggest project is{" "}
          <span className="text-purple-400 font-semibold">
            XFlyve Logistics
          </span>
          , a full-stack logistics platform built to replace spreadsheet,
          WhatsApp, and phone-based operations. The platform digitised job
          allocation, proof of delivery, work diaries, invoicing, and driver
          workflows, reducing manual administrative effort by approximately{" "}
          <span className="text-purple-400 font-semibold">70%</span>.
        </p>

        <p>
          Alongside XFlyve, I've built{" "}
          <span className="text-purple-400 font-semibold">TradeTrack</span>, a
          full-stack trading dashboard,{" "}
          <span className="text-purple-400 font-semibold">Meetify</span>, a
          real-time video meeting platform using WebRTC and Socket.IO, and{" "}
          <span className="text-purple-400 font-semibold">Wanderlust</span>, a
          full-stack accommodation booking platform. These projects have helped
          me strengthen my understanding of system design, REST APIs,
          authentication, databases, cloud deployment, and modern full-stack
          development.
        </p>

        <p>
          I enjoy learning new technologies, writing clean and maintainable
          code, collaborating in Agile teams, and continuously improving my
          engineering skills. Recently, I've also been exploring AI-assisted
          development workflows and building software with OpenAI APIs and
          modern AI tools.
        </p>

        <p>
          I'm currently looking for a{" "}
          <span className="text-purple-400 font-semibold">
            full-time Full-Stack Software Engineer
          </span>{" "}
          opportunity where I can contribute to meaningful products, learn from
          experienced engineers, and continue growing as a software developer.
        </p>
      </motion.div>
    </section>
  );
}