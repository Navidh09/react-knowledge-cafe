import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleMarkedRead }) => {
  const {id,
    cover_photo,
    author_name,
    author_img,
    title,
    publish_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="w-2/3">
      <img className="w-full" src={cover_photo} alt="" />
      <div className="flex justify-between items-center my-4">
        <div className="flex">
          <img className="w-12" src={author_img} alt="" />
          <div className="ml-2">
            <h3>{author_name}</h3>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className="flex items-center">
            <span>{reading_time} minutes read</span>
            <button onClick={()=>handleBookmarks(blog)} className="ml-2"><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2>{title}</h2>
      <p>
        {
          hashtags.map((hashtag, idx)=><span key={idx}><a href="">{hashtag}</a></span> )
        }
      </p>
      <button onClick={()=>handleMarkedRead(reading_time, id)} className="my-4 text-purple-800">Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkedRead: PropTypes.func,
};

export default Blog;
