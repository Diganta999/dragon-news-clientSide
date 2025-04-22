import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Components/NewsCard/NewsCard';

const News = () => {
    const params = useParams();
    console.log(params);
    const data = useLoaderData();
    

    const news = data.filter((news) => news.category_id === params.id); 
    console.log(news);
    return (
        <div>
            {
                news.map((newsitem) => <NewsCard key={newsitem.category_id} data={newsitem}></NewsCard>)
            }
        </div>
    );
};

export default News;