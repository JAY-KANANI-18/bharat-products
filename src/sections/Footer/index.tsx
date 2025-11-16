import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <section className="relative text-white text-sm bg-stone-500 bg-no-repeat bg-cover box-border caret-transparent leading-[21px] bg-center md:text-base md:leading-6">
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] md:text-base md:leading-6">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-[1200px] leading-[21px] max-w-[calc(100%_-_60px)] w-[1200px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] -mx-5 md:text-base md:leading-6">
                <FooterLogo />
                <FooterColumns />
              </div>
            </div>
            <FooterCopyright />
          </div>
        </div>
      </div>
    </section>
  );
};
