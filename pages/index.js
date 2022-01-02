// components
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <Header />
      <Container
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          mt: "2",
        }}
      >
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h1">Hello World</Typography>
      </Container>
      <BottomNavBar />
    </>
  );
}
