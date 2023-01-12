import Login from "../login/login"
import styles from "./header.module.css"
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';


function onClickTwitch() {
    console.log("twitch")
}
export default function Header() {

    const [vip, setVip] = useState('te');

    const { data: session } = useSession()

    async function setSub() {

        await fetch('https://legrandarca.ddns.net/api/me/vip').then(response => {
            response.json().then(json => {
                setVip(json.response)

            })
        })
    }
    return (<>
        <Head>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            </>
        </Head>

        <div className={styles.container}>


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

                    <div className={styles.connect}>You are connected {session.user.name}
                    <Link href="/"><a onClick={() => signOut()}>Sign out</a></Link>

                  
                    </div>

                </>)}

            </div>



        </div>
    </>
    )

}