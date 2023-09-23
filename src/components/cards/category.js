import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Category.module.css";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";

export default function Category(props) {
  console.log(props.data);
  return (
    <>
      <Paper component="div" className={styles.card}>
        <Link href={`/categories/${props.data.url}`}>
          <div className={styles.layer1}>
            {/* <Image
              src={`/images/${props.data.photo}`}
              alt={props.data.nomCategorie}
              width={226}
              height={226}
              style={{ borderRadius: "50%" }}
              className="mx-auto"
            ></Image> */}
          </div>
          <div className={styles.layer2}>
            <h2 className={`${styles.name} mx-auto`}>
              {props.data.nomCategorie}
            </h2>
            <p className={styles.description}>{props.data.description}</p>
          </div>
        </Link>
      </Paper>
    </>
  );
}
