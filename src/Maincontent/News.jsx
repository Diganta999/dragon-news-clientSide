import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Components/NewsCard/NewsCard';

const News = () => {
  const params = useParams();
  const data = useLoaderData();

  const news = data.filter((news) => news.category_id === params.id);

  return (
    <div>
      {params.id === '0'
        ? data.map((newsitem, index) => <NewsCard key={index} data={newsitem} />)
        : news.map((newsitem, index) => <NewsCard key={index} data={newsitem} />)
      }
    </div>
  );
};

export default News;
