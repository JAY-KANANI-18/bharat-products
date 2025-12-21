import Link from "next/link";

export const FooterQuick = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/policy", label: "Policy" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/brochure", label: "Brochure" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="px-5">
      <h4 className="text-xl font-bold font-red_hat_display mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {quickLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
