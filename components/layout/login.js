import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
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

export default function Login(props) {
  const { myUser } = props;

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <EmailIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Email"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Search>
        <SearchIconWrapper>
          <LockIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Password"
          type="password"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Button
        variant="contained"
        color="success"
        sx={{ marginLeft: "24px" }}
        startIcon={<LoginIcon />}
        onClick={() => {
          myUser.setUser(true);
        }}
      >
        Login
      </Button>
    </>
  );
}
