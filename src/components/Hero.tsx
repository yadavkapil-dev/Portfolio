"use client";

import { useState } from "react";
import { btnPrimary, btnSecondary } from "../lib/ui";

export default function Hero() {
  const [showToast, setShowToast] = useState(false);

  const resumePath = "/projects/Resume_Kapil_Yadav_Fullstack_Engineer.pdf";

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Resume_Kapil_Yadav_FullStack_Engineer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      if (!document.hidden) {
        window.open(resumePath, "_blank");
      }
    }, 500);
  };

  return (
    <div
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-bg"
    >
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
          Opening resume...
        </div>
      )}

      <div className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <span
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs md:text-sm text-fg-secondary opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>
        Australia • Open to Full-Time Roles
      </span>

      <h1
        className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-fg cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:text-accent opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
        style={{ animationDelay: "0.15s" }}
      >
        Kapil Yadav
      </h1>

      <p
        className="mt-4 text-lg md:text-2xl text-accent font-medium opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
        style={{ animationDelay: "0.3s" }}
      >
        Full-Stack Software Engineer
      </p>

      <p
        className="mt-3 max-w-xl text-sm md:text-base text-fg-muted italic opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
        style={{ animationDelay: "0.4s" }}
      >
        Full Work Rights in Australia
      </p>

      <div
        className="mt-9 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
        style={{ animationDelay: "0.5s" }}
      >
        <button
          onClick={() => scrollTo("#projects")}
          className={`${btnPrimary} w-full sm:w-48 cursor-pointer`}
        >
          View My Work
        </button>

        <a
          href="/projects/Kapil_Yadav_Fullstack_Engineer.pdf"
          onClick={handleDownload}
          className={`${btnSecondary} w-full sm:w-48 cursor-pointer`}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
