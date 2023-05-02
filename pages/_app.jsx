import "katex/dist/katex.min.css";
import "katex/dist/katex.min.js";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
