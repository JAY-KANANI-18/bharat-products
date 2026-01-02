import React from "react";
import Link from "next/link";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import { Cpu, Handshake, BadgeCheck } from "lucide-react";

export const AboutHighlights: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // ABOUT US //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Excellence Backed by Innovation
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              We continuously invest in cutting‑edge machinery and advanced
              manufacturing technology to stay aligned with evolving customer
              needs.
            </p>
          </div>
        </AnimatedSection>

        {/* Styled image band */}
        <AnimatedSection animationType="fade-up" delay={100}>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200 mb-8">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <img
                src="/images/quality/Our Quality Approach 2664576671.jpg"
                alt="Modern precision manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-black/10 pointer-events-none"></div>

            <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold ring-1 ring-gray-200">
              <span>R&D</span>
              <span className="text-foreground/40">•</span>
              <span>CNC</span>
              <span className="text-foreground/40">•</span>
              <span>QA</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Small image row */}
        <AnimatedSection animationType="fade-up" delay={140}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              "/images/quality/Quality Instruments 2642860503.jpg",
              "/images/quality/Thread Gauges (Plug & Ring).jpg",
              "/images/quality/Coordinate Measuring Machines.jpg",
              "/images/quality/Digital Height Gauges & Surface Plates.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ring-1 ring-gray-200 ${
                  i === 3 ? "hidden md:block" : ""
                }`}
              >
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={src}
                    alt="Quality inspection equipment"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimatedSection animationType="slide-left" delay={100}>
            <div className="h-full p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Staying Ahead with Technology
                </h3>
              </div>
              <p className="text-foreground/70 leading-7">
                At{" "}
                <span className="text-primary text-lg mb-2 ">
                  {" "}
                  Bharat Products{" "}
                </span>
                , innovation is at the heart of everything we do. We
                continuously invest in cutting-edge machinery and advanced
                manufacturing technology to stay aligned with the evolving needs
                of our customers. This commitment to progress ensures that we
                consistently deliver solutions that not only meet but exceed
                expectations—providing you with the highest quality products and
                services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slide-right" delay={200}>
            <div className="h-full p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Building Partnerships That Last
                </h3>
              </div>
              <p className="text-foreground/70 leading-7">
                We believe true success comes from collaboration. At Bharat
                Products, we go beyond delivering components—we foster long-term
                partnerships built on{" "}
                <span className="text-primary text-lg mb-2 ">
                  {" "}
                  trust, transparency & reliability.{" "}
                </span>{" "}
                Our dedication to your growth extends well beyond the first
                project. As your business evolves, we remain your steadfast
                partner, supporting you with precision-engineered solutions
                every step of the way.{" "}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animationType="fade-up" delay={250}>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Our Promise
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/80">
              <div>
                <span className="text-primary text-lg mb-2">
                  {" "}
                  Innovation at Scale{" "}
                </span>{" "}
                – Advanced CNC technology and modern manufacturing practices.
              </div>
              <div>
                <span className="text-primary text-lg mb-2">
                  {" "}
                  Client‑Centric Approach{" "}
                </span>{" "}
                – Tailored solutions for your unique requirements.
              </div>
              <div>
                <span className="text-primary text-lg mb-2">
                  {" "}
                  Reliability You Can Trust{" "}
                </span>{" "}
                – ISO 9001:2015 certified processes.
              </div>
              <div>
                <span className="text-primary text-lg mb-2">
                  {" "}
                  Partnership Beyond Projects{" "}
                </span>{" "}
                – Supporting your success as you grow.
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold hover:text-primary hover:underline"
              >
                More about Bharat Products <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutHighlights;
