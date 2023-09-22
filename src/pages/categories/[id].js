import { getCategoryProducts } from "@services/category";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentCategoryAtom,
  productByCategoryAtom,
  categoriesAtom,
} from "@atoms/categoryAtom";
import { currentProductAtom } from "@atoms/productAtom";
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
  const setCurrentProduct = useSetRecoilState(currentProductAtom);
  const [productByCategory, setProductByCategory] = useRecoilState(
    productByCategoryAtom
  );
  const categories = useRecoilValue(categoriesAtom);
  setCurrentProduct(null);
  const query = useQuery();
  useEffect(() => {
    if (!query || !categories) {
      return;
    }
    const strId = query.id;
    const id = strId.split("-").slice(-1);
    const category = categories.find((item) => item.id == id);
    if (!categories.length || !category) {
      return;
    }
    setCurrentCategory({
      caption: category.nomCategorie,
      value: strId,
    });
    if (!productByCategory[strId]) {
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
  }, [
    setCurrentCategory,
    productByCategory,
    setProductByCategory,
    query,
    categories,
  ]);

  return (
    <div className="flex flex-wrap" style={{ gap: "16px" }}>
      {query &&
        productByCategory[query.id] &&
        productByCategory[query.id].map((product) => (
          <Product key={product.id} data={product}></Product>
        ))}
    </div>
  );
}
