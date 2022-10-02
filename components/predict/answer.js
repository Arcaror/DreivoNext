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
                fetchLastPredi().then((response) => {
                    setPredi(response.response)
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
                    answer: 'yes'
                })

            }).then((response) => {
                setAnswer('yes')
                console.log(response)

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

            }).then((response) => {
                setAnswer('no')
                console.log(response)

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

{props.user.name == undefined ? <> {Router.reload()}</> : <></> }

            <h1> {predi.name} </h1> 
            <p>
               <ul> Name : {props.user.name}</ul> 
               {time/20*100 < 100 && predi.end == 0 && time != '' ? <><Progress_bar bgcolor="red" progress={time/20*100}   height={30} /> </> : <></>}
               
            </p>
            <div className={styles.form}>

                {predi.end == 0 && time < 20  && time != ''? <>


                    <button id='yes' onClick={() => setYes(props)} className={styles.yes} >Yes</button>
                    <button id='no' onClick={() => setNo(props)} className={styles.no} >No</button>



                </> : <>


                    {predi.end == 0 ? <> Too late ... its 20 seconds for vote.</> : <>      <h2> Prediction finished result was response {predi.end} </h2></>}



                </>}
            </div>

        </div>
    }

    return render(predi, props, time)



}






