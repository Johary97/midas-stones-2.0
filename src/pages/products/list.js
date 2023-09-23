import { getAll } from "@services/product";
import { useRecoilState, useSetRecoilState } from "recoil";
import { productsAtom, currentProductAtom } from "@atoms/productAtom";
import { useEffect } from "react";
import Product from "@components/cards/product";
import { currentCategoryAtom } from "@atoms/categoryAtom";
import { currentPageAtom } from "@atoms/pageAtom";

export default function List() {
  const [productsValue, setProductsAtom] = useRecoilState(productsAtom);
  const setCurrentCategory = useSetRecoilState(currentCategoryAtom);
  const setCurrentProduct = useSetRecoilState(currentProductAtom);
  const setCurrentPage = useSetRecoilState(currentPageAtom);

  useEffect(() => {
    setCurrentCategory({ caption: "All Stones", value: "list" });
    setCurrentPage({ caption: "All Stones" });
    setCurrentProduct(null);

    getAll().then((products) => {
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
  }, [setProductsAtom, setCurrentCategory, setCurrentProduct, setCurrentPage]);

  return (
    <div className="flex flex-wrap justify-around" style={{ gap: "16px" }}>
      {productsValue.map((product) => (
        <Product key={product.id} data={product}></Product>
      ))}
    </div>
  );
}
