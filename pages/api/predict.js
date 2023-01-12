const sequelize = require('../../database/Database')
const objCache =  require('../../database/Cache')

export default async function handler(req, res) {

    try {
        await fetch('https://legrandarca.ddns.net/api/auth/session')
        if (objCache.cachePredictionNextTime == true && objCache.prediction.toString() != '[object Object]'){
            // objCache.cachePredictionNextTime = false
            console.log(`\x1B[34m prediction cache ${objCache.prediction.toString()} \x1B[37m`);
            res.json(
                {
                    
                    response : objCache.prediction
    
                    // response: await sequelize.models.predictions.findOne({
    
    
                    //     order: [['id', 'DESC']]
    
    
                    // })
                }
            )
        } else {
            console.log('\x1B[31m prediction not cache \x1B[37m');

            const prediction = await sequelize.models.predictions.findOne({
    
    
                order: [['id', 'DESC']]


            })
            objCache.prediction = prediction
            objCache.cachePredictionNextTime = true
            res.json(
                {
                    
                 
    
                     response: prediction
                }
            )
        }
        
    } catch (err) {
        console.log(`\u001b[1;31m api predict error ${err}`)

        res.status(400).json({
            response: err.toString()
        })
    }
}



