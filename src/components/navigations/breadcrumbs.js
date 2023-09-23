import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { currentCategoryAtom } from "@atoms/categoryAtom";
import { currentProductAtom } from "@atoms/productAtom";
import { useRecoilValue } from "recoil";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
  const currentCategory = useRecoilValue(currentCategoryAtom);
  const currentProduct = useRecoilValue(currentProductAtom);
  let breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#333"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Products
    </Link>,
    <Typography key="2" color="#0011ff">
      All Categories
    </Typography>,
  ];
  if (currentCategory) {
    breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="#333"
        href=""
        onClick={handleClick}
      >
        Products
      </Link>,
      <Typography key="2" color="#0011ff">
        {currentCategory.caption}
      </Typography>,
    ];
  }

  if (currentProduct) {
    breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="#333"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
      >
        Products
      </Link>,
      <Typography key="2" color="#333">
        {currentCategory.caption}
      </Typography>,
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
