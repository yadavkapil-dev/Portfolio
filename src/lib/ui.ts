// Shared design tokens for consistent spacing, typography, and buttons
// across sections. Centralised so the dark-mode theme stays coherent.

export const sectionPadding = "px-6 md:px-10 lg:px-16 py-20 md:py-28";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-fg shadow-sm shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover md:text-base";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-fg-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-elevated hover:text-fg md:text-base";

export const btnGhost =
  "inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover";

export const cardSurface =
  "rounded-2xl border border-border bg-surface shadow-lg shadow-black/20";
