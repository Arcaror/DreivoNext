import { DATE } from 'sequelize'

const sequelize = require('../../../database/Database.js')
const objCache = require('../../../database/Cache')

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { User } from '@next-auth/sequelize-adapter/dist/models'

export default async function handler(req, res) {
    try {
       
       
        const session = await unstable_getServerSession(req, res, authOptions)


        const user = await sequelize.models.users.findOne( {

      
            where: {
                email: session.user.email
          }

    })




        if (user.dataValues.isAdmin == 1) {

            const users = await sequelize.models.users.findAll()
           
            users.forEach(async (user) => {
                user.set({
                    winstreak: 0
                })
                await user.save()
            })
        

            res.json(
                {


                    reset: 1
                })

        } else {

            res.status(400).json(
                {


                    reset: 0
                })

        }
    }
    catch (err) {
        res.status(400).json(
            {


                reset: 'error'
            })

    }


}

