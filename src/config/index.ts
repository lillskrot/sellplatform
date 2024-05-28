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
        imageSrc: "/nav/decals_stickers/heart1.png",
      },
      {
        name: "Boost Loading Sticker",
        href: "/products?category=Decals_Stickers",
        imageSrc: "/nav/decals_stickers/ledusbboostloading1.jpg",
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
        imageSrc: "/nav/decals_stickers/GlowMat.png",
      },
      {
        name: "More items coming soon!",
        href: "/products?category=CarAccessories",
        imageSrc: "/nav/decals_stickers/ComingSoon.png",
      },
      {
        name: "More items coming soon!",
        href: "/products?category=CarAccessories",
        imageSrc: "/nav/decals_stickers/ComingSoon.png",
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
        imageSrc: "/nav/decals_stickers/shifter_hoodie.jpg",
      },
      {
        name: "Device Holders",
        href: "/products?category=gadgets",
        imageSrc: "/nav/decals_stickers/phoneholder.jpg",
      },
      {
        name: "Rearview Mirror Charms",
        href: "/products?category=gadgets",
        imageSrc: "/nav/decals_stickers/7198gP0UgxL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
];
