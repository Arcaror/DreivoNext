import styles from './index.module.css'
import React from 'react'
import Answer from '../components/button/answer';
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Router from 'next/router';
import { useEffect } from "react";


export default function Home(props) {

    const { data: session } = useSession()

    const refresh = useEffect(() => {
        setTimeout(() => {
            try {
                if (!props.prediction.id ) {
                    Router.reload()
                }
            } catch {
                getSess
            }
        }, 200)

    })
    const getSess = useEffect(() => {
        setTimeout(() => {
            try {
                if (!props.prediction.id ) {
                    Router.reload()
                }
            } catch {
                Router.reload()
            }
        }, 200)

    })

    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <div className={styles.Home}>


            {session && props.notFound == false ? (

                <>
                    {props.prediction.name ? <>
                        Prediction identifier : {props.prediction.id}

                        <h3>{props.prediction.name}</h3>
                        <Answer props={props}></Answer> </> :
                        <>
                            {refresh}
                        </>
                    }
                </>

            ) : (
                <>
                    {getSess}
                    <h3> Connect you please</h3>
                    {props.notFound}
                </>


            )}

        </div>

    </>)
}





export async function getServerSideProps(context) {

    try {



        //FIRST API REQUEST
        const res1 = await fetch('http://localhost:3000/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.req.cookies["next-auth.session-token"])

        })

        const sess = await res1.json()

        //SECOND API REQUEST
        const res2 = await fetch('http://localhost:3000/api/admin2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sess.response.userId)

        })
        const user = await res2.json()

        //Third API REQUEST
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()



        return {
            props: {
                sess: sess.response,
                user: user.response,
                prediction: predi.response,
                notFound: false,

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
