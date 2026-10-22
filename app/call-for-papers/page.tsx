import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  FileTextIcon,
  PenToolIcon,
  SendIcon,
} from "lucide-react"

import { SubmitPanel } from "@/components/journal-blocks"
import { Container, PageHeader, SectionHeading } from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Call for Papers",
  description:
    "Submit your original, unpublished physics research to the Nigeria Journal of Pure and Applied Physics (NJPAP).",
}

const steps = [
  {
    icon: FileTextIcon,
    title: "Read the guidelines",
    text: "Review the Author Guidelines to make sure your manuscript meets the journal's requirements.",
    href: "/author-guidelines",
    cta: "Author Guidelines",
  },
  {
    icon: PenToolIcon,
    title: "Prepare your manuscript",
    text: "Format your paper using the official NJPAP manuscript template.",
    href: "/author-guidelines",
    cta: "Get the template",
  },
  {
    icon: SendIcon,
    title: "Submit online",
    text: "Upload your manuscript through the journal's online submission form.",
    href: site.submissionUrl,
    cta: "Open submission form",
    external: true,
  },
]

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Now accepting submissions"
        title="Call for Papers"
        description={site.description}
      />

      <Container className="py-16">
        <SectionHeading icon={PenToolIcon} title="Call for Manuscripts" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Authors are invited to submit original, unpublished manuscripts that
          contribute significantly to the field of physics. Authors are required
          to adhere to the journal&apos;s Author Guidelines and Template
          available on this website.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-2xl border bg-card p-6"
            >
              <span className="absolute top-5 right-5 font-heading text-4xl font-bold text-primary/15">
                0{i + 1}
              </span>
              <span className="mb-4 grid size-11 place-items-center rounded-lg bg-secondary text-primary">
                <step.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold text-navy uppercase">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {step.text}
              </p>
              {step.external ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "mt-3 w-fit px-0")}
                >
                  {step.cta}
                  <ArrowRightIcon data-icon="inline-end" />
                </a>
              ) : (
                <Link
                  href={step.href}
                  className={cn(buttonVariants({ variant: "link" }), "mt-3 w-fit px-0")}
                >
                  {step.cta}
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              )}
            </li>
          ))}
        </ol>

        <SubmitPanel className="mt-12" />

        <p className="mt-6 text-sm text-muted-foreground">
          A publication fee of {site.fees.nigerian.amount} (Nigerian authors) or{" "}
          {site.fees.international.amount} (international authors) applies{" "}
          <strong className="text-foreground">only after acceptance</strong>.{" "}
          <Link href="/publication-fees" className="text-primary underline-offset-4 hover:underline">
            See publication fees
          </Link>
          .
        </p>
      </Container>
    </>
  )
}
