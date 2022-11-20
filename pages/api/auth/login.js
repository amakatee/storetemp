import User from '../../../models/User'
import bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import connectMongo from '../../../config/dbConnect'

export default async function handler(req, res) {
    const {username, password} = req.body 
    const method = req.method

    await connectMongo()

    if(method === "POST") {
        try {
            if(!username || !password) return res.status(400).json({"mes": "Username and password are required"})
            const foundUser = await User.findOne({username}).exec()
            if(!foundUser) return res.status(401).json({"mes": "Unauth"})

            const match = await bcrypt.compare(password, foundUser.password)
            if(!match) return res.status(401).json({"mes": "Unauth"})

            if(match) {
                const accessToken = jwt.sign(
                    {"username": foundUser.username},
                    process.env.ACCESS_TOKEN,
                    {expiresIn: '40s'}
                )

                const refreshToken = jwt.sign(
                    {"username": foundUser.username},
                    process.env.REFRESH_TOKEN,
                    {expiresIn: '1d'}
                )

                res.setHeader('Set-Cookie', serialize('jwt', refreshToken, {
                    httpOnly: true,
                    //secure:true,
                    maxAge: 7 * 24 * 60 * 60 *1000
                }))

                res.json({accessToken})
            }
        } catch(err) {
            console.log(err)
        }
    }

}