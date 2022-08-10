const sequelize = require('../../database/Database')

export default async function handler(req, res) {


try {
     res.status(400).json(
            {


                response: await sequelize.models.predictions.findOne({

                    
                    order: [['id', 'DESC']]


                })
            }
        )
    }
    catch{

        res.status(400).json(
            {
                response: {
                    id: null
                }
            })
    }        
    
}

