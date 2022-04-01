import mongoose from 'mongoose';



const Connection = async () => {
   try{
    const URL =`mongodb://user:user@cluster0-shard-00-00.mele6.mongodb.net:27017,cluster0-shard-00-01.mele6.mongodb.net:27017,cluster0-shard-00-02.mele6.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-bchfyk-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL,{useNewUrlParser: true})

    console.log('Database connected successfully');
   }
   catch (error)
   {
       
    console.log('Error while connecting with  DB',error);
   }
}

export default Connection;