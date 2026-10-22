import { cn } from "@/lib/utils"

/** Title band shown at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b bg-brand-soft">
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold text-navy uppercase sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

/** Heading with the flyer's blue underline accent. */
export function SectionHeading({
  icon: Icon,
  title,
  className,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  className?: string
}) {
  return (
    <div className={cn("mb-6 flex items-center gap-3", className)}>
      {Icon && (
        <span className="grid size-10 shrink-0 place-items-center rounded-lg border-2 border-navy/80 text-navy">
          <Icon className="size-5" />
        </span>
      )}
      <h2 className="min-w-0 flex-1 border-b-2 border-navy/80 pb-1 text-xl font-bold text-navy uppercase sm:text-2xl">
        {title}
      </h2>
    </div>
  )
}

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}
      {...props}
    />
  )
}
