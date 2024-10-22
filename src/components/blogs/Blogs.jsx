import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    fetch('dummyData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
  return (
    <div className="md:w-2/3">
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
          >
          </Blog>)
      }
    </div>
  );
};

export default Blogs;