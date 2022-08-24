import styles from './tableRanking.module.css'
import React from "react"
import Router from 'next/router'
import { clearPreviewData } from 'next/dist/server/api-utils'



export default class TableRanking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ranking: []
        }
    }

    componentDidMount(props) {
        setInterval(() => {
            this.fetchRanking().then((response) => {

                this.setState({
                    ranking: response.response,
                })


            })



        }, 500)
    }

    async fetchRanking() {


        const mySession = await fetch('http://localhost:3000/api/auth/session')
        const res3 = await fetch('http://localhost:3000/api/ranking')
        const ranking = await res3.json()
        return ranking

    }


    render() {
        return <div className={styles.ranking}>

            {this.state.ranking != [] ? (this.state.ranking.map((user) => {
                
                return <div>
                    
                    <table><th>Name
                        <tr> {user.name}</tr></th><th>WinStreak <tr>
                            {user.winstreak}
                        </tr></th>

                    </table>
                </div>
            })): <>undefined</>}


        </div>
    }
}



