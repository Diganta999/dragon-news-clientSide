import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ data }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    total_view,
    rating
  } = data;

  return (
    <div className="p-5 mb-6 space-y-4 bg-white shadow-md rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date.split(' ')[0]}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold">{title}</h3>

      {/* Image */}
      <img src={thumbnail_url} alt="thumbnail" className="w-full h-[600px] rounded-md w" />

      {/* Details */}
      <p className="text-sm text-gray-600">
        {details.slice(0, 200)}...
        <span className="font-semibold text-red-500 cursor-pointer"> Read More</span>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.floor(rating.number) ? 'text-orange-400' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
