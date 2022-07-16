import styles from './answer.module.css'

import React from "react";

export default function Answer() {
    const [predict, setPredict] = React.useState("")


    return <div className={styles.button}>
        {predict}

        <div className={styles.form}>
            <button onClick={() => setPredict("yes")} className={styles.yes} >Yes</button>
            <button onClick={() => setPredict("no")} className={styles.no} >No</button>
        </div>

     
    </div>
}