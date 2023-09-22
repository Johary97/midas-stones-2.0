import { getProduct } from "@services/product";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentProductAtom, productsAtom } from "@/recoil/atom/productAtom";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Galery from "@components/cards/galery";
import styles from "@styles/ProductDetail.module.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Resolves query or returns null
function useQuery() {
  const router = useRouter();
  const hasQueryParams =
    /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
  const ready = !hasQueryParams || Object.keys(router.query).length > 0;
  if (!ready) return null;
  return router.query;
}

export default function Detail() {
  const [products, setProducts] = useRecoilState(productsAtom);
  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductAtom);
  const query = useQuery();
  useEffect(() => {
    if (!query || !products) {
      return;
    }
    const strId = query.id;
    const id = strId.split("-").slice(-1)[0];
    let product = products.find((item) => item.id == id);
    if (!product) {
      getProduct(id).then((res) => {
        const p = res.data[0];
        const ps = [...products, p];
        setProducts(ps);
        product = p;
      });
    }
    setCurrentProduct(product);
  }, [products, query, setCurrentProduct, setProducts]);

  return (
    currentProduct && (
      <Box
        className={`container ${styles.container}`}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <div className={styles.galery}>
          <Image
            src={`/images/${currentProduct.photo}`}
            layout="fill"
            objectFit="cover"
            alt="image"
            className={styles.img}
          ></Image>
        </div>
        <Paper component="div" className={`mx-3 p-6 ${styles.infos}`}>
          <h1 className={styles.title}>{currentProduct.nomProduit}</h1>
          <p className={styles.desc}>{currentProduct.description}</p>
          <ul className={styles.other}>
            <li>
              <span className="mr-1">
                <u>Unit Price:</u>
              </span>
              <span>
                <strong>{currentProduct.prixUnitaire}$</strong>
              </span>
            </li>
            <li>
              <span className="mr-1">
                <u>Weight:</u>
              </span>
              <span>
                <strong>
                  {currentProduct.poids} {currentProduct.unite}
                </strong>
              </span>
            </li>
            <li>
              <span className="mr-1">
                <u>Category:</u>
              </span>
              <span>
                <strong>{currentProduct.descriptionCat}</strong>
              </span>
            </li>
          </ul>
        </Paper>
      </Box>
    )
  );
}
