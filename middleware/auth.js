const { verifyToken } = require('../helpers/generateToken');

const checkAuth = async (req, res, next) => {
    try {
        //authorization: Bearer 1010101010101001010100(token number) 
        const token = req.headers.authorization.split(' ').pop() //divide el Bearer del token
        const tokenData = await verifyToken(token)
        //console.log(tokenData)//BORRAR
        if (tokenData._id) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Tu por aqui no pasas!' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = checkAuth