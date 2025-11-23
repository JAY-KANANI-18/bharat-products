"use client";
import { useScrollDirection } from "@/sections/TopBar/hooks/useScrollDirection";
import { MobileMenu } from "@/sections/TopBar/components/MobileMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const TopBar = () => {
  const pathname = usePathname();
  const isNavVisible = useScrollDirection();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/safety", label: "Safety" },
    { href: "/team", label: "Team" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
    { href: "/brochure", label: "Brochure" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9998] bg-white shadow-md transition-transform duration-300 ease-out ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/Bg White Main Logo.png"
                alt="Bharat Product"
                width={100}
                height={50}
                className="h-10 md:h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:414-214-0362"
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

