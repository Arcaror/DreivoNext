import React from 'react'
import TableWinners from '../components/winners/tableWinners';
import Head from 'next/head'




export default function Winners(props) {


    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <TableWinners></TableWinners>


    </>)
}
