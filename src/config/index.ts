export const PRODUCT_CATEGORIES = [
  {
    label: "Decals & Stickers",
    value: "Decals_Stickers" as const,
    featured: [
      {
        name: "GTA Wanted Sign",
        href: "/products?category=Decals_Stickers&sort=desc",
        imageSrc: "/nav/Decals_Stickers/wanted1-1024x1365.webp",
      },
      {
        name: "Electric Hearts",
        href: "/products?category=Decals_Stickers",
        imageSrc: "/nav/Decals_Stickers/shifter_hoodie.jpg",
      },
      {
        name: "Number Plate Frame",
        href: "/products?category=Decals_Stickers",
        imageSrc: "/nav/Decals_Stickers/GlowMat.png",
      },
    ],
  },
  {
    label: "Car Accessories",
    value: "CarAccessories" as const,
    featured: [
      {
        name: "Floor Mats",
        href: `/products?category=CarAccessories`,
        imageSrc: "/nav/CarAccessories/",
      },
      {
        name: "Example2",
        href: "/products?category=CarAccessories&sort=desc",
        imageSrc: "/nav/CarAccessories/",
      },
      {
        name: "Example2",
        href: "/products?category=CarAccessories",
        imageSrc: "/nav/CarAccessories/",
      },
    ],
  },
  {
    label: "Gadgets",
    value: "gadgets" as const,
    featured: [
      {
        name: "Shifter Hoodie",
        href: "/products?category=gadgets&sort=desc",
        imageSrc: "/nav/gadgets/new_arrivals.jpg",
      },
      {
        name: "Device Holders",
        href: "/products?category=gadgets",
        imageSrc: "/nav/gadgets/bestsellers.jpg",
      },
      {
        name: "Rearview Mirror Charms",
        href: "/products?category=gadgets",
        imageSrc: "/nav/gadgets/bestsellers.jpg",
      },
    ],
  },
];
