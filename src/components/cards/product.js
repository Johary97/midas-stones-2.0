import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Product.module.css";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

export default function Product(props) {
  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        className={styles.card}
      >
        <div className="mt-1">
          <Image
            src={props.data.image}
            alt={props.data.name}
            width={206}
            style={{ borderRadius: "50%" }}
            className="mx-auto"
          ></Image>
          <div className={styles.head}>
            <h2 className={`${styles.name} mx-4`}>{props.data.name}</h2>
          </div>
          <div
            className="inline-flex justify-between items-center px-4"
            style={{ width: "100%" }}
          >
            <h3 className={styles.price}>
              <span>$</span>
              1209
            </h3>
            {/* <a className={styles.buy} href={props.href}>
                <span className={`material-symbols-outlined ${styles.icon}`}>
                  shopping_cart
                </span>
                Buy Now
              </a> */}
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
