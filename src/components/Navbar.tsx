"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHome = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center z-50 backdrop-blur-xl border-b transition-all duration-300
      ${
        scrolled
          ? "bg-bg/80 border-border shadow-lg shadow-black/20"
          : "bg-bg/40 border-border/40"
      }`}
    >
      {/* Logo */}
      <button
        onClick={scrollToHome}
        className="text-lg font-semibold tracking-tight text-fg cursor-pointer hover:text-accent transition"
      >
        Kapil Yadav
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-fg-secondary items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-accent active:text-accent-hover transition"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-fg font-semibold shadow-sm shadow-black/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          Contact
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 ml-2 pl-4 border-l border-border">
          <a href="https://github.com/yadavkapil-dev" target="_blank">
            <svg className="w-5 h-5 fill-fg-muted hover:fill-fg transition" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.4-3.87-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.7 10.7 0 0 1 12 6.8c.97.01 1.94.13 2.85.38 2.2-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.16 1.82 1.16 3.07 0 4.41-2.7 5.36-5.27 5.65.43.37.81 1.1.81 2.23v3.31c0 .32.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a href="https://linkedin.com/in/yadav-kapil" target="_blank">
            <svg className="w-5 h-5 fill-fg-muted hover:fill-fg transition" viewBox="0 0 24 24">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9.75h4v11H3v-11zm7 0h3.6v1.7h.05c.5-.9 1.7-1.85 3.5-1.85 3.7 0 4.4 2.45 4.4 5.65v5.5h-4V15c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v5.9h-4v-11z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-xl text-fg-secondary hover:text-fg transition"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-0 right-0 w-64 h-screen bg-bg/95 backdrop-blur-xl border-l border-border px-8 py-10 flex flex-col gap-6 text-lg font-medium md:hidden">
          <button className="self-end text-2xl text-fg-secondary hover:text-fg transition" onClick={() => setOpen(false)}>✖</button>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-fg-secondary hover:text-accent transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-fg text-base font-semibold transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
