import { DATE } from 'sequelize'
import Prediction from '../../../model/Predictions'

const sequelize = require('../../../database/Database.js')


export default async function handler(req, res) {
    try {
        const predi = await Prediction.create({ name : "Dreivo win the next game?" })
        res.status(400).json(
            {


                created: 1
            })

    } catch {
        res.status(400).json(
            {


                created: 0
            })

    }


}

