// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Category {
  name: string;
  slug: string;
};

export interface ImageInterface {
  fileName?: string;
  id: string;
  url: string;
};

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  categories?: Category[];
  images?: ImageInterface[];
};
