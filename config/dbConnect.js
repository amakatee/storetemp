import mongoose from 'mongoose'

export default async function connectMongo(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to Mongo')

    } catch(err) {
        console.log(err)
    }

}

