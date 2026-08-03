import type { ReactNode } from "react";

// import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface SiteLayoutProps {
  children: ReactNode;
}

/**
 * Root site layout wrapping all pages with navigation and footer.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
