import { DATE } from 'sequelize'
import Participations from '../../../model/Participations'
import Prediction from '../../../model/Participations'

const sequelize = require('../../../database/Database.js')


export default async function handler(req, res) {
    const user = req.body.user
    const predict = req.body.predi
    const answer = req.body.answer

    try {

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
    } catch (err) {

        console.log(err)

        res.status(400).json(

            {

                response: 0
            })

    }


}

