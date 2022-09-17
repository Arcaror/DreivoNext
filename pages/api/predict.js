const sequelize = require('../../database/Database')

export default async function handler(req, res) {

    try {

        res.json(
            {


                response: await sequelize.models.predictions.findOne({


                    order: [['id', 'DESC']]


                })
            }
        )
    } catch (err) {
        console.log(`\u001b[1;31m api predict error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



