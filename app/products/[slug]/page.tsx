import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "../../about/components/AnimatedSection";
import {
  specialCategoryGroups,
  humanizeSlug,
} from "../../../src/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bharatprod.com";

// Product data (same as in products page)
const products = [
  {
    id: "precision-high-quality-components",
    title: "Precision High Quality Components",
    category: "Sealing Solutions",
    description:
      "High-performance gaskets engineered for critical sealing applications in automotive and aerospace industries.",
    longDescription:
      "Our precision gaskets are manufactured using advanced materials and cutting-edge technology to ensure optimal sealing performance in the most demanding environments. These gaskets are designed to withstand extreme temperatures, pressures, and chemical exposure while maintaining their integrity over extended periods. Each gasket is precision-cut to exact specifications, ensuring perfect fit and reliable performance in critical applications.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    ],
    features: [
      "Temperature resistant up to 300°C",
      "Chemical resistant to acids and bases",
      "Custom shapes and sizes available",
      "High durability and longevity",
      "FDA approved materials",
      "Precision manufacturing",
    ],
    applications: [
      "Automotive engines",
      "Aerospace systems",
      "Industrial machinery",
      "Chemical processing",
      "Food processing",
      "Medical devices",
    ],
    specifications: {
      Material: "Various (EPDM, Silicone, Viton, etc.)",
      "Temperature Range": "-40°C to +300°C",
      "Pressure Rating": "Up to 150 PSI",
      Thickness: "0.5mm to 10mm",
      Hardness: "Shore A 40-90",
      Certifications: "FDA, NSF, WRAS",
    },
    price: "Custom Quote",
    leadTime: "2-3 weeks",
    minimumOrder: "100 pieces",
  },
  {
    id: "brass-turned-parts",
    title: "Brass Turned Parts",
    category: "Electronic Protection",
    description:
      "Advanced electromagnetic interference shielding solutions for sensitive electronic equipment.",
    longDescription:
      "Our EMI/RFI shielding products provide superior protection against electromagnetic interference in critical electronic applications. Using advanced conductive materials and innovative design techniques, these shields effectively attenuate unwanted electromagnetic signals while maintaining optimal performance of sensitive electronic components. Our solutions are customizable to meet specific frequency ranges and attenuation requirements.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
    ],
    features: [
      "High attenuation performance",
      "Conductive foam and fabric options",
      "Custom designs available",
      "Flexible and conformable",
      "Easy installation",
      "Multiple frequency ranges",
    ],
    applications: [
      "Consumer electronics",
      "Medical devices",
      "Telecommunications",
      "Automotive electronics",
      "Military equipment",
      "Aerospace systems",
    ],
    specifications: {
      "Shielding Effectiveness": "60-120 dB",
      "Frequency Range": "10 MHz to 18 GHz",
      Material: "Conductive foam, fabric, gaskets",
      Thickness: "1mm to 25mm",
      Compression: "10-50%",
      "Temperature Range": "-40°C to +125°C",
    },
    price: "From $25",
    leadTime: "1-2 weeks",
    minimumOrder: "50 pieces",
  },
  {
    id: "aluminium-parts",
    title: "Aluminium Parts",
    category: "Precision Components",
    description:
      "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    longDescription:
      "Our custom spacers and washers are precision-machined to exact specifications using state-of-the-art CNC equipment. These components are essential for maintaining proper spacing, alignment, and load distribution in mechanical assemblies. We work with a wide range of materials and can accommodate tight tolerances to ensure perfect fit and function in your specific application.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    ],
    features: [
      "Precision CNC machining",
      "Various materials available",
      'Tight tolerances ±0.001"',
      "Custom dimensions",
      "High-quality surface finish",
      "Volume production capability",
    ],
    applications: [
      "Automotive assemblies",
      "Electronic devices",
      "Machinery components",
      "Aerospace applications",
      "Medical equipment",
      "Industrial automation",
    ],
    specifications: {
      Materials: "Aluminum, Steel, Stainless Steel, Brass, Plastic",
      Tolerance: '±0.001" (±0.025mm)',
      "Diameter Range": '0.125" to 6" (3mm to 150mm)',
      "Thickness Range": '0.010" to 2" (0.25mm to 50mm)',
      "Surface Finish": "Ra 0.8-3.2 μm",
      "Coating Options": "Anodizing, Plating, Passivation",
    },
    price: "From $5",
    leadTime: "1-2 weeks",
    minimumOrder: "25 pieces",
  },
  {
    id: "mild-steel-parts",
    title: "Mild Steel Parts",
    category: "Precision Components",
    description:
      "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    longDescription:
      "Our custom spacers and washers are precision-machined to exact specifications using state-of-the-art CNC equipment. These components are essential for maintaining proper spacing, alignment, and load distribution in mechanical assemblies. We work with a wide range of materials and can accommodate tight tolerances to ensure perfect fit and function in your specific application.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    ],
    features: [
      "Precision CNC machining",
      "Various materials available",
      'Tight tolerances ±0.001"',
      "Custom dimensions",
      "High-quality surface finish",
      "Volume production capability",
    ],
    applications: [
      "Automotive assemblies",
      "Electronic devices",
      "Machinery components",
      "Aerospace applications",
      "Medical equipment",
      "Industrial automation",
    ],
    specifications: {
      Materials: "Aluminum, Steel, Stainless Steel, Brass, Plastic",
      Tolerance: '±0.001" (±0.025mm)',
      "Diameter Range": '0.125" to 6" (3mm to 150mm)',
      "Thickness Range": '0.010" to 2" (0.25mm to 50mm)',
      "Surface Finish": "Ra 0.8-3.2 μm",
      "Coating Options": "Anodizing, Plating, Passivation",
    },
    price: "From $5",
    leadTime: "1-2 weeks",
    minimumOrder: "25 pieces",
  },
  {
    id: "stainless-steel-parts",
    title: "Stainless Steel Parts",
    category: "Precision Components",
    description:
      "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    longDescription:
      "Our custom spacers and washers are precision-machined to exact specifications using state-of-the-art CNC equipment. These components are essential for maintaining proper spacing, alignment, and load distribution in mechanical assemblies. We work with a wide range of materials and can accommodate tight tolerances to ensure perfect fit and function in your specific application.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    ],
    features: [
      "Precision CNC machining",
      "Various materials available",
      'Tight tolerances ±0.001"',
      "Custom dimensions",
      "High-quality surface finish",
      "Volume production capability",
    ],
    applications: [
      "Automotive assemblies",
      "Electronic devices",
      "Machinery components",
      "Aerospace applications",
      "Medical equipment",
      "Industrial automation",
    ],
    specifications: {
      Materials: "Aluminum, Steel, Stainless Steel, Brass, Plastic",
      Tolerance: '±0.001" (±0.025mm)',
      "Diameter Range": '0.125" to 6" (3mm to 150mm)',
      "Thickness Range": '0.010" to 2" (0.25mm to 50mm)',
      "Surface Finish": "Ra 0.8-3.2 μm",
      "Coating Options": "Anodizing, Plating, Passivation",
    },
    price: "From $5",
    leadTime: "1-2 weeks",
    minimumOrder: "25 pieces",
  },
  {
    id: "copper-and-other-metal-parts",
    title: "Copper and Other Metal Parts",
    category: "Precision Components",
    description:
      "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    longDescription:
      "Our custom spacers and washers are precision-machined to exact specifications using state-of-the-art CNC equipment. These components are essential for maintaining proper spacing, alignment, and load distribution in mechanical assemblies. We work with a wide range of materials and can accommodate tight tolerances to ensure perfect fit and function in your specific application.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    ],
    features: [
      "Precision CNC machining",
      "Various materials available",
      'Tight tolerances ±0.001"',
      "Custom dimensions",
      "High-quality surface finish",
      "Volume production capability",
    ],
    applications: [
      "Automotive assemblies",
      "Electronic devices",
      "Machinery components",
      "Aerospace applications",
      "Medical equipment",
      "Industrial automation",
    ],
    specifications: {
      Materials: "Aluminum, Steel, Stainless Steel, Brass, Plastic",
      Tolerance: '±0.001" (±0.025mm)',
      "Diameter Range": '0.125" to 6" (3mm to 150mm)',
      "Thickness Range": '0.010" to 2" (0.25mm to 50mm)',
      "Surface Finish": "Ra 0.8-3.2 μm",
      "Coating Options": "Anodizing, Plating, Passivation",
    },
    price: "From $5",
    leadTime: "1-2 weeks",
    minimumOrder: "25 pieces",
  },
  {
    id: "forged-and-machined-components",
    title: "Forged and Machined Components",
    category: "Precision Components",
    description:
      "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    longDescription:
      "Our custom spacers and washers are precision-machined to exact specifications using state-of-the-art CNC equipment. These components are essential for maintaining proper spacing, alignment, and load distribution in mechanical assemblies. We work with a wide range of materials and can accommodate tight tolerances to ensure perfect fit and function in your specific application.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    ],
    features: [
      "Precision CNC machining",
      "Various materials available",
      'Tight tolerances ±0.001"',
      "Custom dimensions",
      "High-quality surface finish",
      "Volume production capability",
    ],
    applications: [
      "Automotive assemblies",
      "Electronic devices",
      "Machinery components",
      "Aerospace applications",
      "Medical equipment",
      "Industrial automation",
    ],
    specifications: {
      Materials: "Aluminum, Steel, Stainless Steel, Brass, Plastic",
      Tolerance: '±0.001" (±0.025mm)',
      "Diameter Range": '0.125" to 6" (3mm to 150mm)',
      "Thickness Range": '0.010" to 2" (0.25mm to 50mm)',
      "Surface Finish": "Ra 0.8-3.2 μm",
      "Coating Options": "Anodizing, Plating, Passivation",
    },
    price: "From $5",
    leadTime: "1-2 weeks",
    minimumOrder: "25 pieces",
  },
  // Add more products as needed...
];

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const productSlugs = products.map((p) => ({ slug: p.id }));
  const specialSlugs = Object.keys(specialCategoryGroups).map((slug) => ({
    slug,
  }));
  const unique = Array.from(
    new Set([
      ...productSlugs.map((o) => o.slug),
      ...specialSlugs.map((o) => o.slug),
    ])
  );
  return unique.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProductDetailProps): Metadata {
  const isSpecial = Object.prototype.hasOwnProperty.call(
    specialCategoryGroups,
    params.slug
  );
  if (isSpecial) {
    const name = humanizeSlug(params.slug);
    const url = `${siteUrl}/products/${params.slug}`;
    return {
      title: `${name} Products`,
      description: `Explore ${name} from Bharat Products. Precision-engineered components and sub‑categories with inquiry options.`,
      alternates: {
        canonical: `/products/${params.slug}`,
      },
      openGraph: {
        url,
        title: `${name} Products | Bharat Products`,
        description: `Discover ${name} categories and inquire directly.`,
        images: [
          {
            url: "/Final-Logo/1x/White BG Favicon.png",
            width: 512,
            height: 512,
            alt: "Bharat Products Logo",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${name} Products | Bharat Products`,
        description: `Discover ${name} categories and inquire directly.`,
        images: ["/Final-Logo/1x/White BG Favicon.png"],
      },
    };
  }

  const product = products.find((p) => p.id === params.slug);
  const title = product?.title || humanizeSlug(params.slug);
  const description =
    product?.description ||
    `${title} from Bharat Products. Precision‑engineered components with custom specifications.`;
  const url = `${siteUrl}/products/${params.slug}`;

  return {
    title: `${title} | Product Details`,
    description,
    alternates: {
      canonical: `/products/${params.slug}`,
    },
    openGraph: {
      url,
      title: `${title} | Bharat Products`,
      description,
      images: [
        {
          url: product?.image || "/Final-Logo/1x/White BG Favicon.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bharat Products`,
      description,
      images: [product?.image || "/Final-Logo/1x/White BG Favicon.png"],
    },
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  // If this slug is a special category (e.g., brass-turned-parts), render grouped listing
  const groups = (specialCategoryGroups as Record<string, any>)[params.slug] as
    | { title: string; items: { title: string; image?: string }[] }[]
    | undefined;

  const initials = (title: string) =>
    title
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  if (groups && groups.length > 0) {
    const title = humanizeSlug(params.slug);
    return (
      <div className="relative overflow-hidden">
        {/* JSON-LD for CollectionPage and Breadcrumbs */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: `${title} Products`,
              url: `${siteUrl}/products/${params.slug}`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${siteUrl}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: `${siteUrl}/products`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: title,
                  item: `${siteUrl}/products/${params.slug}`,
                },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
            <div className="absolute top-36 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-300" />
            <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-gray-400/20 rounded-full animate-ping delay-700" />
          </div>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-center">
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
                // PRODUCTS //
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={150}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-red_hat_display">
                {title}
              </h1>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={300}>
              <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
                Explore the complete range under this category. Click Inquire
                now to contact us directly.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Grouped Listing */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            {groups.map((g, gi) => (
              <AnimatedSection
                key={g.title}
                animationType="fade-up"
                delay={gi * 100}
              >
                <div className="mb-5 md:mb-6 flex items-center gap-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-red_hat_display">
                    {g.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
                  {g.items.map((it: { title: string; image?: string }) => (
                    <div
                      key={it.title}
                      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden border border-gray-200"
                    >
                      {/* Image Section – takes most space */}
                      <div className="relative h-[180px] md:h-[220px] lg:h-[240px] bg-gradient-to-br from-gray-100 to-gray-50">
                        {it.image ? (
                          <Image
                            src={it.image}
                            alt={it.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                              {initials(it.title)}
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>

                      {/* Text + Button – compact */}
                      <div className="p-4 flex justify-between items-center">
                        <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                          {it.title}
                        </h3>

                        <Link
                          href={`/contact?product=${encodeURIComponent(
                            it.title
                          )}`}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white leading-none hover:shadow-md"
                        >
                          Inquire now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}

            <div className="text-center mt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold text-foreground hover:bg-gray-50"
              >
                ← Back to all products
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    return (
      <div className="relative overflow-hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link
              href="/products"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* JSON-LD for Product and Breadcrumbs */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            image: [product.image],
            description: product.description,
            brand: { "@type": "Brand", name: "Bharat Products" },
            url: `${siteUrl}/products/${params.slug}`,
            category: product.category,
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${siteUrl}/products`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.title,
                item: `${siteUrl}/products/${params.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-yellow-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Product Images */}
            <AnimatedSection animationType="slide-left" delay={0}>
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="relative w-full h-96">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((img, index) => (
                    <AnimatedSection
                      key={index}
                      animationType="scale"
                      delay={200 + index * 100}
                    >
                      <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                        <div className="relative w-full h-24">
                          <Image
                            src={img}
                            alt={`${product.title} ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 20vw"
                          />
                        </div>
                        <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Product Information */}
            <AnimatedSection animationType="slide-right" delay={200}>
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <AnimatedSection animationType="fade-up" delay={400}>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </AnimatedSection>

                  <AnimatedSection animationType="fade-up" delay={600}>
                    <h1 className="text-4xl lg:text-5xl font-bold text-black mt-4 mb-6 font-red_hat_display">
                      {product.title}
                    </h1>
                  </AnimatedSection>

                  <AnimatedSection animationType="fade-up" delay={800}>
                    <p className="text-lg text-gray-700 leading-8 mb-6">
                      {product.longDescription}
                    </p>
                  </AnimatedSection>
                </div>

                {/* Key Features */}
                <AnimatedSection animationType="fade-up" delay={1000}>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <AnimatedSection
                          key={index}
                          animationType="slide-left"
                          delay={1200 + index * 100}
                        >
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover-lift">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Pricing & CTA */}
                <AnimatedSection animationType="fade-up" delay={1400}>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">
                          {product.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          Lead Time: {product.leadTime}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          Minimum Order
                        </div>
                        <div className="font-semibold text-gray-800">
                          {product.minimumOrder}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="flex-1 bg-yellow-500 text-white text-center font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105"
                      >
                        Request Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 border-2 border-yellow-500 text-yellow-600 text-center font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <AnimatedSection animationType="slide-left" delay={0}>
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 font-red_hat_display">
                  Technical Specifications
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <AnimatedSection
                          key={key}
                          animationType="fade-up"
                          delay={200 + index * 100}
                        >
                          <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                            <span className="font-semibold text-gray-700">
                              {key}:
                            </span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        </AnimatedSection>
                      )
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Applications */}
            <AnimatedSection animationType="slide-right" delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 font-red_hat_display">
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.applications.map((app, index) => (
                    <AnimatedSection
                      key={index}
                      animationType="scale"
                      delay={400 + index * 100}
                    >
                      <div className="bg-white p-4 rounded-xl shadow-lg hover-lift group cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          </div>
                          <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                            {app}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Related Products
              </h2>
              <p className="text-lg text-gray-600">
                Explore other products that might interest you
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <AnimatedSection
                  key={relatedProduct.id}
                  animationType="fade-up"
                  delay={200 + index * 200}
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                          {relatedProduct.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedProduct.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-yellow-500 font-semibold">
                            {relatedProduct.price}
                          </span>
                          <div className="text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                            View Details →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
