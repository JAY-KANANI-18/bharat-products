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
            <div className="px-5 mt-4 space-y-3 text-white/80">
              {/* <div>Bharat Products</div> */}
              <div>
                G-3533, GIDC,
                <br />
                Phase-3, Dared,
                <br />
                Jamnagar, Gujarat - 361006
              </div>
              <div>
                <a
                  className="hover:text-white"
                  href="mailto:info@bharatproducts.com"
                >
                  info@bharatprod.com
                </a>
              </div>
              <div>
                Phone:{" "}
                <a className="hover:text-white" href="tel:+919876543210">
                  +91 8460524463
                </a>
              </div>
            </div>
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
