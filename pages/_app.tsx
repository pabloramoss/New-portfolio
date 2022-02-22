import Head from 'next/head'
import {ChakraProvider} from "@chakra-ui/react"
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
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  </>
  )
}

export default MyApp
