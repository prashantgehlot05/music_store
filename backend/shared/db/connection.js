import mongoose from "mongoose";

export const createConnection =async()=>{
  try{ 
  const result=await mongoose.connect(process.env.DB_URL);

  console.log('DB...connection created...',result);
  }
  catch(err){
    console.log('database connection fails',err);
    throw err;
  }
}