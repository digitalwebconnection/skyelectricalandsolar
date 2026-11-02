import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop, WhatsAppButton } from "../common";

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-orange-500/20 selection:text-orange-600 antialiased">
      <ScrollToTop />
      <Header />
      <main className="flex-1 relative flex flex-col bg-white">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Layout;
