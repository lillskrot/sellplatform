/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    products: Product;
    media: Media;
    product_files: ProductFile;
    orders: Order;
    colors: Color;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  postalcode?: string | null;
  city?: string | null;
  address?: string | null;
  Country?: string | null;
  Lastname?: string | null;
  Firstname?: string | null;
  Apartment?: string | null;
  products?: (string | Product)[] | null;
  product_files?: (string | ProductFile)[] | null;
  role: 'admin' | 'user';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  user?: (string | null) | User;
  name: string;
  description?: string | null;
  price: number;
  category: 'Decals_Stickers' | 'CarAccessories' | 'Framed_3D_models' | 'Accessories_and_Posters';
  product_files?: (string | null) | ProductFile;
  approvedForSale?: ('pending' | 'approved' | 'denied') | null;
  priceId?: string | null;
  stripeId?: string | null;
  images: {
    image: string | Media;
    id?: string | null;
  }[];
  color: string | Color;
  parentId?: (string | null) | Product;
  related?: (string | Product)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_files".
 */
export interface ProductFile {
  id: string;
  user?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  user?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnailTUB?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "colors".
 */
export interface Color {
  id: string;
  name: string;
  hex: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  _isPaid: boolean;
  user: string | User;
  products: (string | Product)[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}