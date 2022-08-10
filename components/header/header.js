import Login from "../login/login"
import styles from "./header.module.css"
import react from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'

function onClickTwitch() {
    console.log("twitch")
}
export default function Header() {


    const { data: session } = useSession()

    return (<>        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
    </Head>

        <div className={styles.container}>

            <a href="/">Predictor application</a>


            {!session && (<>
                <Login></Login>

            </>)}
            {session && (<>
                <p> You are connected {session.status}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>)}

        </div>
    </>
    )

}