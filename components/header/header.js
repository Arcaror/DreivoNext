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

        <a className={styles.title} href="/">Predictor application</a>


            
            <div className={styles.link}> <a href='/winners'>Winners</a> <a href='/ranking'>Ranking</a> <a href='/admin'>Admin</a>

            
            {!session && (<div className={styles.login}>
                <Login></Login>

            </div>)}
            {session && (<>
                <a className={styles.connect}>You are connected {session.user.name}</a>
                <a onClick={() => signOut()} href='/'>Sign out</a>
            </>)}

            </div>


 
        </div>
    </>
    )

}