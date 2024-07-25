import express  from 'express';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';

const app= express();
dotenv.config();

const promise=createConnection();
promise.then(r=>{
  app.listen(4444,err =>{
    if(err){
  
       console.log("Application crash",err);
  
    }else{
  
      console.log("Application is up and running ");

}})
}).catch(err=>{

  console.log("Application is can not up DB is down",err);

})








