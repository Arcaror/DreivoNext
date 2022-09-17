
//const sequelize = require('../../database/Database')
const sequelize = require("../../database/Database")


//handler to get my session
export default async function handler(req, res) {


    var session = req.body

  try {
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
    catch(err) {


        console.log(`\u001b[1;31m api session error ${err}`)
        res.status(400).json({
            response: err
        })
    }
}