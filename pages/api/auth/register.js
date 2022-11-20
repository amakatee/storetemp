import User from "../../../models/User";
import connectMongo from "../../../config/dbConnect";
import bcrypt from 'bcrypt'

export default async function handler(req,res) {
    const {username, password} = req.body
    const method = req.method
    await connectMongo()

    if(method === "POST") {
        if(!username || !password) return res.status(400).json({"mes": "Username and Password are required"})
        //checking for duplicates
        const duplicate = await User.findOne({username}).exec()
        if(duplicate) return res.status(409) //conflict
        try {
          const hashedPwd = await bcrypt.hash(password, 10)
          const newUser = await User.create({
              "username": username,
              "password":hashedPwd
           })
  
          res.status(201).json({'mes': `new user ${newUser.username} created`})


        }catch(err) {
            res.status(500).json({'mes': err})
        }

    }
}