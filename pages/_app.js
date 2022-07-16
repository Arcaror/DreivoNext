import LayoutComponent from '../components/layout/layout'
import './styles.css'
import  Head from 'next/head'
import { SessionProvider } from "next-auth/react"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (

    <>
  <Head> <title>Predictor application for Dreivo</title> </Head>

      <SessionProvider session={session}>


        <LayoutComponent>

          <div className='contentContainer'>
            <Component {...pageProps} />

          </div>

        </LayoutComponent>
      </SessionProvider>
</>
 

  )

}