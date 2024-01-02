import SideBarFilter from "@/components/SideFilter/SideBarFilter";
import { ProductCard } from "@/components/shared/ProductCard";
import ResponsiveFilterDrawer from "@/components/shared/ResponsiveFilterDrawer";
import SerachFilterBar from "@/components/shared/SerachFilterBar";
import productList from "@/constants/catalogList";


export default function Product() {
  return (
    <main className="flex flex-col items-center justify-center mt-40">
      <SerachFilterBar />
      <ResponsiveFilterDrawer
        content={<ProductCard productList={productList} />}
        sidebar={<SideBarFilter />}
      />
    </main>
  );
}
