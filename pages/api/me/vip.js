const sequelize = require('../../../database/Database')
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

    try {
        var predictId = req.body

        await fetch('https://legrandarca.ddns.net/api/auth/session')

        const session = await unstable_getServerSession(req, res, authOptions)

        var status = ''
        var result = ''
        var buttonText = ''
        const user = await sequelize.models.users.findOne({


            where: {
                email: session.user.email
            }

        })




        if (user.dataValues.isVip != 1) {
            
            user.set({
                isVip: 1
            })
            await user.save()
            status = 'yes'
            buttonText = "SUB MODE IS ENABLE"
            result = `MAX WIN IS 12. Don\'t cheat there is a verification and you will penalize yourself.`
            } else{

                user.set({
                    isVip: 0
                })
                await user.save()
                status = 'no'
                buttonText = "SUB MODE IS DISABLE"

                result = "MAX WIN IS 6. Don\'t cheat there is a verification and you will penalize yourself."

            }

            res.json(
                {
                    response: {status: status,buttonText: buttonText, sentence: result}
                }
            )
            }catch{

                res.json(
                    {
                        response: 'Error'
                    }
                )
            }
        
}

