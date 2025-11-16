import React from "react";
import { MobileMenuToggle } from "../src/components/MobileMenuToggle";
import { TopBar } from "../src/sections/TopBar";
import { HeroSection } from "../src/sections/HeroSection";
import { ServicesSection } from "../src/sections/ServicesSection";
import { AboutSection } from "../src/sections/AboutSection";
import { PricingSection } from "../src/sections/PricingSection";
import { VideoSection } from "../src/sections/VideoSection";
import { ContactSection } from "../src/sections/ContactSection";
import { Footer } from "../src/sections/Footer";

export default function Home() {
  return (
    <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] overflow-hidden md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
      <MobileMenuToggle
        variant="absolute text-black text-sm bg-white flex justify-start leading-[21px] w-full z-[10002] px-[30px] md:text-base md:bg-transparent md:hidden md:leading-6"
        logoUrl="https://c.animaapp.com/mhypf3xrXgMUxE/assets/amwerk-logo-gold-bronze.png"
        logoAlt="Berlin"
        logoLinkUrl="https://amwerk.bold-themes.com/berlin/"
      />
      <TopBar />
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <PricingSection />
              <VideoSection />
              <ContactSection />
            </div>
            <span
              title="Edit/Preview"
              className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6"
            ></span>
          </div>
        </div>
      </div>
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <Footer />
        </div>
        <span
          title="Edit/Preview"
          className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6"
        ></span>
        <footer className="text-sm bg-white bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6"></footer>
      </div>
    </div>
  );
}
