import Image from "next/image";
import ProductList from "../components/ProductList";

export default async function Home({searchParams}:{searchParams:Promise<{category:string}>}) {
  const category = (await searchParams).category;
  // console.log("category name",category);
  return (
    <div>
        <div className="relative aspect-3/1 mb-12">
            <Image src="/featured.png" alt="Featured product"  fill/>
        </div>

        <ProductList category={category} pageType="Homepage"/>
    </div>
  );
}
