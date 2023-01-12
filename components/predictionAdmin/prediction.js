import styles from './prediction.module.css'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';

import Router from 'next/router'
import { io } from 'socket.io-client'

import { socket } from '../predict/answer'

export default function Prediction() {

    const [predi, setPredi] = useState('');
    const [answer, setAnswer] = useState('');


    useEffect(() => {
        fetch('/api/socketio').finally(() => {
            socket.on('connect', () => {
                console.log('connect')


                socket.emit('admin')
            })






            socket.on('disconnect', () => {
                console.log('disconnect')
            })


        })
    })

    fetchLastPredi().then((response) => {
        setPredi(response.response.id)


    })





    async function fetchLastPredi() {

        await fetch('https://legrandarca.ddns.net/api/auth/session')
        const res3 = await fetch('https://legrandarca.ddns.net/api/predict')
        const predi = await res3.json()
        console.log(predi)


        return predi

    }
    async function create() {
        const res1 = await fetch('https://legrandarca.ddns.net/api/predict/create')
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
            fetch('https://legrandarca.ddns.net/api/auth').then(() => {
                console.log("API AUTH ---------------")
            })
            await fetch('https://legrandarca.ddns.net/api/predict/endYes/' + predi).then(() => {

                fetchLastPredi().then(async (response) => {

                    setPredi(response.response.id)
                    setAnswer('yes')
                    await fetch('/api/socketio').finally(() => {

                        socket.emit('reloadUsers', 'reloadUsers')

                    })
                })

            })



            await fetch('https://legrandarca.ddns.net/api/predict/rewardYes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(predi)
            }).then(() => {
                fetch('/api/socketio').then(() => {

                    socket.emit('reloadRanking', 'reloadRanking')


                })
            })

        } catch (err) {
            Router.reload()
        }
    }
    async function endNo(predi) {
        try {
            await fetch('https://legrandarca.ddns.net/api/predict/endNo/' + predi)

            fetchLastPredi().then(async (response) => {
                setPredi(response.response.id)
                setAnswer('no')
                await fetch('/api/socketio').finally(() => {

                    socket.emit('reloadUsers', 'reloadUsers')

                })
            })


            await fetch('https://legrandarca.ddns.net/api/predict/rewardNo', {
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
    async function resetAll() {
        const res1 = await fetch('https://legrandarca.ddns.net/api/predict/resetAll')

        fetch('/api/socketio').finally(() => {

            socket.emit('reloadUsers', 'reloadUsers')

        })


    }
    function render() {
        return (<div className={styles.prediction}>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            </Head>

            {typeof predi == 'undefined' ? <> ???
            </> : <>


                <h2> Prediction ID is : {predi} <br></br> Response : {answer}</h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.create} onClick={() => create()}> Create prediction </button>
                    <div className={styles.yesNo}>
                        <button className={styles.yes} onClick={() => endYes(predi)}>set result YES </button>
                        <button className={styles.no} onClick={() => endNo(predi)}>set result  NO </button>
                    </div>
                    <div className={styles.utilities}>
                        <button className={styles.no} onClick={() => resetAll()}>Reset Winstreak of All players </button>
                    </div>
                </div>
            </>}




        </div>)
    }

    return render()


}

