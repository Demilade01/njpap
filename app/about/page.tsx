import type { Metadata } from "next"
import {
  BookOpenIcon,
  CalendarDaysIcon,
  FlaskConicalIcon,
  ShieldCheckIcon,
  TargetIcon,
} from "lucide-react"

import { CtaBanner } from "@/components/journal-blocks"
import { Container, PageHeader, SectionHeading } from "@/components/page-header"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "About the Journal",
  description: site.about,
}

const facts = [
  { icon: ShieldCheckIcon, label: "Review", value: "Peer-reviewed" },
  { icon: CalendarDaysIcon, label: "Frequency", value: site.frequency },
  { icon: FlaskConicalIcon, label: "Discipline", value: "Pure & Applied Physics" },
  { icon: BookOpenIcon, label: "Publisher", value: site.host.short },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NJPAP"
        title="About the Journal"
        description={`Hosted by the ${site.host.department}, ${site.host.university}.`}
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-12">
          <section>
            <SectionHeading icon={BookOpenIcon} title="Who we are" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {site.about}
            </p>
          </section>
          <section>
            <SectionHeading icon={TargetIcon} title="Aims & Scope" />
            <p className="leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The journal welcomes the following types of contribution:
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {site.articleTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 text-sm font-medium"
                >
                  <span className="size-2 rounded-full bg-primary" aria-hidden />
                  {type}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border bg-brand-soft p-6">
          <h2 className="mb-5 text-xl font-bold text-navy uppercase">
            Journal at a glance
          </h2>
          <dl className="space-y-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white text-primary ring-1 ring-navy/10">
                  <Icon className="size-5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {label}
                  </dt>
                  <dd className="font-medium text-navy">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-6 border-t pt-5 text-sm text-muted-foreground">
            <span className="font-semibold text-navy">Editor-in-Chief:</span>{" "}
            {site.contact.editorInChief}
          </div>
        </aside>
      </Container>

      <CtaBanner />
    </>
  )
}
