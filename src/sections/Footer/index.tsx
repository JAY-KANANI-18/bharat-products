import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterQuick } from "@/sections/Footer/components/FooterQuick";
import { FooterRight } from "@/sections/Footer/components/FooterRight";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <section className="relative text-white text-sm bg-black">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Logo + Contact */}
          <div>
            <FooterLogo />
          </div>

          {/* Center: Quick Links */}
          <div>
            <FooterQuick />
          </div>

          {/* Right: Newsletter + Socials */}
          <div>
            <FooterRight />
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <FooterCopyright />
        </div>
      </div>
    </section>
  );
};
