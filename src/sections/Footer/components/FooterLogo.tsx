import Link from "next/link";
import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col grow justify-start leading-[21px] max-w-full text-left px-5 md:text-base md:basis-[16.6667%] md:leading-6">
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] w-full md:text-base md:leading-6">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both hidden leading-[0px] mb-10 md:text-base md:block before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
          <div className="text-sm bg-no-repeat box-border caret-transparent float-left leading-[21px]  overflow-hidden md:text-base md:leading-6">
            {/* <Link href="/" className="flex items-center"> */}
            <Image
              src="/images/Final-Logo/SVG/BG-Secondry-Color.svg"
              alt="Bharat Product"
              width={200}
              height={200}
              priority
              className="h-9 lg:h-10 xl:h-12 2xl:h-14 w-auto"
            />
            {/* </Link> */}
          </div>
          <div className="text-sm bg-no-repeat box-border caret-transparent clear-both leading-[0px] mb-10 md:text-base before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:inset-y-0 before:font-sanchez before:md:text-base"></div>
        </div>
      </div>
    </div>
  );
};
