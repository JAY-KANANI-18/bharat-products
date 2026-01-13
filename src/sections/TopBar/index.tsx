"use client";

import { useScrollDirection } from "@/sections/TopBar/hooks/useScrollDirection";
import { MobileMenu } from "@/sections/TopBar/components/MobileMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  BadgeCheck,
  ChevronDown,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const TopBar = () => {
  const pathname = usePathname();
  const isNavVisible = useScrollDirection();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/brochure", label: "Brochure" },
    { href: "/contact", label: "Contact" },
  ];

  // Split so we can insert the Policy dropdown in the requested position
  const firstNav = navItems.slice(0, 4); // Home, About, Products, Quality
  const lastNav = navItems.slice(4); // Infrastructure, Brochure, Contact

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9998] bg-white shadow-md transition-transform duration-300 ease-out ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Max width container */}
      <div className="mx-auto  px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 xl:h-20 gap-3">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Final-Logo/SVG/Bharat-PRoduct-Final-Logo.svg"
                alt="Bharat Product"
                priority
                width={100}
                height={50}
                className="h-9 lg:h-10 xl:h-12 2xl:h-14 w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden md:flex flex-1 justify-center items-center
              space-x-1 lg:gap-2 xl:gap-8 2xl:gap-8
            "
          >
            {firstNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    nav-item
                    px-2 lg:px-2.5 xl:px-3
                    py-2
                    text-base lg:text-[15px] xl:text-lg
                    font-medium
                    transition-colors whitespace-nowrap
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* POLICY DROPDOWN */}
            <div className="relative group text-primary">
              <button
                className="
                  px-2 lg:px-2.5 xl:px-3
                  py-2
                  text-base lg:text-[15px] xl:text-lg
                  font-medium
                  text-foreground/70 hover:text-foreground
                  inline-flex items-center gap-1
                "
              >
                Policy
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className="
                  absolute left-0 top-full z-[10001]
                  pointer-events-none opacity-0 translate-y-2 scale-95
                  transition-all duration-200 ease-out
                  group-hover:pointer-events-auto
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:scale-100
                "
              >
                <div className="w-72 mt-2 rounded-xl border border-gray-200 bg-white shadow-lg p-2">
                  <Link
                    href="/policy/labour-employment"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 text-sm text-foreground/80"
                  >
                    <Scale className="w-4 h-4 text-primary" />
                    Labour & Employment
                  </Link>

                  <Link
                    href="/policy/harassment"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 text-sm text-foreground/80"
                  >
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    Harassment
                  </Link>

                  <Link
                    href="/policy/visitor-policy"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 text-sm text-foreground/80"
                  >
                    <FileText className="w-4 h-4 text-primary" />
                    Visitor Policy
                  </Link>

                  <Link
                    href="/policy/quality"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 text-sm text-foreground/80"
                  >
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    Quality
                  </Link>
                </div>
              </div>
            </div>

            {lastNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                                        nav-item

                    px-2 lg:px-2.5 xl:px-3
                    py-2
                    text-base lg:text-[15px] xl:text-lg
                    font-medium
                    transition-colors whitespace-nowrap
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:414-214-0362"
              className="
                inline-flex items-center gap-2
                px-3 lg:px-4 xl:px-5
                py-1.5 lg:py-2
                text-xs lg:text-sm
                bg-primary text-primary-foreground
                font-semibold rounded-full
                hover:opacity-90 transition-opacity
                whitespace-nowrap
              "
            >
              Call Us
            </a>
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
};
