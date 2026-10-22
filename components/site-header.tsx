import { Suspense } from "react"
import { SendIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { DesktopNav, MobileNav } from "@/components/site-nav"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="hidden bg-navy text-navy-foreground sm:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6">
          <span className="truncate">Hosted by {site.host.department}, {site.host.university}</span>
          <a href={`mailto:${site.contact.email}`} className="shrink-0 hover:underline">
            {site.contact.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <Suspense fallback={null}>
          <DesktopNav />
        </Suspense>
        <div className="flex items-center gap-2">
          <a
            href={site.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 px-4 sm:inline-flex"
            )}
          >
            <SendIcon data-icon="inline-start" />
            Submit
          </a>
          <Suspense fallback={null}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
