import { productModel } from "../models/product-schema";

export const getProducts=(request,response)=>{

      response.status(200).json();

}

export const addProducts= async(request,response)=>{
  const product=request.body;
  
 try{ 
  const doc= await productModel.create(product);
  if(doc && doc._id){

    response.status(200).json({message:'new music added in DB'});
  }
  else{
    response.status(500).json({message:'unable to add new music  in DB'});
    
  }} 
  catch(err){
     
    response.status(500).json({message:'unable to add new music  in DB'});
  }



}