"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-10 md:mb-14 max-w-2xl ${alignment}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm md:text-base text-fg-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
