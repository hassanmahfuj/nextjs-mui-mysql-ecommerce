import NextLink from "next/link";
import MUILink from "@mui/material/Link";
import Box from "@mui/material/Box";

export const Link = ({ name, href }) => {
  return (
    <Box sx={{ pb: 1 }}>
      <NextLink href={href} passHref>
        <MUILink
          variant="body2"
          color="grey.500"
          underline="none"
          sx={{ "&:hover": { color: "grey.300" } }}
        >
          {name}
        </MUILink>
      </NextLink>
    </Box>
  );
};
