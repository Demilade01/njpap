import type { Metadata } from "next"
import { UserRoundIcon, UsersIcon } from "lucide-react"

import { Container, PageHeader, SectionHeading } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Editorial Board",
  description:
    "Editorial board of the Nigeria Journal of Pure and Applied Physics (NJPAP).",
}

export default function EditorialBoardPage() {
  const [chief, ...members] = site.editorialBoard

  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Editorial Board"
        description="The editors and board members who guide the journal's peer-review process."
      />

      <Container className="py-16">
        <div className="mb-12 flex flex-col items-start gap-6 rounded-2xl border bg-brand-soft p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-20 shrink-0 place-items-center rounded-full bg-navy text-navy-foreground">
            <UserRoundIcon className="size-10" />
          </span>
          <div>
            <Badge className="mb-2 h-6 px-2.5">{chief.role}</Badge>
            <h2 className="text-3xl font-bold text-navy">{chief.name}</h2>
            <p className="mt-1 text-muted-foreground">{chief.affiliation}</p>
          </div>
        </div>

        <SectionHeading icon={UsersIcon} title="Editors & Board Members" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <li
              key={`${member.role}-${i}`}
              className={cn(
                "flex items-center gap-4 rounded-2xl border bg-card p-5",
                member.placeholder && "border-dashed"
              )}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <UserRoundIcon className="size-6" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {member.role}
                </p>
                <p
                  className={cn(
                    "font-medium",
                    member.placeholder ? "text-muted-foreground italic" : "text-navy"
                  )}
                >
                  {member.name}
                </p>
                {member.affiliation && (
                  <p className="text-sm text-muted-foreground">
                    {member.affiliation}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          The full editorial board will be announced soon.
        </p>
      </Container>
    </>
  )
}
