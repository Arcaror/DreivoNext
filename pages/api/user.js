
const sequelize = require("../../database/Database")


export default async function handler(req, res) {



    try {
        const userId = req.body.userId
        const userName = req.body.userName


        if (userName == 'undefined') {
            console.log(`User is ${userId}`)

            const user = await sequelize.models.users.findOne({


                where: {
                    id: userId
                }

            })
            res.json({
                response: { id: user.dataValues.id, name: user.dataValues.name, winstreak: user.dataValues.winstreak, isAdmin: user.dataValues.isAdmin }
            })
    
        }
        else {
            console.log(`User is ${userName}`)

            const user = await sequelize.models.users.findOne({


                where: {
                    name: userName
                }

            })
            res.json({
                response: { id: user.dataValues.id, name: user.dataValues.name, winstreak: user.dataValues.winstreak, isAdmin: user.dataValues.isAdmin }
            })
    
        }


     





    } catch (err) {
        console.log(`\u001b[1;31m api user error ${err}`)
        res.status(400).json({
            response: {}
        })
    }

}