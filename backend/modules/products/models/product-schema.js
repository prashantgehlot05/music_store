import mongoose,{SchemaType} from "mongoose"

const ProductSchema=mongoose.Schema({
 artistName:{type:SchemaTypes.String,maxLength:20,minLength:1,required:true},
 desc:{type:SchemaTypes.String},
 song:{ type: String, default: './data/train.mp3' },
 image:{type:SchemaTypes.String,required:true}


})

export const productModel=mongoose.model('products',ProductSchema);