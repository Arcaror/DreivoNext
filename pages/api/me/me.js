import sequelize from "../../../database/Database"



export default async function handler(req, res) {


    var auth = sequelize
    res.status(400).json({
        response: await auth.models.users.findAll()
    })


}