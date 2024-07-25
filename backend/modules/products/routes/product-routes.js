import express from'express';
import { addProducts, getProducts } from '../controllers/product-controller';
const routes=express.Router();



routes.app.get('/view-products',getProducts)
routes.app.post('/add-products',addProducts)

// routes.app.put('/update-products',(request,response)=>{
//   response.send('products');})

//   routes.app.send('/search-products',(request,response)=>{
//     response.send('products');})
  

  
