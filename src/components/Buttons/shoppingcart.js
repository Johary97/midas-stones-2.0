import Link from "next/link";
import Fab from "@mui/material/Fab";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "@styles/ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <>
      <Link href="#">
        <Fab aria-label="Open shopping cart" className={styles.fab}>
          <Badge color="error" badgeContent={10}>
            <ShoppingCartIcon
              style={{ color: "var(--dore-clair)", "font-size": "48px" }}
            />
          </Badge>
        </Fab>
      </Link>
    </>
  );
}
