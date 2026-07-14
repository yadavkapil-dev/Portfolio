"use client";

import Image from "next/image";

function hostnameOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export default function BrowserFrame({
  src,
  alt,
  url,
}: {
  src?: string;
  alt: string;
  url?: string;
}) {
  const label = hostnameOf(url);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-elevated shadow-lg shadow-black/30">
      {/* Fake browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />

        {label && (
          <span className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-bg px-3 py-1 text-[10px] text-fg-muted md:text-xs">
            <svg
              viewBox="0 0 24 24"
              className="h-2.5 w-2.5 shrink-0 fill-fg-muted"
            >
              <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V6a3 3 0 0 1 3-3Z" />
            </svg>
            {label}
          </span>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full bg-surface">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs text-fg-muted md:text-sm">
              Coming Soon...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
