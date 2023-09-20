import Product from "@/components/cards/product";
import saphir from "@images/lot saphir.jpg";

export default function Home() {
  return (
    <div>
      <Product
        data={{ href: "", name: "Lot of Garnet test erer", image: saphir }}
      ></Product>
    </div>
  );
}
