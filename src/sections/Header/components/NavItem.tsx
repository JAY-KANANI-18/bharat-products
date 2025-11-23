export type NavItemProps = {
  label: string;
  href: string;
  linkVariant: string;
  hasSubMenu: boolean;
  subMenuVariant?: string;
  subMenuItems?: Array<{
    label: string;
    href: string;
    linkVariant: string;
    hasSubMenu?: boolean;
    subMenuVariant?: string;
    subMenuItems?: Array<{
      label: string;
      href: string;
      linkVariant: string;
    }>;
  }>;
  itemVariant?: string;
};

export const NavItem = (props: NavItemProps) => {
  return (
    <li
      className={`relative bg-no-repeat box-border caret-transparent block float-none leading-[21px] text-center z-auto pr-0 md:float-left md:leading-6 md:text-start md:z-[5] ${props.itemVariant || "md:pr-[50px]"}`}
    >
      <div className="absolute bg-no-repeat box-border caret-transparent block leading-[15px] opacity-50 text-center top-[-5px] w-[45px] z-[1] py-5 right-0 md:hidden md:leading-[120px] md:z-[80] md:py-0 md:right-[15px] md:top-0 before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></div>
      <a
        href={props.href}
        className={`nav-item relative bg-no-repeat box-border caret-transparent block leading-[16.5px] text-center z-auto px-[30px] py-[15px] md:leading-[120px] md:text-start md:z-[2] md:p-0 ${props.linkVariant}`}
      >
        {props.label}
      </a>
      {props.hasSubMenu && props.subMenuItems && (
        <ul
          className={`static bg-transparent bg-no-repeat shadow-none box-border caret-transparent leading-[21px] opacity-100 pointer-events-auto text-center transform-none w-auto z-auto pl-0 py-0 left-auto top-auto md:absolute md:bg-white md:shadow-[rgba(0,0,0,0.2)_0px_5px_30px_0px] md:left-[-25px] md:leading-6 md:opacity-0 md:pointer-events-none md:text-start md:translate-y-[50px] md:w-[220px] md:z-[1] md:py-[13.6px] md:top-[85px] ${props.subMenuVariant || ""}`}
        >
          {props.subMenuItems.map((subItem, index) => (
            <li
              key={index}
              className="relative text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[21px] pointer-events-auto text-center z-auto md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:z-[4]"
            >
              {subItem.hasSubMenu && (
                <div className="absolute text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[13.5px] opacity-50 pointer-events-auto text-center top-[-5px] w-[45px] z-[1] py-5 right-0 md:text-[13.995px] md:hidden md:leading-6 md:pointer-events-none md:z-[80] md:py-[5.598px] md:top-0 before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:pointer-events-none"></div>
              )}
              <a
                href={subItem.href}
                className={`relative text-black text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[14.85px] pointer-events-auto text-center px-[27px] py-[13.5px] md:text-foreground/70 md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:px-[25.008px] md:py-[4.8px] after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black ${subItem.linkVariant}`}
              >
                {subItem.label}
              </a>
              {subItem.hasSubMenu && subItem.subMenuItems && (
                <ul className="static text-[13.5px] bg-transparent bg-no-repeat shadow-none box-border caret-transparent hidden leading-[21px] opacity-80 pointer-events-auto text-center transform-none w-auto z-auto pl-0 py-0 left-auto top-auto md:absolute md:text-[13.995px] md:bg-white md:shadow-[rgba(0,0,0,0.2)_0px_5px_30px_0px] md:block md:leading-6 md:opacity-0 md:pointer-events-none md:text-start md:top-[-13.6px] md:translate-y-[50px] md:w-[220px] md:z-[1] md:py-[13.6px] md:left-[220px]">
                  {subItem.subMenuItems.map((nestedItem, nestedIndex) => (
                    <li
                      key={nestedIndex}
                      className="relative text-[12.15px] bg-no-repeat box-border caret-transparent block leading-[21px] pointer-events-auto text-center z-auto md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:z-[4]"
                    >
                      <a
                        href={nestedItem.href}
                        className="relative text-black text-[12.15px] bg-no-repeat box-border caret-transparent block leading-[13.365px] pointer-events-auto text-center px-[24.3px] py-[12.15px] md:text-foreground/70 md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:px-[25.008px] md:py-[4.8px] after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black"
                      >
                        {nestedItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

