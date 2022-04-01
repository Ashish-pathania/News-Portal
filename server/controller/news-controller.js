import News from '../modal/news.js';


export const getNews = async(request,response) =>{
    try{
        const size =Number(request.query.size);   //we get string from back , so we have to change it to number
        const skip =Number(request.query.page);

         let data= await News.find({}).limit(size).skip(size*skip);  //count =5 , initial skip=0
        
         response.status(200).json(data);
    }
    catch(error){
    response.status(500).json(error);
    }
}