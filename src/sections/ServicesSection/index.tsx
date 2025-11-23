import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { ImageCarousel } from "@/sections/ServicesSection/components/ImageCarousel";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";

export const ServicesSection = () => {
  return (
    <section className="relative text-sm bg-zinc-100 bg-no-repeat bg-cover box-border caret-transparent leading-[21px] bg-center md:text-base md:leading-6">
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] pb-10 md:text-base md:leading-6">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-[1500px] leading-[21px] max-w-[calc(100%_-_40px)] w-[1500px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] mt-[-60px] md:text-base md:leading-6">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] max-w-[calc(100%_+_20px)] -mx-2.5 md:text-base md:leading-6">
                <AnimatedSection
                  animationType="scale"
                  delay={0}
                  threshold={0.15}
                  rootMargin="0px 0px -60px 0px"
                  className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] max-w-full text-left mb-5 px-2.5 md:text-base md:basis-3/12 md:leading-6 md:max-w-[25%]"
                >
                  <ServiceCard
                    title="Parts production"
                    description="Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedure processes."
                    imageSrc="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-3-1280x854.avif"
                    imageTitle="img-yellow-demo-3"
                    imageAlt="Parts production"
                    href="#"
                  />
                </AnimatedSection>
                <AnimatedSection
                  animationType="scale"
                  delay={120}
                  threshold={0.15}
                  rootMargin="0px 0px -60px 0px"
                  className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] max-w-full text-left mb-5 px-2.5 md:text-base md:basis-3/12 md:leading-6 md:max-w-[25%]"
                >
                  <ServiceCard
                    title="Precision & quality"
                    description="Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services."
                    imageSrc="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-8-1280x854.avif"
                    imageTitle="img-yellow-demo-8"
                    imageAlt="Precision & quality"
                    href="#"
                  />
                </AnimatedSection>
                <AnimatedSection
                  animationType="scale"
                  delay={240}
                  threshold={0.15}
                  rootMargin="0px 0px -60px 0px"
                  className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] max-w-full text-left mb-5 px-2.5 md:text-base md:basis-3/12 md:leading-6 md:max-w-[25%]"
                >
                  <ServiceCard
                    title="Auto & aero manufacture"
                    description="Dramatically engage high-payoff infomediaries rather than client-centric imperatives. Efficiently initiate world class applications after centric infomediaries."
                    imageSrc="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-4-1280x854.avif"
                    imageTitle="img-yellow-demo-4"
                    imageAlt="Auto & aero manufacture"
                    href="#"
                  />
                </AnimatedSection>
                <AnimatedSection
                  animationType="scale"
                  delay={360}
                  threshold={0.15}
                  rootMargin="0px 0px -60px 0px"
                  className="text-sm bg-no-repeat box-border caret-transparent basis-full grow leading-[21px] max-w-full text-left mb-5 px-2.5 md:text-base md:basis-3/12 md:leading-6 md:max-w-[25%]"
                >
                  <ServiceCard
                    title="Quality replacement parts"
                    description="Phosfluorescently expedite impactful supply chains via focused results. Holistically generate open-source applications through bleeding-edge sources."
                    imageSrc="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-10-1280x854.avif"
                    imageTitle="img-yellow-demo-10"
                    imageAlt="Quality replacement parts"
                    href="#"
                  />
                </AnimatedSection>
              </div>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
