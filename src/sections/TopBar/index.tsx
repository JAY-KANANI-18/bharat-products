"use client";
import { TopBarInfo } from "@/sections/TopBar/components/TopBarInfo";
import { TopBarSocial } from "@/sections/TopBar/components/TopBarSocial";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const TopBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/safety", label: "Safety" },
    { href: "/team", label: "Team" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
    { href: "/brochure", label: "Brochure" },
  ];
  return (
    <header className="fixed text-black text-sm bg-white bg-no-repeat box-border caret-transparent clear-both h-full leading-[21px] overflow-x-hidden overflow-y-auto text-center translate-x-[-100.0%] w-80 z-[10003] pb-7 left-0 inset-y-0 md:absolute md:text-base md:bg-transparent md:clear-none md:h-auto md:leading-6 md:overflow-x-visible md:overflow-y-visible md:text-start md:transform-none md:w-full md:z-[10002] md:pb-0 md:left-auto md:inset-y-auto after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6 after:md:text-start">
      <div className="text-sm content-start bg-no-repeat box-border caret-transparent flex flex-col justify-end leading-[21px] text-center md:text-base md:block md:flex-row md:justify-normal md:leading-6 md:text-start">
        <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] order-1 text-center z-auto py-8 md:text-[13.008px] md:leading-[30.0225px] md:min-h-0 md:min-w-0 md:order-none md:text-start md:z-[2] md:py-0 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-[13.008px] after:md:leading-[30.0225px] after:md:text-start">
          <div className="text-sm bg-no-repeat box-border caret-transparent block leading-[21px] text-center w-full px-[30px] md:text-[13.008px] md:flex md:leading-[30.0225px] md:text-start after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:hidden after:md:text-[13.008px] after:md:leading-[30.0225px] after:md:text-start">
            <TopBarInfo />
            <TopBarSocial />
          </div>
        </div>
        <div className="relative text-sm bg-no-repeat box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-center z-[2] md:text-base md:leading-6 md:min-h-0 md:min-w-0 md:text-start after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:text-base after:md:leading-6 after:md:text-start">
          <div className="text-sm bg-no-repeat box-border caret-transparent leading-[21px] text-center w-full px-[30px] md:text-base md:leading-6 md:text-start">
            <div className="text-[0px] items-center bg-no-repeat box-border caret-transparent hidden float-right leading-[120px] text-center ml-4 md:text-start">
              <div className="items-start bg-primary box-border caret-transparent flex flex-col h-[50px] justify-center leading-[0px] max-w-full text-center w-[50px] px-[15px] md:text-start before:accent-auto before:self-end before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-[0px] before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-sanchez before:md:text-start after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-black after:block after:text-[0px] after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-6/12 after:border-separate after:font-sanchez after:md:text-start">
                <a
                  href="#"
                  className="bg-white box-border caret-transparent block h-0.5 text-center w-full my-[3px] md:text-start hover:text-primary hover:border-primary"
                ></a>
              </div>
            </div>
            <div className="relative text-sm bg-no-repeat box-border caret-transparent float-none leading-[0px] text-center z-[2] px-7 py-3.5 md:text-base md:float-left md:text-start md:p-0">
              <span className="text-sm bg-no-repeat box-border caret-transparent text-center md:text-base md:text-start">
                <a
                  href="/"
                  className="text-sm bg-no-repeat box-border caret-transparent text-center md:text-base md:text-start hover:text-primary hover:border-primary"
                >
                  <img
                    src="/logo/Bg White Main Logos.png "
                    alt="Logo"
                    className="text-sm bg-no-repeat box-border caret-transparent h-auto max-w-full text-center mx-auto md:text-base md:h-[120px] md:text-start md:mx-0"
                  />
                </a>
              </span>
            </div>
            <div className="text-[15px] bg-no-repeat box-border caret-transparent flex flex-col-reverse leading-[21px] text-center w-full md:block md:flex-row md:leading-6 md:text-start md:w-auto after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:leading-6 after:md:min-h-0 after:md:min-w-0 after:md:text-start">
              <div className="[align-items:normal] bg-no-repeat box-border caret-transparent block float-none h-auto leading-[21px] min-h-[auto] min-w-[auto] text-center ml-0 py-8 md:items-center md:flex md:float-right md:h-[120px] md:leading-6 md:min-h-0 md:min-w-0 md:text-start md:ml-[25px] md:py-0">
                <div className="[align-items:normal] bg-no-repeat box-border caret-transparent block leading-[21px] min-h-0 min-w-0 text-center md:items-center md:flex md:leading-[120px] md:min-h-[auto] md:min-w-[auto] md:text-start">
                  <div className="relative bg-no-repeat box-border caret-transparent inline-flex leading-[21px] min-h-0 min-w-0 text-center w-[calc(100%_-_7.5px)] ml-[11.25px] my-[7.5px] md:block md:leading-[120px] md:min-h-[auto] md:min-w-[auto] md:text-start md:w-auto md:ml-0 md:my-0 after:accent-auto after:bg-no-repeat after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-sanchez after:md:leading-[120px] after:md:min-h-0 after:md:min-w-0 after:md:text-start">
                    <a
                      href="#"
                      title="414-214-0362"
                      className="text-white bg-primary box-border caret-transparent flex basis-full flex-row-reverse grow shrink-0 h-[50px] justify-center leading-[50px] min-h-[auto] min-w-[auto] text-center overflow-hidden px-6 rounded-[25px] md:basis-auto md:grow-0 md:shrink md:min-h-0 md:min-w-0 md:text-start hover:shadow-[rgba(0,0,0,0.2)_0px_5px_20px_0px]"
                    >
                      <span className="font-bold bg-no-repeat box-border caret-transparent block text-center text-nowrap font-red_hat_text md:text-start">
                        414-214-0362
                      </span>
                      <span className="bg-no-repeat box-border caret-transparent block text-center mr-[7.5px] md:text-start before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-white before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[50px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome5solid before:md:text-start"></span>
                    </a>
                  </div>
                </div>
              </div>

              <nav className="bg-no-repeat box-border caret-transparent float-none leading-[21px] text-center pl-0 pt-8 md:float-left md:leading-6 md:text-start md:pl-[75px] md:pt-0">
                <ul className="list-none m-0 p-0 flex flex-col md:flex-row">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href} className="px-5 relative">
                        <Link
                          href={item.href}
                          className={[
                            "relative block px-[30px] py-[15px]",

                            /* --- Typography --- */
                            "font-semibold leading-[16.5px] text-center",

                            /* --- Visual / Reset --- */
                            "bg-no-repeat box-border caret-transparent z-auto",

                            /* --- Desktop Overrides (md:) --- */
                            "md:font-normal md:leading-[120px] md:text-start md:z-[2] md:p-0",

                            "nav-item",

                            isActive
                              ? `nav-item--active text-black
                                after:md:block
                                after:md:absolute
                                after:md:left-0
                                after:md:top-2/4
                                after:md:w-[30px] after:md:h-[30px]
                                after:md:mt-[-15px]
                                after:md:bg-primary
                                after:md:rounded-[60%]
                                after:md:z-[-1]
                                after:md:pointer-events-auto
                                after:md:text-black after:md:text-[15px]
                                after:md:not-italic after:md:normal-nums after:md:font-normal
                                after:md:tracking-[normal] after:md:leading-[120px]
                                after:md:list-outside after:md:list-none
                                after:md:no-underline after:md:indent-[0px] after:md:normal-case
                                after:md:font-sanchez`
                              : "text-foreground/70 hover:text-black",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
<nav className="bg-no-repeat box-border caret-transparent float-none leading-[21px] min-h-[auto] min-w-[auto] text-center pl-0 pt-8 md:float-left md:leading-6 md:min-h-0 md:min-w-0 md:text-start md:pl-[75px] md:pt-0">
  <ul className="bg-no-repeat box-border caret-transparent leading-[21px] list-none text-center pl-0 md:leading-6 md:text-start">
    <li className="relative bg-no-repeat box-border caret-transparent block float-none leading-[21px] text-center z-auto pr-0 md:float-left md:leading-6 md:text-start md:z-[5] md:pr-[50px]">
      <div className="absolute bg-no-repeat box-border caret-transparent block leading-[15px] opacity-50 text-center top-[-5px] w-[45px] z-[1] py-5 right-0 md:hidden md:leading-[120px] md:z-[80] md:py-0 md:right-[15px] md:top-0 before:accent-auto before:bg-no-repeat before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></div>
      <a
        href="/"
        className="
      /* --- Positioning & Layout --- */
        relative block px-[30px] py-[15px]
      
        /* --- Typography --- */
        font-semibold leading-[16.5px] text-center
      
        /* --- Visual / Reset --- */
        bg-no-repeat box-border caret-transparent z-auto
      
        /* --- Desktop Overrides (md:) --- */
        md:font-normal md:leading-[120px] md:text-start md:z-[2] md:p-0
      
        /* --- BEFORE (hover background bar) --- */
        before:md:block
        before:md:absolute
        before:md:left-[-25px] before:md:right-[-25px]
        before:md:top-2/4 before:md:bottom-0
        before:md:translate-y-[-25px]
        before:md:max-h-[50px] before:md:min-h-[50px]
        before:md:scale-x-0 before:md:opacity-0
        before:md:bg-primary
        before:md:z-[-1]
        before:md:rounded-t-[5px]
        before:md:pointer-events-auto
        before:md:text-black before:md:text-[15px]
        before:md:not-italic before:md:normal-nums before:md:font-normal
        before:md:tracking-[normal] before:md:leading-[120px]
        before:md:list-outside before:md:list-none
        before:md:no-underline before:md:indent-[0px] before:md:normal-case
        before:md:font-sanchez
      
        /* --- AFTER (yellow active circle) --- */
        after:md:block
        after:md:absolute
        after:md:left-[-15px]
        after:md:top-2/4
        after:md:w-[30px] after:md:h-[30px]
        after:md:mt-[-15px]
        after:md:bg-primary
        after:md:rounded-[50%]
        after:md:z-[-1]
        after:md:pointer-events-auto
        after:md:text-black after:md:text-[15px]
        after:md:not-italic after:md:normal-nums after:md:font-normal
        after:md:tracking-[normal] after:md:leading-[120px]
        after:md:list-outside after:md:list-none
        after:md:no-underline after:md:indent-[0px] after:md:normal-case
        after:md:font-sanchez
      "
      >
        Home
      </a>

      <ul className="static bg-transparent bg-no-repeat shadow-none box-border caret-transparent leading-[21px] opacity-100 pointer-events-auto text-center transform-none w-auto z-auto pl-0 py-0 left-auto top-auto md:absolute md:bg-white md:shadow-[rgba(0,0,0,0.2)_0px_5px_30px_0px] md:left-[-25px] md:leading-6 md:opacity-0 md:pointer-events-none md:text-start md:translate-y-[50px] md:w-[220px] md:z-[1] md:py-[13.6px] md:top-[85px]">
        <li className="relative text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[21px] pointer-events-auto text-center z-auto md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:z-[4]">
          <a
            href="/"
            className="relative text-black text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[14.85px] pointer-events-auto text-center px-[27px] py-[13.5px] md:text-foreground/70 md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:px-[25.008px] md:py-[4.8px] after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black"
          >
            Home 01
          </a>
        </li>
        <li className="relative text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[21px] pointer-events-auto text-center z-auto md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:z-[4]">
          <a
            href="/"
            className="relative text-black text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[14.85px] pointer-events-auto text-center px-[27px] py-[13.5px] md:text-foreground/70 md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:px-[25.008px] md:py-[4.8px] after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black"
          >
            Home 02
          </a>
        </li>
        <li className="relative text-[13.5px] bg-no-repeat box-border caret-transparent block leading-[21px] pointer-events-auto text-center z-auto md:text-[13.995px] md:leading-6 md:pointer-events-none md:text-start md:z-[4]">
          <a
            href="/"
            className="relative text-black text-[13.5px] font-semibold bg-no-repeat box-border caret-transparent block leading-[14.85px] pointer-events-auto text-center px-[27px] py-[13.5px] md:text-foreground/70 md:text-[13.995px] md:font-normal md:leading-6 md:pointer-events-none md:text-start md:px-[25.008px] md:py-[4.8px] after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black"
          >
            Home 03
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>;

