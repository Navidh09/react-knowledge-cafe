import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkedRead = (time,id) => {
    const newReadingTime  = readingTime + time;
    setReadingTime(newReadingTime);

    const remaining = bookmarks.filter((bookmark)=>bookmark.id !==id);
    setBookmarks(remaining);
  }



  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>
      <div className="flex">
        <Blogs handleBookmarks={handleBookmarks} handleMarkedRead={handleMarkedRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
