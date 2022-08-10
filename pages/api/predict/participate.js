import { DATE } from 'sequelize'
import Participations from '../../../model/Participations'
import Prediction from '../../../model/Participations'

const sequelize = require('../../../database/Database.js')


export default async function handler(req, res) {
  const user = req.body.user
  const predict = req.body.predi
  const answer = req.body.answer

    try {
        const predi = await Participations.create({ userId: user.id, name: user.name , response: answer, prediId: predict.id })
        res.status(400).json(
            {


                created: predi
            })

    } catch {
        res.status(400).json(
            {


                created: 0
            })

    }


}

