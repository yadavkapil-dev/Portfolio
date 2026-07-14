"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-alt border-t border-border text-center py-8 text-fg-muted text-xs md:text-sm mt-12">
      © {new Date().getFullYear()}
      <span className="text-accent font-medium"> Kapil Yadav </span>
      — Portfolio
    </footer>
  );
}
