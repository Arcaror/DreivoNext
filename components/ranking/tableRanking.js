import styles from './tableRanking.module.css'
import Router from 'next/router'
import { clearPreviewData } from 'next/dist/server/api-utils'
import React, { useState, useEffect } from 'react';
const moment = require('moment')
import { io } from 'socket.io-client'

export const socket = io("https://legrandarca.ddns.net")

export default function TableRanking() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetch('/api/socketio').finally(() => {


            socket.on('connect', () => {
                console.log('connect')

            })

            socket.on('reloadRank', () => {
                setTimeout(() => {
                    Router.reload()
                }, 200)

            })
            socket.on('disconnect', () => {
                console.log('disconnect')
            })

        })
        try {
            fetchRanking().then((response) => {
                setRanking(response.response)
            })
        } catch (err) {
            Router.reload()

        }

    }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted






    async function fetchRanking() {

        var res3 = ''
        try{
            res3 = await fetch('https://legrandarca.ddns.net/api/ranking')
            const ranking = await res3.json()
            setRanking(ranking)
    
            return ranking
        }catch{
            Router.reload()
        }
        
     

    }


    function render() {
        return <div className={styles.ranking}>
            <h1>Ranking</h1>
            {ranking.constructor == Array && ranking != [] ? (ranking.map((user) => {
            
                return     <>

                    <div key={user.id}>

                        
                            <table><th>
                                <tr> {user.name}</tr></th><th> <tr>
                                    {user.winstreak}
                                </tr></th>


                            </table>
                        </div>
                    </>
            })) : <>{Router.reload()}</>}


                </div>
            }
    return render()
}



