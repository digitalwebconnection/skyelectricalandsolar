import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-orange-500/20 selection:text-orange-600 antialiased">
      <Header />
      <main className="flex-1 relative flex flex-col bg-white">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
