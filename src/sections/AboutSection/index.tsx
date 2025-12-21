import { AboutImage } from "@/sections/AboutSection/components/AboutImage";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="relative text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] z-[1] bg-[position:100%_top] md:text-base md:leading-6">
      {/* <div className="absolute text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] overflow-hidden bg-[position:100%_top] inset-0 md:text-base md:leading-6">
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/mhypf3xrXgMUxE/assets/bgn-curve-gray-top-right.png')] bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:100%_top] inset-0 md:text-base md:leading-6"></div>
      </div> */}
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] py-[100px] md:text-base md:leading-6">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-full leading-[21px] w-full md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] max-w-full overflow-x-clip m-0 md:text-base md:leading-6 md:m-auto">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] max-w-[calc(100%_+_60px)] mx-0 md:text-base md:flex-nowrap md:justify-start md:leading-6 md:ml-[-30px] md:mr-[-30px]">
                <AboutImage />
                <AboutContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
