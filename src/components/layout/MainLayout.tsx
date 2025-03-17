"use client";

import { cn } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

type MainLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export function MainLayout({ className, children }: MainLayoutProps) {
  return (
    <div className={cn("main-layout min-h-screen bg-black text-white", className)}>
      <Navbar />
      <Sidebar />
      <main className="content pt-16">
        {children}
      </main>
    </div>
  );
}
