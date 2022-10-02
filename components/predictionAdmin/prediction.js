import styles from './prediction.module.css'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';

import Router from 'next/router'
import { io } from 'socket.io-client'

import { socket } from '../predict/answer'

export default function Prediction(props) {

    const [predi, setPredi] = useState('');
    const [answer, setAnswer] = useState('');


    useEffect(() => {
        fetch('/api/socketio').finally(() => {
            socket.on('connect', () => {
                console.log('connect')
                
     fetch('http://localhost:3000/api/auth').then(()=>{
        console.log("API AUTH ---------------")
     })

                socket.emit('admin')
            })






            socket.on('disconnect', () => {
                console.log('disconnect')
            })


        })
    })

    fetchLastPredi().then((response) => {
        setPredi(response.response.id)
        setAnswer(response.response.end)


    })





    async function fetchLastPredi() {

         await fetch('http://localhost:3000/api/auth/session')
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()


        return predi

    }
    async function create() {
        const res1 = await fetch('http://localhost:3000/api/predict/create')
        const prediction = await res1.json()

        fetchLastPredi().then((response) => {
            setPredi(response.response.id)
            setAnswer('')
            fetch('/api/socketio').finally(() => {

                socket.emit('reloadUsers', 'reloadUsers')

            })
        })

    }

    async function endYes(predi) {
        try {
            fetch('http://localhost:3000/api/auth').then(()=>{
                console.log("API AUTH ---------------")
             })
            await fetch('http://localhost:3000/api/predict/endYes/' + predi)

            fetchLastPredi().then((response) => {
                setPredi(response.response.id)
                setAnswer('yes')
                fetch('/api/socketio').finally(() => {

                    socket.emit('reloadUsers', 'reloadUsers')

                })
            })


            await fetch('http://localhost:3000/api/predict/rewardYes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(predi)
            }).then(() => {
                fetch('/api/socketio').finally(() => {

                    socket.emit('reloadRanking', 'reloadRanking')


                })
            })

        } catch (err) {
            Router.reload()
        }
    }
    async function endNo(predi) {
        try {
            await fetch('http://localhost:3000/api/predict/endNo/' + predi)

            fetchLastPredi().then((response) => {
                setPredi(response.response.id)
                setAnswer('no')
                fetch('/api/socketio').finally(() => {

                    socket.emit('reloadUsers', 'reloadUsers')

                })
            })


            await fetch('http://localhost:3000/api/predict/rewardNo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(predi)
            }).then(() => {
                fetch('/api/socketio').finally(() => {

                    socket.emit('reloadRanking', 'reloadRanking')

                })
            })

        } catch (err) {
            Router.reload()

        }
    }

    function render() {
        return (<div className={styles.prediction}>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            </Head>



            <h2> Prediction ID is : {predi} and you say response : {answer}
            </h2>
            <div className={styles.buttonContainer}>
                <button className={styles.create} onClick={() => create()}> Create prediction </button>
                <div className={styles.yesNo}>
                <button className={styles.yes} onClick={() => endYes(predi)}>set result YES </button>
                <button className={styles.no} onClick={() => endNo(predi)}>set result  NO </button>
</div>
            </div>


        </div>)
    }

    return render()


}

