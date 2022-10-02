import styles from './index.module.css'
import React from 'react'
import Answer from '../components/predict/answer';
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Router from 'next/router';
import { useEffect } from "react";
import { clearPreviewData } from 'next/dist/server/api-utils';
import Prediction from '../components/predictionAdmin/prediction';

import { io } from 'socket.io-client'


export const socket = io("http://localhost:3000")

export default function Home(props) {

    const { data: session } = useSession()
  



    function test() {
        // setTimeout(() => {
        //     try {
        //         if (session && props.prediction != null) {
        //             console.log("ready")
        //         }
        //     } catch {
        //         console.log("Error \nPrediction :" + props.prediction + "\nUser : " + props.user + "\nSession : " + props.sess + "\nnot found?" + props.notFound)
        //         Router.reload()
        //     }
        // }, 1000)

        setTimeout(() => {
            Router.reload()
        }, 1000)

    }

    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <div className={styles.Home}>


            {session && props.notFound == false ? (

                <>
                    {props.prediction.id ? <>

                        <Answer props={props}></Answer>

                        </>:
                        <>
                            Loading ...
                            {test()}
                        </>
                    }
                </>

            ) : (
                <>

                    <h3> Connect you please</h3>
                    {props.notFound}
                </>


            )}

        </div>

    </>)
}


export async function getServerSideProps(context) {

    try {


        await fetch('http://localhost:3000/api/auth')
        //FIRST API REQUEST
        const res1 = await fetch('http://localhost:3000/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.req.cookies["next-auth.session-token"])

        })
        const session = await res1.json()

        console.log("params Session is " + session)
        //SECOND API REQUEST
        const res2 = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(session.response.userId)
        })
        const usr = await res2.json()

        //Third API REQUEST
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()
        console.log(predi)




        return {
            props: {
                sess: session.response,
                user: usr.response,
                prediction: predi.response,
                notFound: false,

            }
        }
    } catch (err) {
        console.log("CATCH " + err)

        return {
            props: {
                sess: null,
                user: null,
                prediction: null,
                notFound: true,

            }
        }
    }


}

