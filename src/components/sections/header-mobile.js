import Link from "next/link";
import Image from "next/image";
import styles from "@styles/HeaderMobile.module.css";
import logo from "@images/midas-logo.png";
import Contact from "@components/sections/contact";
import Nav from "@components/sections/nav";
import Sidebar from "@components/navigations/sidebar";
import Page from "@components/sections/page";

export default function HeaderMobile() {
  return (
    <>
      <div
        className={`${styles.container} flex flex-row items-center justify-between`}
      >
        <Image width={120} src={logo} alt="logo Midas Stones"></Image>
        <Sidebar></Sidebar>
      </div>
      {/* <Contact></Contact> */}
      {/* <Nav></Nav> */}
      <Page></Page>
    </>
  );
}
