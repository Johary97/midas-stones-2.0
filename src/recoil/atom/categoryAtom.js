import { atom } from "recoil";
export const categoriesAtom = atom({
  key: "categoriesAtom",
  default: [],
});

export const currentCategoryAtom = atom({
  key: "currentCategoryAtom",
  default: "list",
});

export const productByCategoryAtom = atom({
  key: "productByCategoryAtom",
  default: {},
});
