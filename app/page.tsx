import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ClipboardListIcon,
  PenToolIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react"

import {
  CtaBanner,
  FeeCards,
  ResearchAreaGrid,
  SubmitButton,
  SubmitPanel,
} from "@/components/journal-blocks"
import { Container, SectionHeading } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: ShieldCheckIcon,
    title: "Peer-reviewed",
    text: "Every manuscript is evaluated by experts in the field.",
  },
  {
    icon: CalendarDaysIcon,
    title: `Published ${site.frequency}`,
    text: "Regular issues keep new findings moving quickly.",
  },
  {
    icon: UsersIcon,
    title: "Open to all",
    text: "Welcoming Nigerian and international authors.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative grid items-center gap-10 py-14 md:grid-cols-[1.25fr_1fr] md:py-20">
          <div>
            <Badge variant="secondary" className="mb-5 h-7 px-3 text-xs text-navy">
              Hosted by {site.host.short}
            </Badge>
            <h1 className="text-4xl leading-[1.05] font-bold text-navy uppercase sm:text-5xl lg:text-7xl">
              Nigeria Journal of{" "}
              <span className="text-primary">Pure and Applied Physics</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SubmitButton />
              <Link
                href="/call-for-papers"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-5 text-base"
                )}
              >
                Call for Papers
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <Image
              src="/hero.png"
              alt="Robotic hands holding up the globe, surrounded by physics equations"
              width={528}
              height={720}
              loading="eager"
              fetchPriority="high"
              className="relative h-auto w-full mix-blend-multiply"
            />
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="border-b bg-brand-soft">
        <Container className="grid gap-6 py-10 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-primary shadow-sm ring-1 ring-navy/10">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-navy uppercase">
                  {title}
                </h2>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* About + Call for manuscripts */}
      <section>
        <Container className="grid gap-12 py-16 md:grid-cols-2">
          <div>
            <SectionHeading icon={BookOpenIcon} title="About the Journal" />
            <p className="leading-relaxed text-muted-foreground">{site.about}</p>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "link" }), "mt-3 px-0")}
            >
              Learn more about NJPAP
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </div>
          <div>
            <SectionHeading icon={PenToolIcon} title="Call for Manuscripts" />
            <p className="leading-relaxed text-muted-foreground">
              Authors are invited to submit original, unpublished manuscripts
              that contribute significantly to the field of physics. Authors are
              required to adhere to the journal&apos;s Author Guidelines and
              Template.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.articleTypes.map((type) => (
                <li key={type}>
                  <Badge variant="outline" className="h-7 px-3 text-xs">
                    {type}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="border-y bg-muted/40">
        <Container className="py-16">
          <SectionHeading icon={ClipboardListIcon} title="Research Areas Covered" />
          <p className="mb-8 max-w-3xl text-muted-foreground">
            The journal welcomes original research papers, review articles,
            short communications and technical notes in, but not limited to,
            the following areas:
          </p>
          <ResearchAreaGrid limit={9} />
          <Link
            href="/research-areas"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-8 h-11 px-5 text-base"
            )}
          >
            View all {site.researchAreas.length} research areas
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Container>
      </section>

      {/* Submit + Fees */}
      <section>
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr]">
          <SubmitPanel />
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy uppercase">
              Publication Fee
            </h2>
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
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
