import { DATE } from 'sequelize'
import Participations from '../../../model/Participations'
import Prediction from '../../../model/Participations'
const { Op } = require('sequelize');
const sequelize = require('../../../database/Database.js')
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"


const moment = require('moment')

export default async function handler(req, res) {
    const user = req.body.user
    const predict = req.body.predi
    const answer = req.body.answer

    try {
        const session = await unstable_getServerSession(req, res, authOptions)
        
        const userFromSession = await sequelize.models.users.findOne({
    
    
            where: {
              email: session.user.email
            }
        
          })

        let diff = moment.utc().diff(predict.createdAt, 'seconds')
        if (diff <= 20 && userFromSession.name == user.name) {
            console.log(`fine ${diff}`)

            res.json(
                {

    
                    response: await Participations.findOrCreate({
                        where: {
                            userId: user.id,
                            prediId: predict.id
                        },
                        defaults: {
                            userId: user.id,
                            name: user.name,
                            response: answer,
                            prediId: predict.id
                        }
    
    
    
                    })
    
                })
        } else{
            console.log(`too late ${diff}`)
            res.json(
                {
    
    
                    response: 'too late'
                })
        }

    } catch (err) {

        console.log(err)

        res.status(400).json(

            {

                response: 0
            })

    }


}

