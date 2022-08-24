import React from 'react'
import TableRanking from '../components/ranking/tableRanking';
import Head from 'next/head'




export default function Ranking(props) {


    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        </Head>


        <TableRanking></TableRanking>


    </>)
}
