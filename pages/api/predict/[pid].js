import sequelize from "../../database/Database"

export default function handler(req, res) {
    const { pid } = req.query


    res.status(400).json({response: pid})
  }