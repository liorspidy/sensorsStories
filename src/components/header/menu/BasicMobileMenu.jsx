import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import classes from "./BasicMenu.module.css";

export default function BasicMobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path, elementId) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{ fontSize: "6rem", color: "#53524d", paddingRight: "0" }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          direction: "rtl",
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("/", "book")}
          className={classes.menuItem}
        >
          <Link className={classes.menuLink} to="/">
            הספר
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("/", "author")}
          className={classes.menuItem}
        >
          <Link className={classes.menuLink} to="/">
            אודות
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("/", "meet")}
          className={classes.menuItem}
        >
          <Link className={classes.menuLink} to="/">
            החישנים
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("/", "contact")}
          className={classes.menuItem}
        >
          <Link className={classes.menuLink} to="/">
            צרו קשר
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/courses")}
          className={classes.menuItem}
        >
          <Link className={classes.menuLink} to="/courses">
            קורסים והרצאות
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
