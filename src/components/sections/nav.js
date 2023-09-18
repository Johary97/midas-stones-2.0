import Link from "next/link";
import styles from "@styles/Nav.module.css";
import Menu from "@/components/navigations/menu";

export default function Nav() {
  return (
    <>
      <div
        className={`${styles.container} inline-flex items-center justify-center`}
      >
        <div
          className={`${styles.content} container flex flex-wrap items-center justify-center mt-2`}
        >
          <Menu href="/" caption="All Stones"></Menu>
          <Menu href="/" caption="Fine Stones"></Menu>
          <Menu href="/" caption="Precious Stones"></Menu>
          <Menu href="/" caption="Collection Stones"></Menu>
          <Menu href="/" caption="Industrial Stones"></Menu>
        </div>
      </div>
    </>
  );
}
