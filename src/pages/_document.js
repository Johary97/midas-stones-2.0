/* eslint-disable @next/next/google-font-display */
import { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { currentCategoryAtom } from "@atoms/categoryAtom";
import { getAll } from "@services/product";
import { useSetRecoilState } from "recoil";
import { productsAtom } from "@atoms/productAtom";

export default function Document() {
  const setProductsAtom = useSetRecoilState(productsAtom);
  const setCurrentCategory = useSetRecoilState(currentCategoryAtom);
  useEffect(() => {
    setCurrentCategory({ caption: "All Stones", value: "list" });
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
  }, [setProductsAtom, setCurrentCategory]);
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
