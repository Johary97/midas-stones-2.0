import Header from "@components/header";
import Sidebar from "@components/sidebar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      {children}
    </>
  );
}
