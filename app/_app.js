import "globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>;
}

export default MyApp;
