import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
// mui icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// mui components
import AppBar from "@mui/material/AppBar";
// import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Input from "@mui/material/OutlinedInput";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const StyledInputBase = styled(OutlinedInput)(({ theme }) => ({
  color: "inherit",
  borderRadius: "20px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

function Search() {
  return (
    <StyledInputBase
      placeholder="Searching for..."
      inputProps={{ "aria-label": "search" }}
      color="secondary"
      startAdornment={
        <InputAdornment position="start" sx={{}}>
          <SearchIcon fontSize="small" />
        </InputAdornment>
      }
      sx={{ flexGrow: 1 }}
    />
  );
}

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)" }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ minWidth: { xs: "140px", md: "170px" } }}>
            <Image src={Logo} alt="Logo" />
          </Box>
          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
