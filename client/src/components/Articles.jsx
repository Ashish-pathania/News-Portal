import { useEffect ,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import getNews from '../service/api';

//Components import
import Article from "./Article";

const Articles = () => {
    
    const [news,setNews] = useState([]);
     
    const [page, setPage] =useState(0);
     
    useEffect(() =>{
        dailyNews();
      }, [page])   //since it will be called on the componentDidMount , so we have to pass an empty array as an condition
   
    const dailyNews = async () =>{
     let response = await getNews(page);   //since the API call needs to fullfil a promise so it needs to be await
     setNews([...news,...response.data]);
    
    }
    
     return (<InfiniteScroll
     dataLength={news.length}
     next={() => setPage(page => page+1)}
     hasMore={true}
     >
        {
        news?.length > 0 && news.map(article => (
        <Article article={article} />
        ))
        }
        </InfiniteScroll>
    )
}


export default Articles;