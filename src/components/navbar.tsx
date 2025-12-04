"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export default function Navbare() {
  //   const navItems = [
  //     {
  //       name: "Features",
  //       link: "#features",
  //     },
  //     {
  //       name: "Pricing",
  //       link: "#pricing",
  //     },
  //     {
  //       name: "Contact",
  //       link: "#contact",
  //     },
  //   ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <div className="flex items-center gap-4">
            <Link href="/">
              <NavbarButton variant="secondary">Beranda</NavbarButton>
            </Link>

            <Link href="/about">
              <NavbarButton variant="secondary">Tentang Saya</NavbarButton>
            </Link>

            <Link href="/pricing">
              <NavbarButton variant="secondary">Pricing</NavbarButton>
            </Link>

            <Link href="/contact">
              <NavbarButton variant="secondary">Contact</NavbarButton>
            </Link>

            <Link href="/profile">
              <NavbarButton variant="secondary">Profile</NavbarButton>
            </Link>

            <Link href="/call">
              <NavbarButton variant="secondary">Book a call</NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
