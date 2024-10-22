import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} =blog
  return (
    // full blog
    <div className="mb-7">
      {/* blog cover img */}
      <div className="h-96">
        <img className="w-full h-full rounded-md" src={cover} alt="" />
      </div>
      {/*author data */}
      <div className="flex justify-between items-center">
        {/* author impormation */}
        <div className="mt-4 flex items-center gap-3 justify-between">
          <img className="w-12 h-12" src={author_img} alt="" />
          <div>
            <p className="font-bold text-base">{author}</p>
            <p className="font-bold text-sm">{posted_date}</p>
          </div>
        </div>
        {/* Post Reading time */}
        <div>
          <span className="font-bold text-base">{reading_time} min read </span>
          <button 
          onClick={()=>handleAddToBookmark(blog)} 
          className='ml-1'
          >
            <FaBookmark />
          </button>
        </div>
      </div> 
      {/* Post title */}
      <h2 className="mt-4 font-bold text-2xl">{title}</h2>
      {/* hashtags */}
      <p className="font-semibold text-base mt-4">
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
      {/* Mark as Read */}
      <button onClick={()=>handleMarkAsRead(id, reading_time)} className="underline text-md text-blue-600 mt-2"> Mark as Read</button>
    </div>
  );
};

export default Blog;