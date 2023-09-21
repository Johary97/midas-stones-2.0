import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Product.module.css";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";

export default function Product(props) {
  return (
    <>
      <Paper component="form" className={styles.card}>
        <div className={styles.layer1}>
          <Image
            src={`/images/${props.data.photo}`}
            alt={props.data.nomProduit}
            width={226}
            height={226}
            style={{ borderRadius: "50%" }}
            className="mx-auto"
          ></Image>
        </div>
        <div className={styles.layer2}>
          <div className={styles.head}>
            <h2 className={`${styles.name} mx-4`}>{props.data.nomProduit}</h2>
          </div>
          <h3 className={styles.price}>
            <span>$</span>
            {props.data.prixUnitaire}
          </h3>
          <div className={styles.actions}>
            <Link href={`/products/${props.data.url}`} className={styles.link}>
              <KeyboardDoubleArrowRightIcon />
              <span className={styles.more}>Show more ...</span>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={styles.buy}
              startIcon={<AddShoppingCartIcon />}
            >
              Buy
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
}
