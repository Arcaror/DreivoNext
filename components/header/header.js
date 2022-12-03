import Login from "../login/login"
import styles from "./header.module.css"
import react from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Link from 'next/link'


function onClickTwitch() {
    console.log("twitch")
}
export default function Header() {


    const { data: session } = useSession()

    return (<>
        <Head>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            </>
        </Head>

        <div className={styles.container}>

            {/* <Link href="/">
                <a className={styles.title}>Predictor application</a>
            </Link> */}



            <div className={styles.link}>
            <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/winners">
                    <a>Winners</a>
                </Link>
                <Link href="/ranking">
                    <a>Ranking</a>
                </Link>
                <Link href="/admin">
                    <a>Admin</a>
                </Link>


                
                {!session && (<div className={styles.login}>
                    <Login></Login>

                </div>)}
                {session && (<>
                    <a className={styles.connect}>You are connected {session.user.name}</a>
                    <Link href="/"><a onClick={() => signOut()}>Sign out</a></Link>
                </>)}

                </div>


        </div>
    </>
    )

}