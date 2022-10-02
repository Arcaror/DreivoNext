
const sequelize = require('../../../../database/Database')
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req, res) {


  const session = await fetch('http://localhost:3000/api/auth/session')

  const res3 = await fetch('http://localhost:3000/api/predict')
  const predi = await res3.json()
  const sess = await unstable_getServerSession(req, res, authOptions)

  const user = await sequelize.models.users.findOne({


    where: {
      email: sess.user.email
    }

  })


  if (user.dataValues.isAdmin == 1) {
    const response = await sequelize.models.predictions.findOne(
      {
        where: { id: predi.response.id }
      }
    )
    response.set({
      end: "2"
    })

    response.save()



    res.json(
      {

        response: "No"

      }
    )

  } else {
    res.json()
  }
}



