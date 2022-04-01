import axios from 'axios';

const URL = 'http://localhost:8000';
const getNews = async (page ,size =5) => {
    try{
      return await axios.get(`${URL}/news?page=${page}&size=${size}`);  // here/news is the API call of news ,we have to create the route for this in the BE
    }
    catch(error){
        console.log('Error while calling getNews API',error);
    }
}

export default getNews;