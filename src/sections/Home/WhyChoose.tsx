import React from "react";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import { Gauge, Users, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Gauge,
    title: "Performance-Driven Manufacturing",
    desc: "We pride ourselves on best-in-class quality and reliability. With a proven track record of achieving over 93% on-time delivery, Bharat Products combines efficiency with cost-effectiveness. Our commitment lies in striking the perfect balance between quality, timeliness, and affordability—delivering solutions that consistently exceed expectations.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Your success drives everything we do. At Bharat Products, we listen, collaborate, and adapt. By working closely with your team, we refine our solutions to align seamlessly with your objectives, ensuring that every project contributes to your growth and success.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Confidentiality",
    desc: "We understand the value of trust. That’s why Bharat Products enforces stringent data security measures to safeguard your information. Our robust confidentiality policies guarantee the privacy and protection of your data at all times, giving you complete peace of mind.",
  },
];

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* ================= HEADER ================= */}
        <AnimatedSection animationType="fade-up">
          <div className="max-w-4xl mb-16">
            <div className="text-xs font-semibold tracking-[0.35em] text-gray-500 mb-4 font-red_hat_text">
              WHY CHOOSE BHARAT PRODUCTS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-red_hat_display">
              Precision Manufacturing.
              <br />
              Proven at Industrial Scale.
            </h2>

            <p className="text-lg text-foreground/70 leading-8">
              Trusted by manufacturers who demand accuracy, consistency, and
              accountability in every component delivered.
            </p>
          </div>
        </AnimatedSection>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <AnimatedSection animationType="slide-left">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-xl font-medium leading-8 mb-6">
                  We engineer reliability into every micron — from raw material
                  verification to final inspection.
                </p>

                <p className="text-foreground/70 leading-7">
                  Our production systems are designed for repeatability,
                  traceability, and global compliance — ensuring consistent
                  results across volumes and markets.
                </p>

                {/* Styled Image Collage */}
                <AnimatedSection animationType="fade-up" delay={120}>
                  <div className="relative mt-10">
                    {/* Decorative glows */}
                    <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                    <div className="pointer-events-none absolute -bottom-6 -right-6 w-28 h-28 bg-gray-400/20 blur-2xl rounded-full"></div>

                    <div className="grid grid-cols-3 gap-3">
                      {/* Main image */}
                      <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
                        <img
                          src="/images/about/CNC Technology 2473146403.jpg"
                          alt="Precision manufacturing floor"
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                        <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold ring-1 ring-gray-200">
                          <span className="text-primary">ISO</span>
                          <span>9001:2015</span>
                        </div>
                      </div>

                      {/* Side column images */}
                      <div className="col-span-1 grid grid-rows-2 gap-3">
                        <div className="relative rounded-2xl overflow-hidden aspect-square ring-1 ring-gray-200 shadow-md">
                          <img
                            src="/images/home/Client-Centric Approach.png"
                            alt="Close-up view of CNC machining detail"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-square ring-1 ring-gray-200 shadow-md">
                          <img
                            src="/images/home/Trust Confidentiality.png"
                            alt="Quality inspection instruments arranged for measurement"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Metrics */}
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold">93%+</div>
                    <div className="text-sm text-foreground/60">
                      On-time delivery
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">ISO 9001</div>
                    <div className="text-sm text-foreground/60">
                      Certified systems
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <AnimatedSection animationType="fade-up" delay={150}>
              <div className="space-y-10">
                {FEATURES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex gap-5 border-b border-gray-200 pb-8 last:border-b-0"
                    >
                      <Icon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 leading-7">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
