import Image from "next/image";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
        <div className="relative aspect-3/1 mb-12">
            <Image src="/featured.png" alt="Featured product"  fill/>
        </div>

        <ProductList/>
    </div>
  );
}
