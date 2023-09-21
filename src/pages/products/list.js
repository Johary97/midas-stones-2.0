import { get_all } from "@services/product";
import { useRecoilState } from "recoil";
import { productsAtom } from "@atoms/productAtom";
import { useEffect } from "react";
import Product from "@components/cards/product";

export default function List() {
  const [productsValue, setProductsAtom] = useRecoilState(productsAtom);

  useEffect(() => {
    get_all().then((products) => {
      const p = products.map((product) => {
        return {
          ...product,
          url:
            product.nomProduit.toLowerCase().replaceAll(" ", "-") +
            "-" +
            product.id,
        };
      });
      setProductsAtom(p);
    });
  }, [setProductsAtom]);

  return (
    <div className="flex flex-wrap" style={{ gap: "16px" }}>
      {productsValue.map((product) => (
        <Product key={product.id} data={product}></Product>
      ))}
    </div>
  );
}
