import styles from './index.module.css'
import React from 'react'
import Answer from '../components/predict/answer';
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { Router } from 'next/router';



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

            </> : <>
                <a href="/api/auth/signin">Sign in</a>
            </>}


        </div>

    </>)
}
export async function getServerSideProps(context) {
    try {
        await fetch('http://localhost:3000/api/auth/session')

        //FIRST API REQUEST - GET SESSION
        const res1 = await fetch('http://localhost:3000/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.req.cookies["next-auth.session-token"])

        })

        const sess = await res1.json()

        //SECOND API REQUEST - GET USER
        const res2 = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: sess.response.userId,
                userName: 'undefined'
            })
        })
        const user = await res2.json()
        
        //THIRD API REQUEST - GET LAST PREDICTION
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()

        //FOUTH API REQUEST - GET LAST VOTE
        const res4 = await fetch('http://localhost:3000/api/predict/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: user.response.name,
                prediId: predi.response.id
            })
        })
        const vote = await res4.json()

        
        return {
            props: {
                sess: sess.response,
                user: user.response,
                predi: predi.response,
                vote: vote.response,
                notFound: false

            }
        }

    } catch {
        return {
            props: {
                notFound: true
            }
        }
    }

}