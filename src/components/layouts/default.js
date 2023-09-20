import Header from "@components/header";
import ShoppingCart from "@components/Buttons/shoppingcart";
import Breadcrumb from "@components/navigations/breadcrumbs";
import Search from "@components/inputs/search";

export default function DefaultLayout({ children }) {
  return (
    <div className="layout-container">
      <Header></Header>
      <div className="px-4 py-8 mx-auto container">
        <div className="flex flex-row justify-between items-center">
          <Breadcrumb></Breadcrumb>
          <Search></Search>
        </div>

        <div className="py-6">{children}</div>
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}
