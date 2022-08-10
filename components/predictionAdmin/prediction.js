import styles from './prediction.module.css'
import { useState, useEffect } from "react";
import Router from 'next/router';
import Head from 'next/head'
import React from 'react'

export default function prediction(props) {


    const [predict, setPredict] = React.useState(props.props.predi)


    return (<div className={styles.prediction}>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        Prediction actual is : {predict.id} and you say response : {predict.end}

        <div className={styles.buttonContainer}>
            <button className={styles.create} onClick={() => create()}> Create prediction </button>
            <button className={styles.yes} onClick={() => endYes(props)}> YES </button>
            <button className={styles.no} onClick={() => endNo(props)}> NO </button>

        </div>


    </div>)
}
async function create() {
    const res1 = await fetch('http://localhost:3000/api/predict/create')
    const prediction = await res1.json()

    Router.reload()

}

async function endYes(props) {
    const res1 = await fetch('http://localhost:3000/api/predict/endYes/' + props.props.predi.id)
    Router.reload()
}
async function endNo(props) {
    const res1 = await fetch('http://localhost:3000/api/predict/endNo/' + props.props.predi.id)
    Router.reload()

}


