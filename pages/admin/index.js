import styles from '../index.module.css'
import React from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { clearPreviewData, getCookieParser } from 'next/dist/server/api-utils';
import Prediction from '../../components/predictionAdmin/prediction'
import { useEffect } from "react";
import Router from 'next/router';




export default function Admin(props) {
    const { data: session } = useSession()



    // function reload() {
    //     useEffect(() => {
    //         setTimeout(() => {
    //             Router.reload()

    //         }, 100)

    //     })
    // }

    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <div className={styles.Home}>

            <>

                {props.notFound == true ? (<>Connect you {props.notFound}

                </>) : <>

                    {props.user.isAdmin == 1 ? (
                        <>
                            <Prediction></Prediction>
                        </>
                    ) : (
                        <>
                            {props.user.isAdmin}
                            {props.notFound}
                            You are not an admin...


                        </>
                    )}


                </>}

            </>



        </div>

    </>)
}





export async function getServerSideProps(context) {




        //FIRST API REQUEST
        const res1 = await fetch('https://legrandarca.ddns.net/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.req.cookies["__Secure-next-auth.session-token"])

        })

        const sess = await res1.json()

        //SECOND API REQUEST
        const res2 = await fetch('https://legrandarca.ddns.net/api/user', {
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

        //THIRD API REQUEST
        const res3 = await fetch('https://legrandarca.ddns.net/api/predict')
        const predi = await res3.json()
        console.log(`Session : ${JSON.stringify(sess.response)} \nUser : ${JSON.stringify(user.response)} \nPredi : ${JSON.stringify(predi.response)} `)
        return {
            props: {
                sess: sess.response,
                user: user.response,
                predi: predi.response,
                notFound: false

            } 
        }

    } 

