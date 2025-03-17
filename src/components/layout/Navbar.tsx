"use client";

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle sidebar visibility
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('open');
  };

  return (
    <nav className={cn("navbar fixed top-0 left-0 right-0 flex items-center py-4 px-6 z-50 bg-black/80 text-white", className)}>
      <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
        <Link href="/" className="mr-8">
          <h1 className="text-2xl font-bold text-red-600">APOORV ABHISHEK</h1>
        </Link>
        <ul className="navbar-links flex space-x-6"> {/* Always use flex */}
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block px-4 py-2 rounded-md hover:bg-gray-700 hover:text-red-600 transition-colors text-white"> {/* Removed bg-gray-800 */}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div
          className="hamburger md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

//Define links outside to avoid redundancy in the JSX
const navbarLinks = [
  { href: "/browse", text: "Home" },
  { href: "/work-experience", text: "Professional" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/contact-me", text: "Hire Me" },
]