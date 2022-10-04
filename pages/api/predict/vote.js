const sequelize = require('../../../database/Database')

export default async function handler(req, res) {

    var userId = req.body.userId
    var prediId = req.body.prediId

    try {
        await fetch('http://localhost:3000/api/auth/session')
        res.json(
            {


                response: await sequelize.models.participations.findOne({


                    where: {
                        userId: userId,
                        prediId: prediId
                    }


                })
            }
        )
    } catch (err) {
        console.log(`\u001b[1;31m api participation error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



