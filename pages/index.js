import styles from './index.module.css'
import React from 'react'
import Answer from '../components/predict/answer';
import Head from 'next/head'
import { useSession } from 'next-auth/react'



export default function Home(props) {

    const { data: session, status } = useSession()

    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <div className={styles.Home}>
            {status == "authenticated" ? <>
                <Answer props={props}></Answer>

                {session.user.email}</> : <>
                <a href="/api/auth/signin">Sign in</a>
            </>}


        </div>

    </>)
}
