import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] md:text-base md:leading-6">
      <div className="absolute text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] overflow-hidden bg-[position:left_100%] inset-0 md:text-base md:leading-6">
        <div className="absolute text-sm bg-[url('https://amwerk.bold-themes.com/berlin/wp-content/uploads/sites/2/2020/11/bgn-curve-gray-bottom-left.png')] bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] inset-0 md:text-base md:leading-6"></div>
      </div>
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] py-28 md:text-base md:leading-6 md:py-32">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-[1200px] leading-[21px] max-w-[calc(100%_-_60px)] w-[1200px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] -mx-5 md:text-base md:leading-6">
                <div className="text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col grow justify-start leading-[21px] max-w-full text-left px-5 md:text-base md:leading-6">
                  <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full md:text-base md:leading-6">
                    <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-20 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-black/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black/70 after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HeroContent />
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] -mx-5 md:text-base md:leading-6">
                <div className="text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col grow justify-start leading-[21px] max-w-full text-left px-5 md:text-base md:leading-6">
                  <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full md:text-base md:leading-6">
                    <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-10 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-black/70 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black/70 after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
