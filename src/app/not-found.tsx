import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-padding flex flex-1 items-center"
    >
      <Container className="text-center">
        <p className="text-primary text-sm font-semibold">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href={ROUTES.home}>Go back home</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
