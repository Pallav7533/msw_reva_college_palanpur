import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      {/* pt-24 to account for fixed navbar */}
      <main className="flex-grow flex flex-col pt-[72px] md:pt-[104px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}