import Head from 'next/head'
import {ChakraProvider} from "@chakra-ui/react"
import Script from "next/script"
import {theme} from "../theme"
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Pablo Ramos</title>
      <meta name="Pablo Ramos frontend developer" content="Portfolio Pablo Ramos" />
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.GOOGLE_ANALYTICS});`}
    </Script>
    <ChakraProvider theme={theme}>
      <Component {...pageProps}  />
    </ChakraProvider>
  </>
  )
}

export default MyApp
