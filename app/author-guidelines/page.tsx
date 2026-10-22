import type { Metadata } from "next"
import { ClockIcon, DownloadIcon, FileTextIcon, MailIcon } from "lucide-react"

import { CtaBanner } from "@/components/journal-blocks"
import { Container, PageHeader, SectionHeading } from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Author Guidelines",
  description:
    "Author guidelines and manuscript template for the Nigeria Journal of Pure and Applied Physics (NJPAP).",
}

const files = [
  {
    title: "Author Guidelines",
    text: "Formatting, referencing style, figures, and ethical requirements for manuscripts.",
    href: site.downloads.guidelines,
  },
  {
    title: "Manuscript Template",
    text: "The official NJPAP template your manuscript should be prepared in.",
    href: site.downloads.template,
  },
]

export default function AuthorGuidelinesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For authors"
        title="Author Guidelines"
        description="Authors are required to adhere to the journal's Author Guidelines and Template when preparing manuscripts."
      />

      <Container className="py-16">
        <SectionHeading icon={FileTextIcon} title="Downloads" />
        <div className="grid gap-5 md:grid-cols-2">
          {files.map((file) => (
            <div
              key={file.title}
              className="flex flex-col rounded-2xl border bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <FileTextIcon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy uppercase">
                    {file.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {file.text}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                {file.href ? (
                  <a
                    href={file.href}
                    download
                    className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
                  >
                    <DownloadIcon data-icon="inline-start" />
                    Download
                  </a>
                ) : (
                  <span
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "pointer-events-none h-10 px-4 opacity-80"
                    )}
                    aria-disabled
                  >
                    <ClockIcon data-icon="inline-start" />
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-brand-soft p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-navy uppercase">
              Detailed guidelines coming soon
            </h2>
            <p className="text-sm text-muted-foreground">
              Until the documents are published here, request the guidelines and
              template from the editorial office.
            </p>
          </div>
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Request for NJPAP Author Guidelines and Template")}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-10 shrink-0 px-4"
            )}
          >
            <MailIcon data-icon="inline-start" />
            Request by email
          </a>
        </div>
      </Container>

      <CtaBanner />
    </>
  )
}
