import User from "../../models/User"
import connectMongo from "../../config/dbConnect"

export default async function handler(req, res) {
    const method = req.method
    await connectMongo()

    let result 
      switch(method){
          case 'GET':
            try {
              result = await User.find()
              if(!result?.length) {
                res.status(400).json({ "mes": 'No user found' })

              } 
              res.json(result)
            } catch (err) {
              res.status(400).json({ "mes": 'No user found' })

            }
            break
            case 'DELETE':
              const {id} = req.body
              const user = await User.findById(id).exec()
              console.log(id)

            try {
              result = await user.deleteOne()
              res.status(200).json({ "mes": `${result._id} deleted` })

            } catch (err) {
              res.status(400).json({ "mes": 'No user found' })

            }
            break
      }

}