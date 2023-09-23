import { atom } from "recoil";

export const currentPageAtom = atom({
  key: "currentPageAtom",
  default: { caption: "All Stones", value: "categories" },
});
