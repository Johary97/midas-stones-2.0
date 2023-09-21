import Link from "next/link";
import styles from "@styles/Menu.module.css";

export default function Menu(props) {
  return (
    <>
      <Link
        href={props.href}
        className={`${styles.link} ${props.active && styles.active}`}
      >
        <span>{props.caption}</span>
      </Link>
    </>
  );
}
