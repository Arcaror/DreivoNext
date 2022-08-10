
const sequelize = require ("../../database/Database")


export default async function handler(req, res) {


    var user = req.body 

    if (user != {}){
    console.log(`User is + ${user}`)
    res.status(400).json({
        response: await sequelize.models.users.findOne( {

      
            where: {
                id: user
          }

    })
    })
}else{
    res.status(400).json({
        response: ''
    })
}

}