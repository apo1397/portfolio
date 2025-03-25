"use client";

import { cn } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import Footer from '../Footer';

type MainLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export function MainLayout({ className, children }: MainLayoutProps) {
  return (
    <div className={cn("flex flex-col bg-black text-white", className)}>
      <Navbar />
      <Sidebar />
      <main className="content flex-grow"> {/* Add flex-grow */}
        {children}
      </main>
      <Footer /> {/* Footer will stick to bottom */}
    </div>
  );
}
