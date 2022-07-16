export default function handler(req, res) {

 
    //res.status(200).send( { message: req.body } )
    console.log(req.body)
    res.send({ptdr:'srx'})
}