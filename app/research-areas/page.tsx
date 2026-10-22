import type { Metadata } from "next"

import { CtaBanner, ResearchAreaGrid } from "@/components/journal-blocks"
import { Container, PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "Research Areas",
  description:
    "Research areas covered by the Nigeria Journal of Pure and Applied Physics, from quantum physics to geophysics and medical physics.",
}

export default function ResearchAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aims & Scope"
        title="Research Areas Covered"
        description="The journal welcomes original research papers, review articles, short communications and technical notes in, but not limited to, the following areas."
      />

      <Container className="py-16">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-muted-foreground">
            Accepted article types:
          </span>
          {site.articleTypes.map((type) => (
            <Badge key={type} variant="secondary" className="h-7 px-3 text-xs text-navy">
              {type}
            </Badge>
          ))}
        </div>

        <ResearchAreaGrid />

        <p className="mt-10 max-w-3xl rounded-xl border-l-4 border-primary bg-brand-soft p-5 text-muted-foreground">
          Not sure your topic fits? The journal is open to a broad range of
          topics whose central theme falls within the bounds of physics. Contact
          the editorial office at{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {site.contact.email}
          </a>
          .
        </p>
      </Container>

      <CtaBanner />
    </>
  )
}
