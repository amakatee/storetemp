import mongoose from 'mongoose';


const productsSchema = new mongoose.Schema({
    title: {
        type: String,
   

    },
    description: {
        type: String,
     

    },
    image:{
        type: String
    }
})

const Product = mongoose.models.Product || mongoose.model('Product', productsSchema)


export default Product