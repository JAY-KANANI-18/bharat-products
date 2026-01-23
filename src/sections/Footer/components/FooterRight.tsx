"use client";

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const FooterRight = () => {
  return (
    <div className="px-5">
      <h4 className="text-2xl font-semibold mb-6 text-white">Contact Us</h4>

      <div className="space-y-6 text-white/70">
        {/* Address */}
        <div className="flex gap-4 items-start">
          <MapPin className="w-5 h-5 text-white/60 mt-1" />
          <div>
            <p className="text-white font-medium mb-1">Office Address</p>
            <p className="leading-relaxed">
              G-3533, GIDC,
              <br />
              Phase-3, Dared,
              <br />
              Jamnagar, Gujarat – 361006
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4 items-start">
          <Mail className="w-5 h-5 text-white/60 mt-1" />
          <div>
            <p className="text-white font-medium mb-1">Email Us</p>
            <a
              href="mailto:info@bharatprod.com"
              className="hover:text-white transition"
            >
              info@bharatprod.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4 items-start">
          <Phone className="w-5 h-5 text-white/60 mt-1" />
          <div>
            <p className="text-white font-medium mb-1">Call Us</p>
            <a href="tel:+918460524463" className="hover:text-white transition">
              +91 84605 24463
            </a>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-8">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#c89b3c] flex items-center justify-center transition"
          >
            <Icon className="w-5 h-5 text-white" />
          </a>
        ))}
      </div>
    </div>
  );
};
