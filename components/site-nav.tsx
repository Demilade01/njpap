"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, SendIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, site } from "@/content/site"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(pathname, link.href) ? "page" : undefined}
          className={cn(
            "rounded-md px-2.5 py-2 text-sm font-medium whitespace-nowrap text-foreground/75 transition-colors hover:bg-secondary hover:text-navy",
            isActive(pathname, link.href) && "bg-secondary text-navy"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-lg" }),
          "lg:hidden"
        )}
        aria-label="Open menu"
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg text-navy">
            {site.shortName}
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              nativeButton={false}
              render={
                <Link
                  href={link.href}
                  aria-current={
                    isActive(pathname, link.href) ? "page" : undefined
                  }
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary hover:text-navy",
                    isActive(pathname, link.href) && "bg-secondary text-navy"
                  )}
                />
              }
            >
              {link.label}
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <a
            href={site.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-11 w-full text-base")}
          >
            <SendIcon data-icon="inline-start" />
            Submit Manuscript
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
