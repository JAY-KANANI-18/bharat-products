export type LogoProps = {
  variant: string;
  href?: string;
  imageUrl?: string;
  alt?: string;
};

export const Logo = (props: LogoProps) => {
  const {
    variant,
    href = "/",
    imageUrl = "/logo/Bg White Main Logo.png",
    alt = "Logo",
  } = props;

  if (variant === "variant1") {
    return (
      <div className="relative text-sm bg-no-repeat box-border caret-transparent z-[2] md:text-base leading-[21px] min-h-[auto] min-w-[auto] md:leading-6 md:min-h-0 md:min-w-0">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent float-left leading-[0px] z-[2] md:text-base">
          <span className="text-sm bg-no-repeat box-border caret-transparent flex md:text-base">
            <a
              href={href}
              className="text-sm bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] md:text-base md:min-h-0 md:min-w-0 hover:text-primary hover:border-primary"
            >
              <img
                src={imageUrl}
                alt={alt}
                className="text-sm bg-no-repeat box-border caret-transparent h-[72px] max-w-full md:text-base md:h-[120px]"
              />
            </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative text-sm bg-no-repeat box-border caret-transparent z-[2] md:text-base float-none leading-[0px] text-center px-7 py-3.5 md:float-left md:text-start md:p-0">
      <span className="text-sm bg-no-repeat box-border caret-transparent text-center md:text-base md:text-start">
        <a
          href={href}
          className="text-sm bg-no-repeat box-border caret-transparent text-center md:text-base md:text-start hover:text-primary hover:border-primary"
        >
          <img
            src={imageUrl}
            alt={alt}
            className="text-sm bg-no-repeat box-border caret-transparent h-auto max-w-full text-center mx-auto md:text-base md:h-[120px] md:text-start md:mx-0"
          />
        </a>
      </span>
    </div>
  );
};

