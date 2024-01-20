import { Partners } from "../types/PartnersType";
import { Category, Product, sareeCottonSubCategory, sareeSubCategory } from "../types/catalogTypes";

const productList: Product[] = [
  {
    id: "1211",
    name: "Sounth Indian Cotton Saree",
    details: "Authentic South Indian Cotton Saree, Embracing Timeless Tradition and Graceful Comfort",
    category: Category.saree,
    subCategory: sareeSubCategory.cotton,
    nestedCategory: sareeCottonSubCategory.cottonPrinted,
    type: "Type 2",
    price: "780",
    hPrice: "1200",
    company: Partners.navdurgaFabrics,
    discount: 10,
    trending: false,
    imgSrc: "/assets/product/southsaree.png"
  },
  {
    id: "1212",
    name: "Designer Shawl",
    details: "Authentic South Indian ",
    category: Category.woolenWinter,
    subCategory: "shawl",
    nestedCategory: "",
    type: "Type 3",
    price: "2000",
    hPrice: "3000",
    company: Partners.bilashraiK,
    discount: 17,
    trending: true,
    imgSrc: "/assets/product/shawl.jpeg"

  },
  {
    id: "1213",
    name: "Designer Curtains",
    details: "Wonderful blended terrycotton shirt with accentric colors",
    category: Category.suiting,
    subCategory: "Blended Terrycotton",
    nestedCategory: "",
    type: "Type 4",
    price: "3000",
    hPrice: "3400",
    company: Partners.arvindKomar,
    discount: 10,
    trending: true,
    imgSrc: "/assets/product/terrycotton.png"

  },
  {
    id: "1214",
    name: "Gorgeous Purple Organza Suit",
    details: "Wine Floral Organza Anarkali Suit ",
    category: Category.salwarSuit,
    subCategory: "Organza Suit",
    nestedCategory: "",
    type: "Type 5",
    price: "200",
    hPrice: "500",
    company: Partners.MPFab,
    discount: 20,
    trending: false,
    imgSrc: "/assets/product/osuit.png"

  },
];

export default productList;
