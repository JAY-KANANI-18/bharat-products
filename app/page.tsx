import React from "react";
import { AnimatedSection } from "./about/components/AnimatedSection";
import { TopBar } from "../src/sections/TopBar";
import { HeroSection } from "../src/sections/HeroSection";
import { ServicesSection } from "../src/sections/ServicesSection";
import { AboutSection } from "../src/sections/AboutSection";
import { PricingSection } from "../src/sections/PricingSection";
import { VideoSection } from "../src/sections/VideoSection";
import { ContactSection } from "../src/sections/ContactSection";
import { Footer } from "../src/sections/Footer";
import { ScrollProgressBar } from "../src/components/ScrollProgressBar";

export default function Home() {
  return (
    <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] overflow-hidden md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-foreground/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
      <ScrollProgressBar />
      <TopBar />
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-foreground/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <AnimatedSection animationType="scale" threshold={0.1}>
                <HeroSection />
              </AnimatedSection>
              <AnimatedSection animationType="fade-up" threshold={0.15}>
                <ServicesSection />
              </AnimatedSection>
              <AnimatedSection
                animationType="slide-left"
                threshold={0.2}
                delay={100}
              >
                <AboutSection />
              </AnimatedSection>
              <AnimatedSection
                animationType="slide-right"
                threshold={0.2}
                delay={150}
              >
                <PricingSection />
              </AnimatedSection>
              <AnimatedSection
                animationType="scale"
                threshold={0.2}
                delay={100}
              >
                <VideoSection />
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                threshold={0.15}
                delay={150}
              >
                <ContactSection />
              </AnimatedSection>
            </div>
            <span
              title="Edit/Preview"
              className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6"
            ></span>
          </div>
        </div>
      </div>
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-foreground/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
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

