import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { currentCategoryAtom } from "@atoms/categoryAtom";
import { currentProductAtom } from "@atoms/productAtom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Breadcrumb() {
  const currentCategory = useRecoilValue(currentCategoryAtom);
  const currentProduct = useRecoilValue(currentProductAtom);
  const router = useRouter();

  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window != "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 768;

  function handleClick(event) {
    event.preventDefault();
    router.push(event.target.href, null, { shallow: true });
  }

  let breadcrumbs = [
    <Typography key="1" color="#0011ff">
      Home
    </Typography>,
  ];
  if (currentCategory) {
    breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="#333"
        href={isMobile ? "/categories/list" : "/products/list"}
        onClick={handleClick}
      >
        Home
      </Link>,
      <Typography key="2" color="#0011ff">
        {currentCategory.caption}
      </Typography>,
    ];
  }

  if (currentProduct && currentCategory) {
    breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="#333"
        href={isMobile ? "/categories/list" : "/products/list"}
        onClick={handleClick}
      >
        Home
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="#333"
        href={currentCategory.url}
        onClick={handleClick}
      >
        {currentCategory.caption}
      </Link>,
      <Typography key="3" color="#0011ff">
        {currentProduct.nomProduit}
      </Typography>,
    ];
  }

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
