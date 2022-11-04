const sequelize = require('../../database/Database')
const objCache = require('../../database/Cache')

export default async function handler(req, res) {

    try {

        if (objCache.cacheRankingNextTime == true) {
            console.log('\x1B[34m ranking cache  \x1B[37m');


            res.json({
                response: objCache.ranking
            })
        } else {

            console.log('\x1B[31m ranking not cache \x1B[37m');

        const users = await sequelize.models.users.findAll({

            attributes: {
                exclude: ['email'],
                order: [['winstreak', 'DESC']]


            }
        }
        )


        objCache.ranking = users
        objCache.cacheRankingNextTime = true

        res.status(400).json({
            response: users
        })

    }
    } catch (err) {
        console.log(`\u001b[1;31m api ranking error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



