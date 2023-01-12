import styles from './answer.module.css'
import Router from 'next/router'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'

const moment = require('moment')
import { io } from 'socket.io-client'
import Progress_bar from '../progressbar/progress_bar';
import { suppressDeprecationWarnings } from 'moment';

export const socket = io("https://legrandarca.ddns.net")

export default function Answer() {
    const { data: session, status } = useSession()

    const [predi, setPredi] = useState('');
    const [user, setUser] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('')
    const [vote, setVote] = useState('')
    const [vip, setVip] = useState('te');


    //update time
    setInterval(() => {
        setTime(moment.utc().diff(predi.createdAt, 'seconds'))

    }, 200)


    //event receiver for reload the page on websocket message "reload"
    useEffect(() => {

        fetch('/api/socketio').finally(() => {


            socket.on('connect', () => {
                console.log('connect')
            })

            socket.on('reload', data => {

                Router.reload()

            })


            socket.on('disconnect', () => {
                console.log('disconnect')
            })





            try {
                fetchLastPredi().then(async (response) => {

                    setPredi(response.response)

                    if (user == '') {
                        console.log(`User dont exist he is ${user}`)


                        const user = await fetch('https://legrandarca.ddns.net/api/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                userName: session.user.name,
                                userId: 'undefined'
                            })
                            , next: { revalidate: 10 }
                        })
                        const userJson = user.json().then(async user => {
                            setUser(user.response)

                            const data2 = await fetch('https://legrandarca.ddns.net/api/predict/vote', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: user.response.name,
                                    prediId: response.response.id
                                })
                                , next: { revalidate: 10 }

                            }).then((response) => {

                                response.json().then((json) => {
                                    try {
                                        if (json.response != null) {

                                            setVote(json.response.response)
                                        }
                                    } catch (err) {
                                        console.log(err)
                                    }
                                })


                            })




                        })

                    } else {
                        //user already exist

                        console.log(`User already exist, he is ${user.name}`)
                        const data2 = await fetch('https://legrandarca.ddns.net/api/predict/vote', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: user.name,
                                prediId: response.response.id
                            })
                            , next: { revalidate: 10 }

                        }, { next: { revalidate: 10 } }).then((response) => {

                            response.json().then((json) => {
                                try {
                                    if (json.response != null) {

                                        setVote(json.response.response)
                                    }
                                } catch (err) {
                                    console.log(err)
                                }
                            })


                        })

                    }


                })
            } catch (err) {
                Router.reload()
            }




        })

    }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted





    async function fetchLastPredi() {
        const res3 = await fetch('https://legrandarca.ddns.net/api/predict')
        const predi = await res3.json()
        return predi
    }


    async function setYes() {
        const res3 = await fetch('https://legrandarca.ddns.net/api/predict')
        const predi = await res3.json()

        try {
            const data = await fetch('https://legrandarca.ddns.net/api/predict/participate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: user,
                    predi: predi.response,
                    answer: 'yes'
                })

            }).then(async (response) => {
                setAnswer('yes')
                console.log('wtttttttttttf' + response)

                const data2 = await fetch('https://legrandarca.ddns.net/api/predict/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: user.name,
                        prediId: predi.response.id
                    })


                }).then((response) => {

                    response.json().then((json) => {
                        if (json.response != null) {
                            setVote(json.response.response)
                        }
                    })
                })

            })
            colorButton()

        } catch (err) {
            console.log(err)
        }
    }

    async function setNo() {

        const res3 = await fetch('https://legrandarca.ddns.net/api/predict')
        const predi = await res3.json()
        try {

            const data = await fetch('https://legrandarca.ddns.net/api/predict/participate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: user,
                    predi: predi.response,
                    answer: 'no'
                })

            }).then(async (response) => {
                setAnswer('no')
                console.log(response)

                const data2 = await fetch('https://legrandarca.ddns.net/api/predict/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: user.name,
                        prediId: predi.response.id
                    })


                }).then((response) => {
                    response.json().then((json) => {

                        if (json.response != null) {
                            setVote(json.response.response)
                        }
                    })
                })


            })
            colorButton()

        } catch (err) {
            console.log(err)
        }
    }



    function colorButton() {
        // document.getElementById('no').style.backgroundColor = 'blue'
        // document.getElementById('yes').style.backgroundColor = 'blue'
    }

    
    async function setSub() {

        await fetch('https://legrandarca.ddns.net/api/me/vip').then(response => {
            response.json().then(json => {
                setVip(json.response)
                if(vip.status == 'yes'){
                    user.isVip = 1
                }
                if(vip.status == 'no'){
                    user.isVip = 0
                }
            })
        })
    }

    function render() {


        return <div className={styles.answer}>


            <div className={styles.name}>
                <h1> {predi.name} </h1>

            </div>
            <div className={styles.prog}> {time / 20 * 100 < 100 && (predi.end == 0 || typeof predi.end == 'undefined') && time != '' ? <><Progress_bar progress={time / 20 * 100} height={140} /> </> : <> <h2>Time since creation of prediction : {time} seconds</h2></>}
            </div>

            <div className={styles.form}>

                <div className={styles.info}>
                    {session.id}
                    Name : {user.name} <br />
                    Score : {user.winstreak} <br />
                    Vote : {vote} <br/>
                    {typeof vip.buttonText == 'undefined' ?
                         <>          
                         Twitch Sub mode : {user.isVip == 1 ? <>yes</> : <>no</>}

                            <button onClick={() => setSub()}>SUB MODE TWITCH</button></>  
                            : <>
                                Twitch Sub mode : {vip.status}

                                <button onClick={() => setSub()}>{vip.buttonText}</button>
                                <p>{vip.sentence}</p>
                            </>}
                </div>
                {time <= 20 && predi.end == 0 ? <>

                    <div className={styles.buttonContainer}>
                        <button id='yes' onClick={() => setYes()} className={styles.yes} >Yes</button>
                        <button id='no' onClick={() => setNo()} className={styles.no} >No</button>
                    </div>


                </> : <>

                    <div className={styles.prediText}>
                        {vote == '' ? <> Too late ... there is 20 seconds for vote.</> : <>
                            Thank you for your participation.
                        </>}  </div>

                </>}

                {predi.end != 0 && typeof predi.end != 'undefined' && vote != '' ? <>
                    <div className={styles.prediText}>

                        {predi.end == 1 && vote == 'yes' || predi.end == 2 && vote == 'no' && predi.end != 0 ?
                            <> <div className={styles.resultTrue}>You win</div></> :
                            <><div className={styles.resultBad}> You loose</div></>}
                    </div>
                </>

                    : <>{time <= 20 && predi.end == 0 && vote != "" ? <>
                        <div className={styles.prediText}>
                            <h2>Good luck!</h2>
                        </div>
                    </> : <>
                    {vote == "" ? <><div className={styles.prediText}>
                            <h2>Don&apos;t miss the next prediction.</h2>
                        </div></> : <></>}
                    
                    </>}

                    </>}





            </div>

        </div>
    }

    return render()



}






