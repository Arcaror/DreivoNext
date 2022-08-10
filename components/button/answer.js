import styles from './answer.module.css'

import React from "react"

import { useSession } from 'next-auth/react'


export default function Answer(props) {

    const [predict, setPredict] = React.useState("")
    const { data: session } = useSession()


    return <div className={styles.button}>


            <div className={styles.form}>    
            <h2>{props.props.prediction.id}</h2>
    
            {props.props.prediction.end == null ? <><h1>You can predict</h1>


                <button onClick={() => setYes(props)} className={styles.yes} >Yes</button>
                <button onClick={() => setNo(props)} className={styles.no} >No</button>


          
        </> : <> <h1>Prediction finished result was response {props.props.prediction.end}</h1></>}
        </div>

    </div>
}
async function setYes(props) {
    //4th API REQUEST

    const data = await fetch('http://localhost:3000/api/predict/participate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: props.props.user,
            predi: props.props.prediction,
            answer: 'yes'
        })

    })
    console.log(await data)

}
async function setNo(props) {
    //4th API REQUEST

    await fetch('http://localhost:3000/api/predict/participate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: props.props.user,
            predi: props.props.prediction,
            answer: 'no'
        })

    })

}

