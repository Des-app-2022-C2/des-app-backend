const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            username: user.usuario
        },
        process.env.JWT_SECRET,//Variable de entorno en .env
        {
            expiresIn: "2h",//Tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => {
    return jwt.decode(token, null)
}

module.exports = { tokenSign, decodeSign, verifyToken }