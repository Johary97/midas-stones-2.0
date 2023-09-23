import Link from "next/link";
import styles from "@styles/Nav.module.css";
import Menu from "@/components/navigations/menu";
import { categoriesAtom, currentCategoryAtom } from "@atoms/categoryAtom";
import { getAll } from "@services/category";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Nav() {
  const [categoriesValue, setCategoriesAtom] = useRecoilState(categoriesAtom);
  const currentCategory = useRecoilValue(currentCategoryAtom);
  useEffect(() => {
    if (categoriesValue.length == 0) {
      getAll("").then((categories) => {
        const c = categories.data.map((category) => {
          return {
            ...category,
            url:
              category.nomCategorie.toLowerCase().replaceAll(" ", "-") +
              "-" +
              category.id,
          };
        });
        setCategoriesAtom(c);
      });
    }
  }, [categoriesValue, setCategoriesAtom]);
  return (
    <>
      {currentCategory && (
        <div
          className={`${styles.container} inline-flex items-center justify-center`}
        >
          <div
            className={`${styles.content} container flex flex-wrap items-center justify-center mt-2`}
          >
            <Menu
              href="/products/list"
              caption="All Stones"
              active={currentCategory.value == "list"}
            ></Menu>
            {categoriesValue &&
              categoriesValue.map((c) => (
                <Menu
                  href={`/categories/${c.url}`}
                  key={c.id}
                  caption={c.nomCategorie}
                  active={c.url.split("/").slice(-1) == currentCategory.value}
                ></Menu>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
