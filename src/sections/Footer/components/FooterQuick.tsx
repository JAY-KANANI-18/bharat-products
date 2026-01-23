import Link from "next/link";

export const FooterQuick = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/policy", label: "Policy" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/brochure", label: "Brochure" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="px-5">
      <h4 className="text-2xl font-semibold mb-6 text-white">Quick Links</h4>

      <ul className="space-y-3">
        {quickLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                text-white/70
                hover:text-white
                transition-all
                duration-200
                inline-block
                hover:translate-x-1
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
