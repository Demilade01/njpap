import type { Metadata } from "next"
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon, UserRoundIcon } from "lucide-react"

import { Container, PageHeader } from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact the NJPAP editorial office at ${site.contact.email}.`,
}

export default function ContactPage() {
  const items = [
    {
      icon: UserRoundIcon,
      label: "Editor-in-Chief",
      value: site.contact.editorInChief,
    },
    {
      icon: MailIcon,
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: site.contact.phone,
      href: `tel:${site.contact.phoneHref}`,
    },
    {
      icon: GlobeIcon,
      label: "Website",
      value: site.contact.website,
    },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Editorial Office"
        description="For enquiries about submissions, reviews, or publication, contact the editorial office."
      />

      <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl bg-navy p-8 text-navy-foreground">
          <MapPinIcon className="mb-4 size-8 text-white/70" aria-hidden />
          <h2 className="mb-3 text-2xl font-bold uppercase">Address</h2>
          <address className="space-y-1 not-italic text-white/85">
            {site.contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={`mailto:${site.contact.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-11 bg-white px-5 text-base text-navy hover:bg-white/90"
            )}
          >
            <MailIcon data-icon="inline-start" />
            Email the editorial office
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="rounded-2xl border bg-card p-6">
              <span className="mb-4 grid size-11 place-items-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 block font-medium break-all text-navy hover:text-primary hover:underline"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 font-medium text-navy">{value}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
