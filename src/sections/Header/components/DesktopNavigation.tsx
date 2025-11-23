import { NavItem } from "@/sections/Header/components/NavItem";

export const DesktopNavigation = () => {
  return (
    <nav className="bg-no-repeat box-border caret-transparent float-none leading-[21px] min-h-[auto] min-w-[auto] text-center pl-0 pt-8 md:float-left md:leading-6 md:min-h-0 md:min-w-0 md:text-start md:pl-[75px] md:pt-0">
      <ul className="bg-no-repeat box-border caret-transparent leading-[21px] list-none text-center pl-0 md:leading-6 md:text-start">
        <NavItem
          label="Home"
          href="https://amwerk.bold-themes.com/berlin/"
          linkVariant="font-semibold"
          hasSubMenu={true}
          subMenuVariant=""
          subMenuItems={[
            {
              label: "Home 01",
              href: "https://amwerk.bold-themes.com/berlin/",
              linkVariant: "",
            },
            {
              label: "Home 02",
              href: "https://amwerk.bold-themes.com/berlin/home-02/",
              linkVariant: "",
            },
            {
              label: "Home 03",
              href: "https://amwerk.bold-themes.com/berlin/home-03/",
              linkVariant: "font-semibold",
            },
          ]}
        />
        <NavItem
          label="About us"
          href="https://amwerk.bold-themes.com/berlin/about-us/"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "About us",
              href: "https://amwerk.bold-themes.com/berlin/about-us/",
              linkVariant: "",
            },
            {
              label: "Team",
              href: "https://amwerk.bold-themes.com/berlin/about-us/team/",
              linkVariant: "",
            },
            {
              label: "History",
              href: "https://amwerk.bold-themes.com/berlin/about-us/history/",
              linkVariant: "",
            },
            {
              label: "Contact",
              href: "https://amwerk.bold-themes.com/berlin/about-us/contact/",
              linkVariant: "",
            },
            {
              label: "Location",
              href: "https://amwerk.bold-themes.com/berlin/about-us/location/",
              linkVariant: "",
            },
            {
              label: "Under construction",
              href: "https://amwerk.bold-themes.com/berlin/about-us/under-construction/",
              linkVariant: "",
            },
            {
              label: "404",
              href: "/berlin/404",
              linkVariant: "",
            },
          ]}
        />
        <NavItem
          label="Services"
          href="https://amwerk.bold-themes.com/berlin/services/"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "Our services",
              href: "https://amwerk.bold-themes.com/berlin/services/",
              linkVariant: "",
            },
            {
              label: "Single service",
              href: "https://amwerk.bold-themes.com/berlin/services/single-service/",
              linkVariant: "",
            },
            {
              label: "Our process",
              href: "https://amwerk.bold-themes.com/berlin/services/our-process/",
              linkVariant: "",
            },
            {
              label: "Solutions",
              href: "https://amwerk.bold-themes.com/berlin/services/solutions/",
              linkVariant: "",
            },
          ]}
        />
        <NavItem
          label="Pages"
          href="#"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "Cost Calculator",
              href: "https://amwerk.bold-themes.com/berlin/services/cost-calculator/",
              linkVariant: "",
            },
            {
              label: "FAQ",
              href: "https://amwerk.bold-themes.com/berlin/services/faq/",
              linkVariant: "",
            },
            {
              label: "Pricing",
              href: "https://amwerk.bold-themes.com/berlin/services/pricing/",
              linkVariant: "",
            },
            {
              label: "Testimonials",
              href: "https://amwerk.bold-themes.com/berlin/about-us/testimonials/",
              linkVariant: "",
            },
            {
              label: "Clients",
              href: "https://amwerk.bold-themes.com/berlin/about-us/clients/",
              linkVariant: "",
            },
            {
              label: "Careers",
              href: "https://amwerk.bold-themes.com/berlin/about-us/careers/",
              linkVariant: "",
            },
          ]}
        />
        <NavItem
          label="Portfolio"
          href="https://amwerk.bold-themes.com/berlin/portfolio/"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "Portfolio list",
              href: "https://amwerk.bold-themes.com/berlin/portfolio/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Classic",
                  href: "/berlin/portfolio?pf_list_view=standard",
                  linkVariant: "",
                },
                {
                  label: "Columns",
                  href: "/berlin/portfolio?pf_list_view=columns",
                  linkVariant: "",
                },
              ],
            },
            {
              label: "Portfolio tiles",
              href: "https://amwerk.bold-themes.com/berlin/portfolio-tiles-three-columns/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Three columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-tiles-three-columns/",
                  linkVariant: "",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-tiles-four-columns/",
                  linkVariant: "",
                },
                {
                  label: "Five columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-tiles-five-columns/",
                  linkVariant: "",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-tiles-six-columns/",
                  linkVariant: "",
                },
              ],
            },
            {
              label: "Portfolio grid",
              href: "https://amwerk.bold-themes.com/berlin/portfolio-grid-four-columns/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Three columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-grid-tree-columns/",
                  linkVariant: "",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-grid-four-columns/",
                  linkVariant: "",
                },
                {
                  label: "Five columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-grid-five-columns/",
                  linkVariant: "",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio-grid-six-columns/",
                  linkVariant: "",
                },
              ],
            },
            {
              label: "Single portfolio",
              href: "#",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Standard",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/tools-for-the-right-industry/",
                  linkVariant: "",
                },
                {
                  label: "Grid gallery",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/cnc-solutions-for-any-business/",
                  linkVariant: "",
                },
                {
                  label: "Carousel gallery",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/industry-logistic-solutions/",
                  linkVariant: "",
                },
                {
                  label: "Columns view",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/building-airplane-elements/",
                  linkVariant: "",
                },
                {
                  label: "Video portfolio",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/mcpl-project/",
                  linkVariant: "",
                },
                {
                  label: "Audio portfolio",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/industrial-aero-products/",
                  linkVariant: "",
                },
                {
                  label: "Without default title",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/simon-oswald-project/",
                  linkVariant: "",
                },
                {
                  label: "With Bold Builder content",
                  href: "https://amwerk.bold-themes.com/berlin/portfolio/extending-your-views/",
                  linkVariant: "",
                },
              ],
            },
          ]}
        />
        <NavItem
          label="News"
          href="https://amwerk.bold-themes.com/berlin/news/"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "News list",
              href: "https://amwerk.bold-themes.com/berlin/news/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuVariant: "hidden",
              subMenuItems: [
                {
                  label: "Classic",
                  href: "/berlin/news/?blog_list_view=standard&blog_side_info=false",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Classic with avatar",
                  href: "/berlin/news/?blog_list_view=standard&blog_side_info=true",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Columns",
                  href: "/berlin/news/?blog_list_view=columns&blog_side_info=false",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Columns without sidebar",
                  href: "/berlin/news/?blog_list_view=columns&blog_side_info=false&bt_sidebar=false",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Simple",
                  href: "/berlin/news/?blog_list_view=simple&blog_side_info=false",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Simple with avatar",
                  href: "/berlin/news/?blog_list_view=simple&blog_side_info=true",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
              ],
            },
            {
              label: "News tiles",
              href: "https://amwerk.bold-themes.com/berlin/news/news-tiles-three-columns/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuVariant: "hidden",
              subMenuItems: [
                {
                  label: "Three columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-tiles-three-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-tiles-four-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Five columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-tiles-five-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-tiles-six-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
              ],
            },
            {
              label: "News grid",
              href: "https://amwerk.bold-themes.com/berlin/news/news-grid-four-columns/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuVariant: "hidden",
              subMenuItems: [
                {
                  label: "Three columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-grid-three-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-grid-four-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Five columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-grid-five-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/news-grid-six-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
              ],
            },
            {
              label: "Latest posts",
              href: "https://amwerk.bold-themes.com/berlin/news/latest-posts-three-columns/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuVariant: "hidden",
              subMenuItems: [
                {
                  label: "Three columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/latest-posts-three-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/latest-posts-four-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/news/latest-posts-six-columns/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
              ],
            },
            {
              label: "Single post",
              href: "https://amwerk.bold-themes.com/berlin/2020/06/11/amwerk-builds-for-aero-industry/",
              linkVariant:
                "before:md:accent-auto before:md:bg-black before:md:box-border before:md:caret-transparent before:md:text-foreground/70 before:md:block before:md:float-right before:md:text-[13.995px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-10 before:md:pointer-events-none before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:align-middle before:md:visible before:md:w-[5px] before:md:mt-2.5 before:md:mx-2.5 before:md:rounded-[50%] before:md:border-separate before:md:font-sanchez after:md:accent-auto after:md:bg-primary after:md:bg-no-repeat after:md:box-border after:md:caret-transparent after:md:text-foreground/70 after:md:block after:md:text-[13.995px] after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-0.5 after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_50%] after:md:visible after:md:w-5 after:md:border-separate after:md:scale-x-0 after:md:left-[25.008px] after:md:bottom-0 after:md:font-sanchez hover:text-neutral-900 hover:border-black",
              hasSubMenu: true,
              subMenuVariant: "hidden",
              subMenuItems: [
                {
                  label: "Standard post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/06/11/amwerk-builds-for-aero-industry/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Image post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/06/21/optimistic-about-regional-development/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Grid gallery post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/07/03/clarence-wesley-assigned-to-lead-main-projects/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Carousel gallery post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/07/17/a-new-industry-venture-launched/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Video post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/08/09/why-worlds-biggest-investors-choose-amwerk/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Columns view",
                  href: "https://amwerk.bold-themes.com/berlin/2020/07/22/competing-in-a-new-industry-branch/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Audio post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/08/21/amwerk-applies-for-studen-learning-project/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Link post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/09/04/creating-aero-products-from-cnc-machines/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
                {
                  label: "Quote post",
                  href: "https://amwerk.bold-themes.com/berlin/2020/09/17/amwerk-volunteer-for-local-charity/",
                  linkVariant: "hover:text-neutral-900 hover:border-black",
                },
              ],
            },
          ]}
        />
        <NavItem
          label="Shop"
          href="https://amwerk.bold-themes.com/berlin/shop/"
          linkVariant=""
          hasSubMenu={true}
          subMenuVariant="hidden"
          subMenuItems={[
            {
              label: "Products",
              href: "https://amwerk.bold-themes.com/berlin/shop/",
              linkVariant: "",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Classic",
                  href: "https://amwerk.bold-themes.com/berlin/shop/",
                  linkVariant: "",
                },
                {
                  label: "Two columns",
                  href: "https://amwerk.bold-themes.com/berlin/shop/products-two-columns/",
                  linkVariant: "",
                },
                {
                  label: "Four columns",
                  href: "https://amwerk.bold-themes.com/berlin/shop/products-four-columns/",
                  linkVariant: "",
                },
                {
                  label: "Five columns",
                  href: "https://amwerk.bold-themes.com/berlin/shop/products-five-columns/",
                  linkVariant: "",
                },
                {
                  label: "Six columns",
                  href: "https://amwerk.bold-themes.com/berlin/shop/products-six-columns/",
                  linkVariant: "",
                },
                {
                  label: "Products categories",
                  href: "https://amwerk.bold-themes.com/berlin/shop/products-categories/",
                  linkVariant: "",
                },
              ],
            },
            {
              label: "Single product",
              href: "/berlin/product/socket-wrench-set/",
              linkVariant: "",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Standard product",
                  href: "/berlin/product/socket-wrench-set/",
                  linkVariant: "",
                },
                {
                  label: "Discounted product",
                  href: "/berlin/product/adjustable-knife-sharpener/",
                  linkVariant: "",
                },
                {
                  label: "Variable product",
                  href: "/berlin/product/cutting-set/",
                  linkVariant: "",
                },
                {
                  label: "Grouped product",
                  href: "/berlin/product/professional-tools-set/",
                  linkVariant: "",
                },
                {
                  label: "External product",
                  href: "/berlin/product/utility-replacement-blade/",
                  linkVariant: "",
                },
              ],
            },
            {
              label: "Shop pages",
              href: "https://amwerk.bold-themes.com/berlin/shop/cart/",
              linkVariant: "",
              hasSubMenu: true,
              subMenuItems: [
                {
                  label: "Cart",
                  href: "https://amwerk.bold-themes.com/berlin/shop/cart/",
                  linkVariant: "",
                },
                {
                  label: "Checkout",
                  href: "https://amwerk.bold-themes.com/berlin/shop/checkout/",
                  linkVariant: "",
                },
                {
                  label: "My Account",
                  href: "https://amwerk.bold-themes.com/berlin/shop/my-account/",
                  linkVariant: "",
                },
              ],
            },
          ]}
          itemVariant="md:pr-[25px]"
        />
      </ul>
    </nav>
  );
};

