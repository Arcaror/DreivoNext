const sequelize = require('../../../database/Database')

export default async function handler(req, res) {

    try {
        var predictId = req.body
        await fetch('http://localhost:3000/api/auth/session')
        const winners = await sequelize.models.participations.findAll({


            where: {
                prediId: predictId,
                response: 'yes'
            }


        })

        winners.forEach(async (participation) => {
            await sequelize.models.users.increment("winstreak", {
                by: 1,
                where: {
                    id: participation.userId
                }
            })
            const guy = await sequelize.models.users.findOne({
                where: {
                    id: participation.userId
                }
            })

            if (guy.dataValues.winstreak == 5 || guy.dataValues.winstreak == 6 || guy.dataValues.winstreak == 10) {
                await sequelize.models.winners.create({ userId: guy.id, name: guy.name, winstreak: guy.winstreak })
                if (guy.dataValues.winstreak == 10) {
                    const upd = await sequelize.models.users.findOne(
                        {
                            where: { id: guy.id }
                        }
                    )
                    upd.set({
                        winstreak: "0"
                    })

                    upd.save()
                }
            }
        })

        const loosers = await sequelize.models.participations.findAll({

            where: {
                prediId: predictId,
                response: 'no'
            }

        })

        loosers.forEach(async (participation) => {
            await sequelize.models.users.update({
                'winstreak': 0
            }, {
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

