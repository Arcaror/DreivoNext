import styles from './answer.module.css'
import Router from 'next/router'
import React, { useState, useEffect } from 'react';

const moment = require('moment')
import { io } from 'socket.io-client'
import Progress_bar from '../progressbar/progress_bar';

export const socket = io("http://localhost:3000")

export default function Answer({ props }) {

    const [predi, setPredi] = useState('');
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState('')
    const [vote, setVote] = useState('')
    setInterval(() => {
        setTime(moment.utc().diff(predi.createdAt, 'seconds'))

    }, 200)



    useEffect(() => {

        fetch('/api/socketio').finally(() => {


            socket.on('connect', () => {
                console.log('connect')
                socket.emit('hello')
                socket.emit('ping')
                socket.emit('hello')

            })

            socket.on('hello', data => {
                console.log('hello', data)
            })

            socket.on('ping', data => {
                console.log('ping', data)
            })
            socket.on('reload', data => {
                setTimeout(() => {
                    Router.reload()

                }, 1000)
            })

            socket.on('a user connected', () => {
                console.log('a user connected')
            })




            socket.on("reload", (data) => {
                console.log("ws : on reload event ")
                setPredi(data.predi)
            })



            socket.on('disconnect', () => {
                console.log('disconnect')
            })





            try {
                fetchLastPredi().then(async (response) => {
                    setPredi(response.response)
                    const data2 = await fetch('http://localhost:3000/api/predict/vote', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userId: props.user.id,
                            prediId: response.response.id
                        })


                    }).then((response) => {

                        response.json().then((json) => {
                            try {
                                setVote(json.response.response)
                            } catch (err) {
                                console.log(err)
                            }
                        })


                    })
                })
            } catch (err) {
                Router.reload()
            }




        })

    }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted





    async function fetchLastPredi() {
        await fetch('http://localhost:3000/api/auth/session')

        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()
        return predi
    }


    async function setYes(props) {
        //4th API REQUEST
        await fetch('http://localhost:3000/api/auth/session')
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()
        try {


            const data = await fetch('http://localhost:3000/api/predict/participate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: props.user,
                    predi: predi.response,
                    answer: 'yes'
                })

            }).then(async (response) => {
                setAnswer('yes')
                console.log('wtttttttttttf' + response)

                const data2 = await fetch('http://localhost:3000/api/predict/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: props.user.id,
                        prediId: predi.response.id
                    })


                }).then((response) => {
                    response.json().then((json) => {
                        setVote(json.response.response)

                    })
                })




            })
            colorButton()

        } catch (err) {
            console.log(err)
        }
    }

    async function setNo(props) {
        //4th API REQUEST
        await fetch('http://localhost:3000/api/auth/session')

        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()
        try {

            // //Third API REQUEST
            // const res3 = await fetch('http://localhost:3000/api/predict')

            // const predi = await res3.json().then((response) => {


            //     this.setState({
            //         predi: response.response

            //     })
            //     console.log(predi)
            // })
            // console.log(predi)


            const data = await fetch('http://localhost:3000/api/predict/participate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: props.user,
                    predi: predi.response,
                    answer: 'no'
                })

            }).then(async (response) => {
                setAnswer('no')
                console.log(response)

                const data2 = await fetch('http://localhost:3000/api/predict/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: props.user.id,
                        prediId: predi.response.id
                    })


                }).then((response) => {
                    response.json().then((json) => {
                        setVote(json.response.response)

                    })
                })


            })
            colorButton()

        } catch (err) {
            console.log(err)
        }
    }



    function colorButton() {
        document.getElementById('no').style.backgroundColor = 'blue'
        document.getElementById('yes').style.backgroundColor = 'blue'
    }


    function render(predi, props, time) {


        return <div className={styles.button}>

            {typeof props.user.name == 'undefined' ? <> {Router.reload()}</> : <></>}


            <h1> {predi.name} </h1>
            <div className={styles.prog}> {time / 20 * 100 < 100 && predi.end == 0 && time != '' ? <><Progress_bar bgcolor="red" progress={time / 20 * 100} height={140} /> </> : <></>}
            </div>

            <div className={styles.form}>

                <ul> Name : {props.user.name}</ul>
                <ul> Vote : {vote}</ul>

                {time < 20 && time != '' ? <>


                    <button id='yes' onClick={() => setYes(props)} className={styles.yes} >Yes</button>
                    <button id='no' onClick={() => setNo(props)} className={styles.no} >No</button>



                </> : <>


                    {vote == '' ? <> Too late ... its 20 seconds for vote.</> : <>
                        Thank you for participation.
                    </>}

                </>}

                {predi.end != 0 ? <>  
                
                {predi.end == 1 && vote == 'yes' || predi.end == 2 && vote == 'no'  ? <h2>You win</h2> : <><h2>You loose</h2></>}
</> 
                
                : <> <h2>Wait for result...</h2></>}





            </div>

        </div>
    }

    return render(predi, props, time)



}






