import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks, handleMarkedRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then((res)=>res.json())
        .then((data)=> setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            {
                blogs.map((blog)=><Blog 
                key={blog.id} 
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarkedRead = {handleMarkedRead}
                ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
 handleBookmarks: PropTypes.func,
 handleMarkedRead: PropTypes.func,

}

export default Blogs;