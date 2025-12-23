import { ContactFormModern } from "@/sections/ContactSection/components/ContactFormModern";

export const ContactSection = () => {
  return (
    <section className="relative text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] md:text-base md:leading-6">
      {/* <div className="absolute text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] overflow-hidden bg-[position:left_100%] inset-0 md:text-base md:leading-6">
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/mhypf3xrXgMUxE/assets/bgn-curve-yellow-bottom-left.png')] bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] inset-0 md:text-base md:leading-6"></div>
      </div> */}
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] py-12 md:py-[100px] md:text-base md:leading-6">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-[1200px] leading-[21px] max-w-[calc(100%_-_24px)] sm:max-w-[calc(100%_-_60px)] w-[1200px] md:text-base md:leading-6">
          <div className="relative  md:p-10 overflow-hidden min-h-[440px] md:min-h-[500px]">
            <div className="pointer-events-none absolute inset-0 z-[1]">
              <div className="absolute top-10 left-6 w-14 h-14 md:w-20 md:h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="hidden md:block absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-300"></div>
              <div className="hidden md:block absolute bottom-20 left-1/4 w-12 h-12 bg-gray-400/20 rounded-full animate-ping delay-700"></div>
            </div>
            <div className="relative z-[2]">
              <ContactFormModern />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
