import Link from "next/link";
import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <Link href="/" className="tems-baseline">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/products/list">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
