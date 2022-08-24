import styles from './prediction.module.css'
import { useState, useEffect } from "react";
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'


export default class Prediction extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            predict: props.props.predict,
            response: ''
        }
        this.timeOut = 1000
    }

    componentDidMount() {
        setInterval(() => {
            this.fetchLastPredi().then((response) => {
       
                    this.setState({
                        predict: response.response.id,
                        response: response.response.end
                    })
        

            })



        }, this.timeOut)

    }

    async fetchLastPredi() {

        const mySession = await fetch('http://localhost:3000/api/auth/session')
        const res3 = await fetch('http://localhost:3000/api/predict')
        const predi = await res3.json()
        return predi

    }
    async create() {
        const res1 = await fetch('http://localhost:3000/api/predict/create')
        const prediction = await res1.json()
        this.fetchLastPredi().then((response) => {
            this.setState({
                predict: response.response.id,
                response: ''
            })
        })

    }

    async endYes() {
        try {
            await fetch('http://localhost:3000/api/predict/endYes/' + this.state.predict)

            this.fetchLastPredi().then((response) => {
                this.setState({
                    predict: response.response.id,
                    response: 'yes'
                })
            })

            await fetch('http://localhost:3000/api/predict/rewardYes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.predict)
            })

            return 'yes'
        } catch (err) {
            Router.reload()
        }
    }
    async endNo() {
        try {
            await fetch('http://localhost:3000/api/predict/endNo/' + this.state.predict)

            this.fetchLastPredi().then((response) => {
                this.setState({
                    predict: response.response.id,
                    response: 'no'
                })
            })


            await fetch('http://localhost:3000/api/predict/rewardNo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.predict)
            })

            return 'no'
        } catch (err) {
            Router.reload()

        }
    }

    render() {
        return (<div className={styles.prediction}>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            </Head>



            Prediction ID is : {this.state.predict} and you say response : {this.state.response}

            <div className={styles.buttonContainer}>
                <button className={styles.create} onClick={() => this.create()}> Create prediction </button>
                <button className={styles.yes} onClick={() => this.endYes()}> YES </button>
                <button className={styles.no} onClick={() => this.endNo()}> NO </button>

            </div>


        </div>)
    }
}


