import LayoutComponent from '../components/layout/layout'
import './styles.css'

import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (

    <>
      <Head> <title>Predictor application</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1, user-scalable=no"/>

      
       </Head>

      <SessionProvider session={session}>

        <LayoutComponent>

          <Component {...pageProps} />

        </LayoutComponent>
      </SessionProvider>
    </>


  )

}