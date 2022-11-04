import { clearPreviewData } from 'next/dist/server/api-utils'

const sequelize = require('../../database/Database')
const objCache = require('../../database/Cache')

export default async function handler(req, res) {

    try {

        if (objCache.cacheWinnersNextTime == true) {
            console.log('\x1B[34m winners cache  \x1B[37m');

            res.json({
                response: objCache.winners
            })
        } else {

            console.log('\x1B[31m winners not cache \x1B[37m');

            const winners = await sequelize.models.winners.findAll({


                order: [['createdAt', 'DESC']]


            })
            objCache.winners = winners
            objCache.cacheWinnersNextTime = true
            res.json(
                {


                    response: winners
                }
            )
       
        }
    } catch (err) {
        console.log(`\u001b[1;31m api winners error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



