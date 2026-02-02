export type ProductLite = {
    id: string;
    title: string;
    category: string;
    image: string;
};

export const products: ProductLite[] = [
    // {
    //     id: "precision-high-quality-components",
    //     title: "Precision High Quality Components",
    //     category: "Precision Engineering",
    //     image: "/images/products/precision-brass-components.jpg",
    // },
    {
        id: "brass-turned-parts",
        title: "Brass Turned Parts",
        category: "Brass Components",
        image: "/images/products/brass-turned-parts.jpg",
    },
    {
        id: "aluminium-parts",
        title: "Aluminium Parts",
        category: "Lightweight Components",
        image: "/images/products/aluminium-parts.jpg",
    },
    {
        id: "mild-steel-parts",
        title: "Mild Steel Parts",
        category: "Structural Components",
        image: "/images/products/mild-steel-parts.jpg",
    },
    {
        id: "stainless-steel-parts",
        title: "Stainless Steel Parts",
        category: "Corrosion Resistant Components",
        image: "/images/products/stainless-steel-parts.jpg",
    },
    {
        id: "automotive-parts",
        title: "Automotive Parts",
        category: "Automotive Components",
        image: "/images/products/automotive-parts/auto_1.jpg",
    },
    {
        id: "copper-and-other-metal-parts",
        title: "Copper and Other Metal Parts",
        category: "Custom Metal Components",
        image: "/images/products/copper-and-other-metal-parts.jpg",
    },
    {
        id: "forged-and-machined-components",
        title: "Forged and Machined Components",
        category: "Heavy Duty Components",
        image: "/images/products/forged.jpg",
    },
];

export const categorySlug = (name: string) =>
    name
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

export const allCategories = () =>
    Array.from(new Set(products.map((p) => p.category)));

export const categoryFromSlug = (slug: string) =>
    allCategories().find((c) => categorySlug(c) === slug) || null;

export const getProductsByCategorySlug = (slug: string) => {
    const name = categoryFromSlug(slug);
    if (!name) return [] as ProductLite[];
    return products.filter((p) => p.category === name);
};

export type CategoryGroupItem = { title: string; image?: string };
export type CategoryGroup = { title: string; items: CategoryGroupItem[] };

