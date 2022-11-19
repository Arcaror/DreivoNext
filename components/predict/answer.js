import styles from './answer.module.css'
import Router from 'next/router'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'

const moment = require('moment')
import { io } from 'socket.io-client'
import Progress_bar from '../progressbar/progress_bar';

export const socket = io("http://localhost:3000")

export default function Answer({ props }) {
    const { data: session, status } = useSession()

    const [predi, setPredi] = useState('');
    const [user, setUser] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('')
    const [vote, setVote] = useState('')




    //update time

    if (typeof predi != 'undefined') {
        setInterval(() => {

            setTime(moment.utc().diff(predi.createdAt, 'seconds'))

        }, 1000)
    }


    //event receiver for reload the page on websocket message "reload"
    useEffect(() => {

        fetch('/api/socketio').finally(() => {


            socket.on('connect', () => {
                console.log('connect')
            })

            socket.on('reload', async () => {

                // //THIRD API REQUEST - GET LAST PREDICTION
                // const res3 = await fetch('http://localhost:3000/api/predict')
                // res3.json().then((data)=>{
                //     setPredi(data.response)
                //     console.log(data.response)
                // })
                Router.reload()

            })


            socket.on('disconnect', () => {
                console.log('disconnect')
            })

            setPredi(props.predi)
            setUser(props.user)
            setVote(props.vote)



        })

    }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted


    async function setYes() {

        const reqParticipate = await fetch('http://localhost:3000/api/predict/participate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: user,
                predi: predi,
                answer: 'yes'
            })
        })

        reqParticipate.json().then(async (data) => {
            setAnswer('yes')

            const reqVote = await fetch('http://localhost:3000/api/predict/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.response.user.name,
                    prediId: data.response.predi.id
                })
            })
            reqVote.json().then((data) => {
                setVote(data.response.response)
            })
        })
    }


    async function setNo() {

        const reqParticipate = await fetch('http://localhost:3000/api/predict/participate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: user,
                predi: predi,
                answer: 'no'
            })
        })

        reqParticipate.json().then(async (data) => {
            setAnswer('no')

            const reqVote = await fetch('http://localhost:3000/api/predict/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.response.user.name,
                    prediId: data.response.predi.id
                })
            })
            reqVote.json().then((data) => {
                if (data.response != null)
                    setVote(data.response.response)
            })
        })
    }



    function render() {



        return <div className={styles.answer}>

            <div className={styles.name}>
                <h1> {predi.name} </h1>
            </div>
            <div className={styles.prog}> {time / 20 * 100 < 100 || predi.end == 0 ? <><Progress_bar progress={time / 20 * 100} height={140} /> </> : <> <h2>Time since creation of prediction : {time} seconds</h2></>}
            </div>

            <div className={styles.form}>
                <div className={styles.info}>
                    Name : {user.name} <br />
                    Score : {user.winstreak} <br />
                    {vote != '' ?
                        <>Vote : {vote}</> : <></>}
                    <br></br>
                    {predi.id} and end : {predi.end}
                </div>
                {time < 20 && time != '' && (predi.end == 0 || typeof predi.end == 'undefined') ? <>

                    <div className={styles.buttonContainer}>
                        <button id='yes' onClick={() => setYes()} className={styles.yes} >Yes</button>
                        <button id='no' onClick={() => setNo()} className={styles.no} >No</button>
                    </div>


                </> : <>

                    <div className={styles.prediText}>
                        {predi.end != 0 && vote == '' && time > 20 ? <> Too late ... there is 20 seconds for vote.</> : <>
                            Thank you for your participation.
                        </>}  </div>

                </>}

                {predi.end != 0 ? <>
                    <div className={styles.prediText}>

                        {predi.end == 1 && vote == 'yes' || predi.end == 2 && vote == 'no' ?
                            <> <div className={styles.resultTrue}>You win</div></> :
                            <><div className={styles.resultBad}> You loose</div></>}
                    </div>
                </>

                    : <>
                        <div className={styles.prediText}>
                            <h2>Wait for result...</h2>
                        </div>
                    </>}

            </div>
        </div>
    }

    return render()



}






