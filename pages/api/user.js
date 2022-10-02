
const sequelize = require ("../../database/Database")


export default async function handler(req, res) {



    try {
        const userId = req.body 

        console.log(`User is + ${userId}`)

            const user = await sequelize.models.users.findOne( {

      
                where: {
                    id: userId
              }
    
        })
        


            res.status(400).json({
                response: { id : user.dataValues.id, name: user.dataValues.name, winstreak: user.dataValues.winstreak, isAdmin: user.dataValues.isAdmin }
             })
            
        

       


    }catch(err){
        console.log(`\u001b[1;31m api user error ${err}`)
        res.status(400).json({
            response : {}
        })
    }

}