export const specialCategoryGroups: Record<string, CategoryGroup[]> = {
    "precision-high-quality-components": [
        {
            title: "Precision Raw Materials",
            items: [
                { title: "Precision Hollow Rods" },
                { title: "Precision Solid Rods" },
                { title: "Precision Sheets" },
                { title: "Precision Wire" },
                { title: "Precision Copper Wire" },
            ],
        },
    ],
    "brass-turned-parts": [
        {
            title: "Brass Raw Materials",
            items: [
                {
                    title: "Brass Hollow Rods",
                    image: "/images/products/brass-turned-parts/imgi_6_brass-hollow.jpg",
                },
                {
                    title: "Brass Solid Rods",
                    image: "/images/products/brass-turned-parts/imgi_7_brass-solid-rod.jpg",
                },
                {
                    title: "Brass Sheets",
                    image: "/images/products/brass-turned-parts/imgi_8_brass-section.jpg",
                },
                {
                    title: "Brass Wire",
                    image: "/images/products/brass-turned-parts/imgi_9_brass-wire.jpg",
                },
                {
                    title: "Copper Wire",
                    image: "/images/products/brass-turned-parts/imgi_10_copper-wire.jpg",
                },
            ],
        },

        {
            title: "Brass Fittings & Inserts",
            items: [
                {
                    title: "Brass Anchors & Moulding Inserts",
                    image: "/images/products/brass-turned-parts/imgi_11_brass-anchors-moulding-inserts.jpg",
                },
                {
                    title: "Brass Manifolds",
                    image: "/images/products/brass-turned-parts/imgi_12_brass-manifolds.jpg",
                },
                {
                    title: "Brass Plug & Socket Pins",
                    image: "/images/products/brass-turned-parts/imgi_13_brass-plug-and-socket-pins.jpg",
                },
                {
                    title: "Brass Forged Fittings",
                    image: "/images/products/brass-turned-parts/imgi_21_forged-fittings.jpg",
                },
            ],
        },

        {
            title: "Brass Precision Components",
            items: [
                {
                    title: "Brass Precision Turned Components",
                    image: "/images/products/brass-turned-parts/imgi_14_brass-precision-turned-components.jpg",
                },
                {
                    title: "Studs, Washers & Nuts",
                    image: "/images/products/brass-turned-parts/imgi_15_brass-stud-washers.jpg",
                },
            ],
        },

        {
            title: "Gas, CNG & Industrial Fittings",
            items: [
                {
                    title: "BS 746 Standard Gas Meter Regulator Parts",
                    image: "/images/products/brass-turned-parts/imgi_17_bs746-standard-gas-meter-regulator-parts.jpg",
                },
                {
                    title: "CNG Fittings",
                    image: "/images/products/brass-turned-parts/imgi_18_cng-fittings.jpg",
                },
                {
                    title: "Flare & Air Brake Fittings",
                    image: "/images/products/brass-turned-parts/imgi_19_flare-and-air-brake-fittings.jpg",
                },
                {
                    title: "Flare Fittings",
                    image: "/images/products/brass-turned-parts/imgi_20_flare-fittings.jpg",
                },
                {
                    title: "Hose Nipple Fittings",
                    image: "/images/products/brass-turned-parts/imgi_22_hose-nipple-fittings.jpg",
                },
                {
                    title: "Pipe Fittings",
                    image: "/images/products/brass-turned-parts/imgi_23_pipe-fittings.jpg",
                },
                {
                    title: "Transition & Electrofusion Fittings",
                    image: "/images/products/brass-turned-parts/imgi_24_transition-and-electrofusion-fittings.jpg",
                },
            ],
        },

        {
            title: "Electrical Components",
            items: [
                {
                    title: "Brass Anchors & Moulding Inserts",
                    image: "/images/products/brass-turned-parts/imgi_25_brass-anchors-and-moulding-lnserts.jpg",
                },
                {
                    title: "Earth & Neutral Links",
                    image: "/images/products/brass-turned-parts/imgi_26_earth-and-neutral-links.jpg",
                },
                {
                    title: "Electrical Modular Switch Parts",
                    image: "/images/products/brass-turned-parts/imgi_27_electrical-modular-switch-parts.jpg",
                },
                {
                    title: "Line, Neutral & Earth Plug Pins",
                    image: "/images/products/brass-turned-parts/imgi_28_line-and-neutral-earth-plug-pins.jpg",
                },
            ],
        },

        {
            title: "Automobile Parts",
            items: [
                {
                    title: "Automative Components",
                    image: "/images/products/brass-turned-parts/imgi_29_contact-pins.jpg",
                },
            ],
        },

        {
            title: "Sanitary Fittings",
            items: [
                {
                    title: "Piping & Sanitary Fittings",
                    image: "/images/products/brass-turned-parts/imgi_30_piping-and-sanitary-fittings.jpg",
                },
            ],
        },

        {
            title: "Cable Glands & Accessories",
            items: [
                {
                    title: "AIA2 Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_31_a1a2-cable-gland.jpg",
                },
                {
                    title: "BW4 Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_32_bw-4-part-cable-gland.jpg",
                },
                {
                    title: "BW Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_33_bw-cable-gland.jpg",
                },
                {
                    title: "CW Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_34_cw-cable-gland.jpg",
                },
                {
                    title: "Double Compression Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_35_double-compression-cable-gland.jpg",
                },
                {
                    title: "ELW Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_36_e1w-cable-gland.jpg",
                },
                {
                    title: "Single Compression Cable Gland",
                    image: "/images/products/brass-turned-parts/imgi_37_single-compression-cable-gland.jpg",
                },
            ],
        },

        {
            title: "Single Pole Cam Lok Connectors",
            items: [
                {
                    title: "Single Pole Cam Lok Connector",
                    image: "/images/products/brass-turned-parts/imgi_38_cam-lok-01.jpg",
                },
                {
                    title: "Single Pole Cam Lok Plug",
                    image: "/images/products/brass-turned-parts/imgi_43_single-pole-cam-lok.jpg",
                },
            ],
        },
    ],

    "aluminium-parts": [
        {
            title: "Aluminium Machined Components",
            items: [
                {
                    title: "CNC Aluminium Machined Components",
                    image: "/images/products/aluminium-parts/imgi_6_aluminium-parts-2.jpg",
                },
                {
                    title: "Precision Aluminium Machined Parts",
                    image: "/images/products/aluminium-parts/imgi_7_aluminium-parts-3.jpg",
                },
                {
                    title: "Custom Aluminium Machined Components",
                    image: "/images/products/aluminium-parts/imgi_8_aluminium-parts-4.jpg",
                },
            ],
        },
        {
            title: "Casting Solutions",
            items: [
                {
                    title: "Die Casting Components",
                    image: "/images/products/aluminium-parts/imgi_9_aluminium-parts-6.jpg",
                },
                {
                    title: "Investment Casting Parts",
                    image: "/images/products/aluminium-parts/imgi_10_aluminium-parts-7.jpg",
                },
            ],
        },
    ],

    "mild-steel-parts": [
        {
            title: "Mild Steel Components",
            items: [

                {
                    title: "Precision Machined MS Parts",
                    image: "/images/products/mild-steel-parts/imgi_6_marine-fittings.jpg",
                },
                {
                    title: "MS Adaptors",
                    image: "/images/products/mild-steel-parts/imgi_7_ms-adaptors.jpg",
                },
            ],
        },
    ],
    "stainless-steel-parts": [
        {
            title: "Stainless Steel Components",
            items: [
                {
                    title: "Stainless Steel Parts",
                    image: "/images/products/stainless-steel-parts/imgi_6_ss-products.jpg",
                },
                {
                    title: "Precision Machined Stainless Steel Parts",
                    image: "/images/products/stainless-steel-parts/imgi_7_ss-products-1.jpg",
                },
                {
                    title: "Custom Stainless Steel Components",
                    image: "/images/products/stainless-steel-parts/imgi_8_ss-products-2.jpg",
                },
            ],
        },
    ],

    "automotive-parts": [
        {
            title: "Automotive Components",
            items: [
                {
                    title: "Automative Components", image: "/images/products/automotive-parts/auto_1.jpg",
                },
                {
                    title: "Automative Components", image: "/images/products/automotive-parts/auto_2.jpg",
                },
                {
                    title: "Automative Components", image: "/images/products/automotive-parts/auto_3.jpg",
                },
                {
                    title: "Automative Components", image: "/images/products/automotive-parts/auto_4.jpg",
                },
            ],
        },
    ],
    "copper-and-other-metal-parts": [
        {
            title: "Copper Components",
            items: [
                { title: "Precision Machined Copper Parts", image: "/images/products/copper-and-other-metal-parts/2663784727_copper-and-other-metal-products-2.jpg" },
            ],
        },
    ],
    "forged-and-machined-components": [
        {
            title: "Forged Components",
            items: [
                {
                    title: "Forged Parts", image: "/images/products/forged-and-machined-components/forged-parts.jpg",

                },
                {
                    title: "Precision Machined Forged Parts", image: "/images/products/forged-and-machined-components/precision-machined-forged-parts.jpg",
                },
                {
                    title: "Custom Forged Components", image: "/images/products/forged-and-machined-components/custom-forged-components.jpg",
                },
            ],
        },
    ],

};

export const humanizeSlug = (slug: string) =>
    slug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
