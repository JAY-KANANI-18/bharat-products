import { MobileMenuToggle } from "@/components/MobileMenuToggle";
import { Logo } from "@/components/Logo";
import { PhoneButton } from "@/components/PhoneButton";

export const Header = () => {
  return (
    <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-center z-[2] md:text-base md:leading-6 md:min-h-0 md:min-w-0 md:text-start after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6 after:md:text-start">
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] text-center w-full px-[30px] md:text-base md:leading-6 md:text-start">
        <MobileMenuToggle variant="text-[0px] hidden float-right leading-[120px] text-center ml-4 md:text-start" />
        <Logo
          variant="default"
          href="/"
          imageUrl="/logo/Bg White Main Logo.png"
          alt="Logo"
        />
        <PhoneButton />
      </div>
    </div>
  );
};
