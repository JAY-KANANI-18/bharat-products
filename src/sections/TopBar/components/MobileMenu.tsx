"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-12 h-12 flex items-center justify-center text-primary hover:bg-primary/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl z-[10000] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-foreground">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gradient-to-t from-primary/5 to-transparent">
          <a
            href="tel:414-214-0362"
            className="block w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
