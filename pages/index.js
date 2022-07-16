import styles from './index.module.css'

import React from 'react'
import Answer from '../components/button/answer';
import Head from 'next/head'
import { useSession } from 'next-auth/react'




export class HomePage extends React.Component {


    constructor(props) {
        super(props)
    }

    static async getInitialProps(context) {

        // const cookies = new Cookies(context.req, context.res)
        // cookies.set("next-auth.callback-url", "http://localhost:3000/api/auth/callback/google")

        console.log("lol")
        const res = await fetch('http://localhost:3000/api/predict/');
        const json = await res.json();


        return { predict: json.ptdr }

    }

}
export default function Home() {

    const { data: session } = useSession()
    return (<>


        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <div className={styles.Home}>


            {session ? (
                <><h3>Dreivo will be the winner of the next fight?</h3><Answer></Answer></>

            ) : (
                <h3> Connect you please :</h3>

            )}

        </div>

    </>)
}





