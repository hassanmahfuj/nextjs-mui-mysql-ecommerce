import * as React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { grey } from "@mui/material/colors";
// mui icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";

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
        <InputAdornment position="start">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      }
      sx={{ flexGrow: 1 }}
    />
  );
}

export default function AppNav() {
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

          <Hidden smDown>
            <IconButton sx={{ bgcolor: grey[100], marginLeft: 2 }}>
              <PersonOutlineIcon />
            </IconButton>
            <Badge badgeContent={4} color="secondary">
              <IconButton sx={{ bgcolor: grey[100], marginLeft: 1 }}>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Badge>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
