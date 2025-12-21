"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const pathname = usePathname();

  // Split to interleave Policy between Quality and Infrastructure
  const firstNav = navItems.slice(0, 4);
  const lastNav = navItems.slice(4);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY || window.pageYOffset;
    const prev = {
      bodyOverflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
      bodyTouch: body.style.touchAction,
      htmlTouch: html.style.touchAction,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };

    // Freeze background
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    body.style.touchAction = "none";
    html.style.touchAction = "none";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      // Restore
      body.style.overflow = prev.bodyOverflow;
      html.style.overflow = prev.htmlOverflow;
      body.style.touchAction = prev.bodyTouch;
      html.style.touchAction = prev.htmlTouch;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

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
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] touch-none overscroll-none"
          onClick={closeMenu}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 h-screen w-[90vw] max-w-sm bg-white shadow-2xl z-[10000] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col overflow-hidden overscroll-contain`}
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

        {/* Menu Items (scrollable only here) */}
        <nav
          className="p-4 flex-1 overflow-y-auto overscroll-y-contain pb-28"
          style={{ WebkitOverflowScrolling: "touch" }}
          onWheelCapture={(e) => e.stopPropagation()}
          onTouchMoveCapture={(e) => e.stopPropagation()}
        >
          <ul className="space-y-2">
            {firstNav.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                  className={`transform transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
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

          {/* Policies collapsible */}
          <div className="mt-4">
            <button
              onClick={() => setPoliciesOpen((v) => !v)}
              aria-expanded={policiesOpen}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span>Policy</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  policiesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {policiesOpen && (
              <ul className="mt-2 space-y-1 pl-2">
                {[
                  { href: "/policy/labour-employment", label: "Labour & Employment" },
                  { href: "/policy/harassment", label: "Harassment" },
                  { href: "/policy/visitor-policy", label: "Visitor Policy" },
                  { href: "/policy/quality", label: "Quality" },
                ].map((p, i) => (
                  <li
                    key={p.href}
                    style={{ transitionDelay: `${i * 40}ms` }}
                    className={`transform transition-all duration-300 ${
                      policiesOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <Link
                      href={p.href}
                      onClick={closeMenu}
                      className={`block px-4 py-2 rounded-md text-sm ${
                        pathname === p.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/80 hover:bg-gray-100"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Remaining items after Policy */}
          <ul className="space-y-2 mt-2">
            {lastNav.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: `${(firstNav.length + idx) * 40}ms` }}
                  className={`transform transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
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

          {/* Downloads collapsible removed; use 'Brochure' link from navItems */}
        </nav>

        {/* Menu Footer */}
        <div className=" p-6 border-t border-gray-200 bg-gradient-to-t from-primary/5 to-transparent">
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
