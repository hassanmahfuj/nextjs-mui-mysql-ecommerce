import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: red["A700"],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
