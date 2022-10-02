
const sequelize = require('../../../../database/Database')

export default async function handler(req, res) {

  try{
    
    await fetch('http://localhost:3000/api/auth/session')

    const res3 = await fetch('http://localhost:3000/api/predict')
    const predi = await res3.json()

    const response = await sequelize.models.predictions.findOne(
    {
      where: { id: predi.response.id }
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



