import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "../public/logo.svg";

import { Link } from "./Utils";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0C0E30" }}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ minWidth: { xs: "140px", md: "170px" }, pb: 2 }}>
              <Image src={Logo} alt="Logo" />
            </Box>
            <Typography variant="body2" color="grey.500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <Typography variant="h5" gutterBottom color="common.white">
              About Us
            </Typography>
            <Link name="Careers" href="/" />
            <Link name="Our Stores" href="/" />
            <Link name="Our Cares" href="/" />
            <Link name="Terms & Conditions" href="/" />
            <Link name="Privacy Policy" href="/" />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h5" gutterBottom color="common.white">
              Customer Care
            </Typography>
            <Link name="Help Center" href="/" />
            <Link name="How to Buy" href="/" />
            <Link name="Track Your Order" href="/" />
            <Link name="Corporate & Bulk Purchasing" href="/" />
            <Link name="Returns & Refunds" href="/" />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h5" gutterBottom color="common.white">
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom color="grey.500" mt={1}>
              70 Washington Square South, New York, NY 10012, United States
            </Typography>
            <Typography variant="body2" gutterBottom color="grey.500" mt={1}>
              Email: uilib.help@gmail.com
            </Typography>
            <Typography variant="body2" gutterBottom color="grey.500" mt={1}>
              Phone: +1 1123 456 780
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
