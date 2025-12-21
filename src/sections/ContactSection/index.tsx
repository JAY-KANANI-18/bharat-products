import { ContactContent } from "@/sections/ContactSection/components/ContactContent";
import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="relative text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] md:text-base md:leading-6">
      {/* <div className="absolute text-sm bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] overflow-hidden bg-[position:left_100%] inset-0 md:text-base md:leading-6">
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/mhypf3xrXgMUxE/assets/bgn-curve-yellow-bottom-left.png')] bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] bg-[position:left_100%] inset-0 md:text-base md:leading-6"></div>
      </div> */}
      <div className="text-sm items-start bg-no-repeat box-border caret-transparent flex justify-center leading-[21px] py-[100px] md:text-base md:leading-6">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent basis-[1200px] leading-[21px] max-w-[calc(100%_-_60px)] w-[1200px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-wrap justify-between leading-[21px] -mx-5 md:text-base md:leading-6">
                <ContactContent />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
