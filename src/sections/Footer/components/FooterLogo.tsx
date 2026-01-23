import Image from "next/image";
import Link from "next/link";

export const FooterLogo = () => {
  return (
    <div className="px-5 space-y-6">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Final-Logo/SVG/BG-Secondry-Color.svg"
            alt="Bharat Products"
            width={200}
            height={60}
            priority
            className="h-9 lg:h-10 xl:h-12 w-auto"
          />
        </Link>
      </div>

      {/* Tagline */}
      {/* <p className="text-sm text-white/60">Precision Manufacturing</p> */}

      {/* Description ( style) */}
      <p className="text-white/70 leading-relaxed max-w-sm">
        ISO certified manufacturers and exporters of precision brass components
        based in Jamnagar, Gujarat. Delivering reliable, high-quality
        engineering solutions to global industries.
      </p>

      {/* Certifications */}
      {/* <div className="flex flex-wrap gap-4 pt-2">
        {[
          "/certs/iso.png",
          "/certs/iatf.png",
          "/certs/zedi.png",
          "/certs/epc.png",
        ].map((src, i) => (
          <div
            key={i}
            className="bg-white rounded-md p-2 w-14 h-14 flex items-center justify-center"
          >
            <Image src={src} alt="Certification" width={40} height={40} />
          </div>
        ))}
      </div> */}
    </div>
  );
};
