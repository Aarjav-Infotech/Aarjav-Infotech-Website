import type { ReactNode } from "react";

import { LenisProvider } from "@/components/common/lenis-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface SiteLayoutProps {
  children: ReactNode;
}

/**
 * Root site layout wrapping all pages with navigation and footer.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <LenisProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </LenisProvider>
  );
}
