import mongoose from "mongoose";

 export const connectDB = async () => {
   
         await mongoose.connect('mongodb+srv://fooddelivery:12631263@cluster0.yjcolpa.mongodb.net/full-stack-mern-food-delivery').then(()=>console.log('DB Connected')).catch((err)=>console.log(err));

}
