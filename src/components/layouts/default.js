import Header from "@/components/sections/header";
import HeaderMobile from "../sections/header-mobile";
import ShoppingCart from "@components/Buttons/shoppingcart";
import Breadcrumb from "@components/navigations/breadcrumbs";
import Search from "@components/inputs/search";
import { useState, useEffect } from "react";

export default function DefaultLayout({ children }) {
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window != "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="layout-container">
      {!isMobile && <Header></Header>}
      {isMobile && <HeaderMobile></HeaderMobile>}
      <div className="px-4 py-8 mx-auto container">
        <div
          className="flex flex-wrap justify-between items-center"
          style={{ gap: "12px" }}
        >
          <Breadcrumb></Breadcrumb>
          <Search></Search>
        </div>

        <div className="py-6">{children}</div>
        {/* <ShoppingCart></ShoppingCart> */}
      </div>
    </div>
  );
}
