import { atom } from "recoil"
export const productsAtom = atom({
    key: "productsAtom",
    default: []
})

export const currentProductAtom = atom({
    key: "currentProductAtom",
    default: null
})
