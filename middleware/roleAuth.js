
const { verifyToken } = require('../helpers/generateToken')
const userModel = require('../models/usuario')

const checkRoleAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() //token
        const tokenData = await verifyToken(token)
        const userData = await userModel.findById(tokenData._id) //numero de id

        //Chequea if admin es true
        if (userData.admin) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = checkRoleAuth