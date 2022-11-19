import styles from './prediction.module.css'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';

import Router from 'next/router'

import { socket } from '../predict/answer'

export default function Prediction({ props }) {

    const [predi, setPredi] = useState('');
    const [answer, setAnswer] = useState('');


    //Connect to websocket
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

        //Initialisation of React state with props.
        setPredi(props.predi)




    }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted





    async function create() {
        await fetch('http://localhost:3000/api/predict/create').then(() => {
            //Reload users pages
            fetch('/api/socketio').finally(() => {

                socket.emit('reloadUsers', 'reloadUsers')
            }).then(() => {

                Router.reload()
            })
        })

    }

    async function endYes() {

        await fetch('http://localhost:3000/api/predict/endYes/' + predi.id).then(() => {
            setAnswer('Yes')

            //Reload users pages
            fetch('/api/socketio').finally(() => {

                socket.emit('reloadUsers', 'reloadUsers')
            })

        })



        await fetch('http://localhost:3000/api/predict/rewardYes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(predi.id)
        }).then(() => {
            fetch('/api/socketio').finally(() => {

                socket.emit('reloadRanking', 'reloadRanking')


            })
        })


    }
    async function endNo() {
        try {
            await fetch('http://localhost:3000/api/predict/endNo/' + predi.id).then(() => {
                setAnswer('No')

                //Reload users pages
                fetch('/api/socketio').finally(() => {

                    socket.emit('reloadUsers', 'reloadUsers')
                })
            })

            await fetch('http://localhost:3000/api/predict/rewardNo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(predi.id)
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



            <h1> Prediction is : {predi.name}</h1> <br></br>
            <h2> Prediction ID is : {predi.id} <br></br> Response : {answer}</h2>
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

