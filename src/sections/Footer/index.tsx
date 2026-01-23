import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterQuick } from "@/sections/Footer/components/FooterQuick";
import { FooterRight } from "@/sections/Footer/components/FooterRight";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <section className="relative text-white text-sm bg-black">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <FooterLogo />

          {/* Center */}
          <FooterQuick />

          {/* Right */}
          <FooterRight />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <FooterCopyright />

          <p className="text-white/50 text-xs">
            Powered by{" "}
            <a
              href="https://axorainfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              Axora Infotech
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
