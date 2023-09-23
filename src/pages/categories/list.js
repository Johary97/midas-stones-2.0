import { getAll } from "@services/category";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoriesAtom } from "@atoms/categoryAtom";
import { useEffect } from "react";
import Category from "@components/cards/category";
import { currentCategoryAtom } from "@atoms/categoryAtom";

export default function List() {
  const [categoriesValue, setCategoriesAtom] = useRecoilState(categoriesAtom);
  const setCurrentCategory = useSetRecoilState(currentCategoryAtom);
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
    setCurrentCategory(null);
  }, [categoriesValue, setCategoriesAtom, setCurrentCategory]);

  return (
    <div className="flex flex-wrap justify-around" style={{ gap: "16px" }}>
      {categoriesValue.map((category) => (
        <Category key={category.id} data={category}></Category>
      ))}
    </div>
  );
}
