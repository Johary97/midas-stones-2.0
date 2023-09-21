import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { currentCategoryAtom } from "@atoms/categoryAtom";
import { useRecoilValue } from "recoil";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
  const currentCategory = useRecoilValue(currentCategoryAtom);
  const breadcrumbs = [
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
      {currentCategory.caption}
    </Typography>,
  ];

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
