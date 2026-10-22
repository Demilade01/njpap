import Link from "next/link"
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { navLinks, site } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/15 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-sm text-sm text-white/70">
            A peer-reviewed journal hosted by the {site.host.department},{" "}
            {site.host.university}. Published {site.frequency.toLowerCase()}.
          </p>
          <p className="font-heading text-sm italic text-white/85">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            Quick links
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            Editorial office
          </h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {site.contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white hover:underline">
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white hover:underline">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <GlobeIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{site.contact.website}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6">
          <span>
            &copy; {site.name} ({site.shortName}). All rights reserved.
          </span>
          <span>
            {site.host.department}, FUTA
          </span>
        </div>
      </div>
    </footer>
  )
}
