import { getCategoryProducts } from "@services/category";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentCategoryAtom,
  productByCategoryAtom,
} from "@atoms/categoryAtom";
import { useEffect } from "react";
import Product from "@components/cards/product";
import { useRouter } from "next/router";

// Resolves query or returns null
function useQuery() {
  const router = useRouter();
  const hasQueryParams =
    /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
  const ready = !hasQueryParams || Object.keys(router.query).length > 0;
  if (!ready) return null;
  return router.query;
}

export default function List() {
  const setCurrentCategory = useSetRecoilState(currentCategoryAtom);
  const [productByCategory, setProductByCategory] = useRecoilState(
    productByCategoryAtom
  );
  const query = useQuery();
  useEffect(() => {
    if (!query) {
      return;
    }
    const strId = query.id;
    setCurrentCategory(strId);
    if (!productByCategory[strId]) {
      const id = strId.split("-").slice(-1);
      getCategoryProducts(id).then((products) => {
        console.log(products);
        const p = products.data.data.map((product) => {
          return {
            ...product,
            url:
              product.nomProduit.toLowerCase().replaceAll(" ", "-") +
              "-" +
              product.id,
          };
        });
        const pc = { ...productByCategory };
        pc[strId] = p;
        setProductByCategory(pc);
      });
    }
  }, [setCurrentCategory, productByCategory, setProductByCategory, query]);

  return (
    <div className="flex flex-wrap" style={{ gap: "16px" }}>
      {productByCategory[query.id] &&
        productByCategory[query.id].map((product) => (
          <Product key={product.id} data={product}></Product>
        ))}
    </div>
  );
}
