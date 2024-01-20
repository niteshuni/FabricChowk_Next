

export type Product = {
  name: string;
  details: string;
  category: string;
  subCategory: string;
  nestedCategory: string;
  type: string;
  price: string;
  hPrice: string;
  company: string;
  discount: number;
  trending: boolean;
  imgSrc: string;
  paymentBuffer?: string;
  id: string;
};

export const Category = {
  salwarSuit: "Salwar Suit",
  essentialPrint: "Essentials & Prints",
  homeFurnishingFabric: "Home Furnishing Fabrics",
  woolenWinter: "Woolen & Winter wear",
  suiting: "Suiting",
  shirting: "Shirting",
  saree: "Saree",
} as const;

export type Category = typeof Category;

export const SuitingSubCategory = {
  pureCotton: "Pure Cotton",
  blendedWoolen: "Clended Woolen",
  blendedTerryCotton: "Blended Terrycotton",
} as const;

export const ShirtingSubCategory = {
  pureCotton: "Pure Cotton",
  blendedTerryCotton: "Blended Terrycotton",
  blendedCootswool: "Blended Cootswool",
} as const;

export const sareeSubCategory = {
  cotton: "Cotton",
  silk: "Silk",
  synthetic: "Synthetic",
} as const;

export const sareeCottonSubCategory = {
  southCotton: "South Cotton",
  handloomCotton: "Handloom Cotton",
  cottonPrinted: "Cotton Printed",
  cottonThreadWork: "Cotton Thread Work",
  bangaladeshiCotton: "Bangaladeshi (BD) Cotton",
  pochampaliCotton: "Pochampali Cotton",
} as const;

export const sareeSilkSubCategory = {
  mulberryPrintedSilk: "Mulberry Printed Silk",
  tussarSilk: "Tussar Silk",
  southSilk: "South Silk",
} as const;
