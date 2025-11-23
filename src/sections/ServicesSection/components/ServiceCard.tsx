'use client';

import { useState } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageTitle?: string;
  imageAlt: string;
  href?: string;
  ctaLabel?: string;
  ctaAriaLabel?: string;
};

export const ServiceCard = ({
  title,
  description,
  imageSrc,
  imageTitle,
  imageAlt,
  href = "#",
  ctaLabel = "Find out more",
  ctaAriaLabel,
}: ServiceCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 12; // left/right tilt
    const rotX = (0.5 - py) * 8; // up/down tilt
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full md:text-base md:leading-6">
      {/* Card container */}
      <div
        className="group relative text-sm bg-white bg-no-repeat box-border caret-transparent leading-[21px] w-full px-7 rounded-[10px] md:text-base md:leading-6 md:px-8 transition-all duration-500 ease-out will-change-transform hover:-translate-y-1 ring-1 ring-transparent hover:ring-yellow-500/40 hover:shadow-xl"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* premium overlay shimmer and glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),rgba(224,169,35,0.08))] blur-xl"></div>
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-b from-yellow-400/20 to-transparent -translate-x-full group-hover:translate-x-[120%] transition-transform duration-700 ease-out"></div>
        </div>

        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left leading-[21px] overflow-hidden -mx-7 rounded-t-[10px] md:text-base md:leading-6 md:-mx-8">
            <a
              href={href}
              title={imageTitle ?? title}
              className="text-sm bg-no-repeat box-border caret-transparent block leading-[0px] md:text-base hover:text-primary hover:border-primary"
            >
              <img
                src={imageSrc}
                title={imageTitle ?? title}
                alt={imageAlt}
                className="text-sm bg-no-repeat box-border caret-transparent max-w-full w-full md:text-base transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </a>
          </div>
          <div className="relative text-sm bg-no-repeat box-border caret-transparent float-left justify-center leading-[14px] max-w-full z-[1] -mt-10 pr-[7px] md:text-base md:leading-4 md:pr-2">
            <span className="text-sm content-center items-center bg-no-repeat box-border caret-transparent flex justify-start leading-[14px] pointer-events-none md:text-base md:leading-4 before:accent-auto before:content-center before:items-center before:bg-primary before:box-border before:caret-transparent before:text-white before:flex before:flex-col before:text-[40px] before:not-italic before:normal-nums before:font-normal before:h-20 before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:order-1 before:pointer-events-none before:text-left before:indent-[0px] before:normal-case before:visible before:w-20 before:rounded-[50%] before:border-separate before:font-amwerk"></span>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[25px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-foreground/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <header className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-foreground/70 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6">
            <h4 className="relative text-black text-[25px] font-bold bg-no-repeat box-border caret-transparent clear-both tracking-[-0.75px] leading-[25px] font-red_hat_display after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-[25px] after:not-italic after:normal-nums after:font-bold after:tracking-[-0.75px] after:leading-[25px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-red_hat_display">
              <span className="relative bg-no-repeat box-border caret-transparent inline-block z-[1]">
                <span className="bg-no-repeat box-border caret-transparent block before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-black before:table before:text-[25px] before:not-italic before:normal-nums before:font-bold before:tracking-[-0.75px] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-red_hat_display after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-[25px] after:not-italic after:normal-nums after:font-bold after:tracking-[-0.75px] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-red_hat_display">
                  {title}
                </span>
              </span>
            </h4>
            <div className="text-base bg-no-repeat box-border caret-transparent clear-both leading-6 mt-3">
              {description}
            </div>
          </header>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[25px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-foreground/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-[12.25px] bg-no-repeat box-border caret-transparent float-left leading-[12.25px] mr-[6.125px] mb-[3.0625px] md:text-sm md:leading-[14px] md:mr-[7px] md:mb-[3.5px]">
            <a
              href={href}
              title={ctaLabel}
              aria-label={ctaAriaLabel ?? `Find out more about ${title}`}
              className="text-black text-[12.25px] content-start bg-no-repeat shadow-[rgb(224,169,35)_0px_0px_0px_2px_inset] box-border caret-transparent flex justify-center leading-[12.25px] overflow-hidden rounded-[50px] md:text-sm md:leading-[14px] hover:shadow-[rgb(224,169,35)_0px_0px_0px_28px_inset,rgba(0,0,0,0.2)_0px_5px_20px_0px] transition-all duration-300"
            >
              <span className="relative text-primary text-[12.25px] font-bold bg-no-repeat box-border caret-transparent block leading-[12.25px] order-2 px-[18.375px] py-[14.0017px] font-red_hat_text md:text-sm md:leading-[14px] md:px-[21px] md:py-[16.002px] flex items-center gap-2">
                {ctaLabel}
                <svg
                  className="w-3 h-3 text-primary transform transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L13.586 9H4a1 1 0 100 2h9.586l-3.293 3.293a1 1 0 000 1.414z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-[30px] md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-foreground/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
        </div>
      </div>
    </div>
  );
};

