import type { Metadata } from "next"
import { CircleCheckIcon } from "lucide-react"

import { CtaBanner, FeeCards } from "@/components/journal-blocks"
import { Container, PageHeader } from "@/components/page-header"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Publication Fees",
  description: `NJPAP publication fee: ${site.fees.nigerian.amount} for Nigerian authors and ${site.fees.international.amount} for international authors, per accepted manuscript.`,
}

const notes = [
  "The fee is charged per accepted manuscript — it applies only after your manuscript has been accepted.",
  "Fees are in Naira for Nigerian authors and in US Dollars for international authors.",
]

export default function PublicationFeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Publication Fee"
        description="A single publication fee is charged per accepted manuscript."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <FeeCards />
          <div className="mt-4 flex items-center justify-between rounded-xl border px-5 py-4">
            <span className="text-sm font-medium text-muted-foreground">
              Publication Frequency
            </span>
            <span className="font-heading text-lg font-semibold text-navy">
              {site.frequency}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border bg-brand-soft p-6">
          <h2 className="mb-4 text-xl font-bold text-navy uppercase">
            Good to know
          </h2>
          <ul className="space-y-3">
            {notes.map((note) => (
              <li key={note} className="flex gap-3 text-sm text-muted-foreground">
                <CircleCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t pt-4 text-sm text-muted-foreground">
            Questions about fees? Email{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {site.contact.email}
            </a>
          </p>
        </div>
      </Container>

      <CtaBanner />
    </>
  )
}
