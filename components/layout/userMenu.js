import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useRouter } from "next/router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MenuSection = (props) => {
  const { section } = props;
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const openMenu = Boolean(anchorElMenu);
  const router = useRouter();

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleLink = (link) => {
    handleCloseMenu();
    router.push(link);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClickMenu}
        variant="text"
        sx={{ color: "white" }}
        ml={4}
      >
        {section.section}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {section.items.map((item, idx) => {
          return (
            <MenuItem
              onClick={() => {
                handleLink(item.link);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default function UserMenu(props) {
  const { myUser, myMenu } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    myUser.setUser(false);
  };

  const menuId = 1;

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {myMenu.map((section) => (
          <MenuSection section={section} />
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box> */}
      {renderMenu}
    </>
  );
}
