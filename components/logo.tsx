import Image from "next/image"
import Link from "next/link"

import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.shortName} home`}
    >
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg p-1 ring-1 transition-transform group-hover:scale-105",
          inverted
            ? "bg-white ring-white/20"
            : "bg-brand-soft ring-navy/15"
        )}
      >
        <Image
          src="/icon.png"
          alt={`${site.shortName} logo`}
          width={64}
          height={108}
          className="h-9 w-auto object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-wide",
            inverted ? "text-white" : "text-navy"
          )}
        >
          {site.shortName}
        </span>
        <span
          className={cn(
            "hidden text-[0.7rem] sm:block",
            inverted ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Pure &amp; Applied Physics
        </span>
      </span>
    </Link>
  )
}
