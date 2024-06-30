import LatestProducts from "@/components/home/latest-products";
import About from "@/components/shared/about";
import { Slider } from "@/components/shared/slider";
import { CAROUSEL_IMAGES } from "@/consts";

export default function Home() {
     return (
          <div className="grid">
               <Slider images={CAROUSEL_IMAGES} />
               <LatestProducts />
               <About />
          </div>
     );
}
