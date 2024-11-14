import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    author,
    title,
    details,
    image_url,
    rating,
    total_view,
    published_date,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <h2 className="text-lg font-bold mt-3">{title}</h2>
      <img
        src={image_url}
        alt="news"
        className="w-full h-[400px] object-cover mt-3 rounded-lg"
      />

      <p className="text-gray-600 text-sm mt-3">
        {details.length > 100 ? `${details.slice(0, 100)}...` : details}{" "}
        <span className="text-primary cursor-pointer">Read More</span>
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
