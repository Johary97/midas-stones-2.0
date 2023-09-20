import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styles from "@styles/Sidebar.module.css";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import logo from "@images/midas-logo.png";
import Image from "next/image";

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            icon: <HomeIcon style={{ color: "var(--dore-clair)" }} />,
            caption: "Home",
            url: "/",
          },
          {
            icon: <ShoppingCartIcon style={{ color: "var(--dore-clair)" }} />,
            caption: "My Cart",
            url: "/cart",
          },
        ].map((item, index) => (
          <Link key={index} href={item.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.caption} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            icon: <MailIcon style={{ color: "var(--dore-clair)" }} />,
            caption: "Contact Us",
            url: "/",
          },
          {
            icon: <LoginIcon color="success" />,
            caption: "Login",
            url: "/",
          },
        ].map((item, index) => (
          <Link key={index} href={item.url}>
            <ListItem key={item.caption} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.caption} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key="left">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", true)}
        edge="start"
        className={styles.appicon}
      >
        <AppsIcon fontSize="large" />
      </IconButton>
      {/* <Button >left</Button> */}
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Image
          width={160}
          src={logo}
          alt="logo Midas Stones"
          className="my-6 ml-4"
        ></Image>
        <Divider />
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
