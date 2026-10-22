import Image from "next/image"
import Link from "next/link"
import {
  ActivityIcon,
  ArrowRightIcon,
  AtomIcon,
  BinaryIcon,
  CpuIcon,
  DnaIcon,
  ExternalLinkIcon,
  GaugeIcon,
  GemIcon,
  HexagonIcon,
  LayersIcon,
  LeafIcon,
  MountainIcon,
  NetworkIcon,
  OrbitIcon,
  RadiationIcon,
  RadioTowerIcon,
  SendIcon,
  SigmaIcon,
  StethoscopeIcon,
  TelescopeIcon,
  ThermometerIcon,
  WavesIcon,
  ZapIcon,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

type Icon = React.ComponentType<{ className?: string }>

/** Icon per research area (falls back to Atom for anything new). */
const areaIcons: Record<string, Icon> = {
  "Quantum physics": AtomIcon,
  "Atomic and molecular physics": OrbitIcon,
  "Statistical physics, thermodynamics": ThermometerIcon,
  "Communication/Atmospheric physics": RadioTowerIcon,
  "Nonlinear dynamical systems and modelling": ActivityIcon,
  "Fluid dynamics": WavesIcon,
  "Information theory and computation": BinaryIcon,
  "Electronics, photonics, device physics": CpuIcon,
  Nanotechnology: HexagonIcon,
  "Nuclear physics": RadiationIcon,
  "Plasma physics": ZapIcon,
  "Astrophysics and cosmology": TelescopeIcon,
  Biophysics: DnaIcon,
  Geophysics: MountainIcon,
  "Material science and engineering": LayersIcon,
  Instrumentation: GaugeIcon,
  "Medical physics": StethoscopeIcon,
  "Environmental physics": LeafIcon,
  "Theoretical and mathematical physics": SigmaIcon,
  "Condensed Matter Physics": GemIcon,
  "Interdisciplinary studies in physics": NetworkIcon,
}

export function ResearchAreaGrid({ limit }: { limit?: number }) {
  const areas = limit ? site.researchAreas.slice(0, limit) : site.researchAreas
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => {
        const Icon = areaIcons[area] ?? AtomIcon
        return (
          <li
            key={area}
            className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-brand-soft"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-medium text-foreground">{area}</span>
          </li>
        )
      })}
    </ul>
  )
}

export function SubmitButton({
  className,
  label = "Submit Manuscript",
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={site.submissionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-11 px-5 text-base",
        className
      )}
    >
      <SendIcon data-icon="inline-start" />
      {label}
    </a>
  )
}

/** QR code + submit button panel, as on the flyer. */
export function SubmitPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 rounded-2xl border bg-brand-soft p-6 sm:flex-row sm:p-8",
        className
      )}
    >
      <div className="flex shrink-0 flex-col items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy/10">
        <Image
          src="/qr-submit.svg"
          alt="QR code linking to the NJPAP online submission form"
          width={160}
          height={160}
          className="size-40 p-2"
          unoptimized
        />
        <span className="w-full bg-navy py-1.5 text-center text-xs font-semibold tracking-wider text-navy-foreground uppercase">
          Scan to submit
        </span>
      </div>
      <div className="space-y-4 text-center sm:text-left">
        <h3 className="text-2xl font-bold text-navy uppercase">
          Submit your paper
        </h3>
        <p className="text-muted-foreground">
          Manuscripts should be submitted electronically through the
          journal&apos;s online submission form.
        </p>
        <SubmitButton />
        <p className="flex items-center justify-center gap-1.5 text-sm break-all text-primary sm:justify-start">
          <ExternalLinkIcon className="size-3.5 shrink-0" aria-hidden />
          {site.submissionUrl.replace("https://", "")}
        </p>
      </div>
    </div>
  )
}

export function FeeCards() {
  const fees = [site.fees.nigerian, site.fees.international]
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fees.map((fee) => (
        <div
          key={fee.label}
          className="relative overflow-hidden rounded-2xl border bg-card p-6"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden />
          <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            {fee.label}
          </p>
          <p className="mt-2 font-heading text-4xl font-bold text-navy">
            {fee.amount}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.fees.per}</p>
        </div>
      ))}
    </div>
  )
}

/** Full-width navy call-to-action banner. */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-white/60 uppercase">
            Call for papers
          </p>
          <h2 className="mt-2 text-3xl font-bold uppercase sm:text-4xl">
            Ready to share your research?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            Authors are invited to submit original, unpublished manuscripts that
            contribute significantly to the field of physics.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <SubmitButton className="bg-white text-navy hover:bg-white/90" />
          <Link
            href="/author-guidelines"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 border-white/30 bg-transparent px-5 text-base text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Author Guidelines
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  )
}
