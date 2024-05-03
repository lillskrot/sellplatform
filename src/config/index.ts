export const PRODUCT_CATEGORIES = [
  {
    label: "Decals & Stickers",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Bestsellers",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/wanted1-1024x1365.webp",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/ui-kits/shifter_hoodie.jpg",
      },
      {
        name: "Customer Favorites",
        href: "/products?category=gadgets",
        imageSrc: "/nav/ui-kits/GlowMat.png",
      },
    ],
  },
  {
    label: "Car Accessories",
    value: "icons" as const,
    featured: [
      {
        name: "Bestsellers",
        href: `/products?category=icons`,
        imageSrc: "/nav/icons/",
      },
      {
        name: "New Arrivals",
        href: "/products?category=icons&sort=desc",
        imageSrc: "/nav/icons/",
      },
      {
        name: "Customer Favorites",
        href: "/products?category=gadgets",
        imageSrc: "/nav/gadgets/",
      },
    ],
  },
  {
    label: "Gadgets",
    value: "gadgets" as const,
    featured: [
      {
        name: "Bestsellers",
        href: "/products?category=gadgets&sort=desc",
        imageSrc: "/nav/gadgets/new_arrivals.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=gadgets",
        imageSrc: "/nav/gadgets/bestsellers.jpg",
      },
      {
        name: "Customer Favorites",
        href: "/products?category=gadgets",
        imageSrc: "/nav/gadgets/bestsellers.jpg",
      },
    ],
  },
];
