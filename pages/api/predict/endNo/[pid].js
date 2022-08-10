
const sequelize = require('../../../../database/Database')

export default async function handler(req, res) {
  const { pid } = req.query

  const response = await sequelize.models.predictions.findOne(
    {
      where: { id: pid }
    }
  )
  response.set({
    end: "2"
  })

  response.save()



  res.status(400).json(
    {

      response: "No"

    }
  )


}



