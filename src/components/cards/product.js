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
        <div>
          <div>
            <div className={styles.head}>
              <h2 className={`${styles.name} mx-4 pt-2`}>{props.name}</h2>
            </div>
            <Image src={props.image} alt={props.name} width={306}></Image>
            <div
              className="inline-flex justify-between items-center px-4 py-2"
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
                Save
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
