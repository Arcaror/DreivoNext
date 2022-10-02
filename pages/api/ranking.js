const sequelize = require('../../database/Database')

export default async function handler(req, res) {

    try {
        fetch('http://localhost:3000/api/auth/session')
        
                    const users =  await sequelize.models.users.findAll({

                        attributes: { exclude: ['email'],
                        order: [['winstreak', 'DESC']]
    
    
                    }}
                    )
                
        
        
                    res.status(400).json({
                        response: users
                     })


        res.json(
            {


             
            }
        )
    } catch (err) {
        console.log(`\u001b[1;31m api predict error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



