export type MobileMenuToggleProps = {
  variant: string;
  logoUrl?: string;
  logoAlt?: string;
  logoLinkUrl?: string;
};

export const MobileMenuToggle = (props: MobileMenuToggleProps) => {
  return (
    <div
      className={`items-center bg-no-repeat box-border caret-transparent ${props.variant}`}
    >
      <div
        className={`box-border caret-transparent flex ${props.variant === "absolute text-black text-sm bg-white flex justify-start leading-[21px] w-full z-[10002] px-[30px] md:text-base md:bg-transparent md:hidden md:leading-6" ? "text-[0px] items-center bg-no-repeat float-left leading-[21px] min-h-[auto] min-w-[auto] mr-4 md:[align-items:normal] md:hidden md:float-none md:leading-6 md:min-h-0 md:min-w-0" : "items-start bg-primary flex-col h-[50px] justify-center leading-[0px] max-w-full text-center w-[50px] px-[15px] md:text-start before:accent-auto before:self-end before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-[0px] before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-sanchez before:md:text-start after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-black after:block after:text-[0px] after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-6/12 after:border-separate after:font-sanchez after:md:text-start"}`}
      >
        {props.variant ===
          "absolute text-black text-sm bg-white flex justify-start leading-[21px] w-full z-[10002] px-[30px] md:text-base md:bg-transparent md:hidden md:leading-6" && (
          <div className="items-start bg-primary box-border caret-transparent flex flex-col h-[50px] justify-center leading-[0px] max-w-full min-h-[auto] min-w-[auto] w-[50px] px-[15px] md:min-h-0 md:min-w-0 before:accent-auto before:self-end before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-[0px] before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-sanchez before:md:min-h-0 before:md:min-w-0 after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-black after:block after:text-[0px] after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-6/12 after:border-separate after:font-sanchez after:md:min-h-0 after:md:min-w-0">
            <a
              href="#"
              className="content-center items-center bg-white box-border caret-transparent flex h-0.5 justify-start min-h-[auto] min-w-[auto] w-full my-[3px] md:min-h-0 md:min-w-0 before:accent-auto before:content-center before:items-center before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:hidden before:flex-col before:text-[0px] before:not-italic before:normal-nums before:font-normal before:justify-center before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:order-1 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome hover:text-primary hover:border-primary"
            ></a>
          </div>
        )}
        {props.variant ===
          "text-[0px] hidden float-right leading-[120px] text-center ml-4 md:text-start" && (
          <a
            href="#"
            className="bg-white box-border caret-transparent block h-0.5 text-center w-full my-[3px] md:text-start hover:text-primary hover:border-primary"
          ></a>
        )}
      </div>
      {props.variant ===
        "absolute text-black text-sm bg-white flex justify-start leading-[21px] w-full z-[10002] px-[30px] md:text-base md:bg-transparent md:hidden md:leading-6" && (
        <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] z-[2] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
          <div className="relative text-sm bg-no-repeat box-border caret-transparent float-left leading-[0px] z-[2] md:text-base">
            <span className="text-sm bg-no-repeat box-border caret-transparent flex md:text-base">
              <a
                href={props.logoLinkUrl}
                className="text-sm bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] md:text-base md:min-h-0 md:min-w-0 hover:text-primary hover:border-primary"
              >
                <img
                  src={props.logoUrl}
                  alt={props.logoAlt}
                  className="text-sm bg-no-repeat box-border caret-transparent h-[72px] max-w-full md:text-base md:h-[120px]"
                />
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

