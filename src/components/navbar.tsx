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
import { useRouter } from "next/navigation";

export default function Navbare() {
  const router = useRouter();

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

            <NavbarButton href="/profile" variant="secondary">
              Profile
            </NavbarButton>

            <Link href="/contact">
              <NavbarButton variant="secondary">Contact</NavbarButton>
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
                  Beranda
                </NavbarButton>
              
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Tentang Saya
                </NavbarButton>

              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/profile");
                }}
                variant="primary"
                className="w-full"
              >
                Profile
              </NavbarButton>

             
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Contact
                </NavbarButton>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
