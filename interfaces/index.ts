// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Category = {
  name: string;
  slug: string;
};

export type Image = {
  fileName?: string;
  id: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  categories?: Category[];
  images?: Image[];
};
