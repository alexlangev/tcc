import "katex/dist/katex.min.css";
import "katex/dist/katex.min.js";
import Script from "next/script";
import Head from "next/head";
import { Layout } from "components";
import GlobalStyle from "../styles/globalStyles";
import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const LayoutComponent = router.pathname === "/" ? React.Fragment : Layout;

  return (
    <div className={montserrat.className}>
      <Head>
        <link
          rel="icon"
          type="image/svg"
          href="/images/logos/tcc-fav.svg"
          sizes="16x16"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutComponent>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
        </Script>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
        <GlobalStyle />
      </LayoutComponent>
    </div>
  );
}
