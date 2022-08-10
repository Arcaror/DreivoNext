//const sequelize = require('../../database/Database')
const sequelize = require ("../../database/Database")


export default async function handler(req, res) {


    var session = req.body

    if (session != undefined) {

    res.status(400).json(
        {

            response: await sequelize.models.session.findOne({


                where: {
                    session_token: session
                }

            })
        }

)
    }
else {

    res.status(400).json({
        response: ''
    })
}}