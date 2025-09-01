import { useEffect } from "react";
import Footer from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF9] font-montserrat text-heading-2 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col overflow-hidden flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
