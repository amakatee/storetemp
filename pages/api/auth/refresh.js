import jwt from 'jsonwebtoken'
import User from '../../../models/User'

export default async function handler(req,res) {
    const method = req.method
    const {cookies} = req
    const refreshToken = cookies.jwt

    if(method === "GET") {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN,
            async (err, decodedToken) => {
                if(err) return res.sendStatus(401)

                const foundUser = await User.findOne({ username: decodedToken.username}).exec()
                if(!foundUser) return res.status(401).json({"mes": 'User wasmt found'})

                const accessToken = jwt.sign(
                    {"username": foundUser.username},
                    process.env.ACCESS_TOKEN,
                  

                )

                res.json({accessToken})
            }
        )
    }
}