"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToogler/ThemeToggle";
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, signout } = use(AuthContext);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const renderLinks = (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="block px-4 py-2 hover:text-(--secondary-color) transition-colors"
          onClick={() => setOpen(false)}
        >
          {link.name}
        </Link>
      ))}
      {user ? (
        <button
          onClick={signout}
          className="block px-4 py-2 font-medium text-(--neutral-color) bg-(--secondary-color) rounded-lg hover:opacity-90 transition cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="block px-4 py-2 font-medium text-(--neutral-color) bg-(--primary-color) rounded-lg hover:opacity-90 transition cursor-pointer"
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <nav className="w-full bg-(--neutral-color) text-(--primary-color) shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          MyApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {renderLinks}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-(--primary-color)"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-start px-4 pb-3 space-y-2 bg-(--neutral-color) border-t border-(--primary-color)">
          {renderLinks}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
