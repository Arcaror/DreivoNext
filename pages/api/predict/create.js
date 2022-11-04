import { DATE } from 'sequelize'
import Prediction from '../../../model/Predictions'

const sequelize = require('../../../database/Database.js')
const objCache = require('../../../database/Cache')

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    try {
       
       
        const session = await unstable_getServerSession(req, res, authOptions)


        const user = await sequelize.models.users.findOne( {

      
            where: {
                email: session.user.email
          }

    })




        if (user.dataValues.isAdmin == 1) {

            const predi = await Prediction.create({ name: "Dreivo win the next game?" })
            objCache.cachePredictionNextTime = false
            res.json(
                {


                    created: 1
                })

        } else {

            res.status(400).json(
                {


                    created: 0
                })

        }
    }
    catch (err) {
        res.status(400).json(
            {


                created: 'error'
            })

    }


}

