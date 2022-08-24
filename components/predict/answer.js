import styles from './answer.module.css'
import React from "react"
import Router from 'next/router'
import { clearPreviewData } from 'next/dist/server/api-utils'



export default class Answer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            predi: '',
            answer: ''

        }


        this.timeOut = 1000
    }

    componentDidMount(props) {

        setInterval(() => {

            try {
                this.fetchLastPredi().then((response) => {
                    this.setState({
                        predi: response.response
                    })
                })
            } catch (err) {
                Router.reload()
            }


        }, this.timeOut)

    }


    async fetchLastPredi() {
        try {
            if (this.props.props.sess && this.props.props.user) {
                
                const mySession = await fetch('http://localhost:3000/api/auth/session')
                const res3 = await fetch('http://localhost:3000/api/predict')
                const predi = await res3.json()
                return predi
            }
            else {
                Router.reload()

            }
        } catch (err) {
            console.log('whaaaaaat useer')
            Router.reload()
        }
    }

    setYes = async () => {
        //4th API REQUEST

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
                    user: this.props.props.user,
                    predi: this.state.predi,
                    answer: 'yes'
                })

            }).then((response) => {
                this.setState({
                    answer: 'yes'
                })
                console.log(response)

            })
            this.colorButton()

        } catch (err) {
            console.log(err)
        }
    }

    setNo = async () => {
        //4th API REQUEST

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
                    user: this.props.props.user,
                    predi: this.state.predi,
                    answer: 'no'
                })

            }).then((response) => {
                this.setState({
                    answer: 'no'
                })
                console.log(response)

            })
            this.colorButton()

        } catch (err) {
            console.log(err)
        }
    }



    colorButton() {
        document.getElementById('no').style.backgroundColor = 'blue'
        document.getElementById('yes').style.backgroundColor = 'blue'
    }


    render() {
        return <div className={styles.button}>


            Prediction ID is {this.state.predi.id}



            <div className={styles.form}>

                {this.state.predi.end == 0 ? <>


                    <button id='yes' onClick={this.setYes.bind(this)} className={styles.yes} >Yes</button>
                    <button id='no' onClick={this.setNo.bind(this)} className={styles.no} >No</button>



                </> : <> <h1>Prediction finished result was response {this.state.predi.end}</h1></>}
            </div>

        </div>
    }
}



