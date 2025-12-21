"use client";

import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const FooterRight = () => {
  const [email, setEmail] = useState("");

  const socials = [
    { href: "https://facebook.com/bharatproducts", label: "Facebook", Icon: Facebook },
    { href: "https://twitter.com/bharatproducts", label: "Twitter", Icon: Twitter },
    { href: "https://instagram.com/bharatproducts", label: "Instagram", Icon: Instagram },
    { href: "https://www.linkedin.com/company/bharatproducts", label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <div className="px-5">
      <h4 className="text-xl font-bold font-red_hat_display mb-4">Newsletter</h4>
      <p className="text-white/80 mb-4">Subscribe to receive updates and news from Bharat Products.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-full gap-2"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="flex-1 bg-white/10 text-white placeholder:text-white/60 rounded-md px-3 py-2 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
        >
          Subscribe
        </button>
      </form>

      <h5 className="text-lg font-semibold mt-8 mb-3">Follow us</h5>
      <div className="flex items-center gap-3">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <Icon className="w-5 h-5 text-white" />
          </a>
        ))}
      </div>
    </div>
  );
};
