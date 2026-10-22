import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Container } from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="font-heading text-7xl font-bold text-primary/20">404</p>
      <h1 className="mt-4 text-3xl font-bold text-navy uppercase">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-5 text-base")}
      >
        <ArrowLeftIcon data-icon="inline-start" />
        Back to home
      </Link>
    </Container>
  )
}
