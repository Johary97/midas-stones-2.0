import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Header.module.css";
import logo from "@images/midas-logo.png";
import Contact from "@components/sections/contact";
import Nav from "@components/sections/nav";
import Sidebar from "@components/navigations/sidebar";

export default function Header() {
  return (
    <>
      <div
        className={`${styles.container} flex flex-row items-center justify-center`}
      >
        <div
          className={`${styles.content} container inline-flex items-center justify-between`}
        >
          <div className={`${styles.left} inline-flex items-center`}>
            <Sidebar></Sidebar>
            <Image width={160} src={logo} alt="logo Midas Stones"></Image>
          </div>
          <Contact></Contact>
        </div>
      </div>
      <Nav></Nav>
    </>
  );
}
