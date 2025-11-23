import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { ImageCarousel } from "@/sections/ServicesSection/components/ImageCarousel";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";

export const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-red_hat_display">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive precision manufacturing solutions tailored to your industry needs
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <AnimatedSection
            animationType="scale"
            delay={0}
            threshold={0.15}
            rootMargin="0px 0px -60px 0px"
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

        {/* Clients Carousel Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 font-red_hat_display">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">Join hundreds of companies that rely on our precision manufacturing</p>
          </div>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
};
