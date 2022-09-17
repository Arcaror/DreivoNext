
const sequelize = require('../../../../database/Database')

export default async function handler(req, res) {

  try{
    
  const { pid } = req.query

  const response = await sequelize.models.predictions.findOne(
    {
      where: { id: pid }
    }
  )
  response.set({
    end: "1"
  })

  response.save()



  res.json(
    {

      response: "Yes"

    }
  )


}catch(err){
  res.json({
    response: 'click again'
  })
}

}



