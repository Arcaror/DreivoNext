const sequelize = require('../../../database/Database')

export default async function handler(req, res) {

    try {
        var predictId = req.body

        const winners =  await sequelize.models.participations.findAll({


            where: {
                prediId: predictId,
                response: 'no'
            }


        })

        winners.forEach(async (participation)=>{
            await sequelize.models.users.increment("winstreak", { by: 1,
                where: {
                    id: participation.userId
                }
            })

        })
        const loosers = await sequelize.models.participations.findAll({

            where: {
                prediId: predictId,
                response: 'yes'
            }

        })

        loosers.forEach(async (participation) => {
            await sequelize.models.users.update({
                'winstreak': 0
            },{
                where: {
                    id: participation.userId
                }
        })
        })

        res.json(
            {
                response: winners + loosers
            }
        )
    } catch (err) {
        console.log(`\u001b[1;31m api predict error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}

