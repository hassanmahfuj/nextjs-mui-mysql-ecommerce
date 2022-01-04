import "../styles/globals.css";
import "../styles/nprogress.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, red } from "@mui/material/colors";
import Router from "next/router";
import NProgress from "nprogress";

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
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
