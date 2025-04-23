import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const AllNews = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.map((newsItem, index) => (
        <NewsCard key={index} data={newsItem} />
      ))}
    </div>
  );
};

export default AllNews;
