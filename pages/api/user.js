
const sequelize = require ("../../database/Database")


export default async function handler(req, res) {



    try {
        var user = req.body 

        console.log(`User is + ${user}`)

    res.status(400).json({
        response: await sequelize.models.users.findOne( {

      
            where: {
                id: user
          }

    })
    })
    }catch(err){
        console.log(`\u001b[1;31m api user error ${err}`)
        res.status(400).json({
            response : err
        })
    }

}