import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog)=>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }

  const handleMarkAsRead = (id, time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // remove book mark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }
  return (
    <>
      <Header></Header>

      <div className='w-10/12 mx-auto mt-10 md:flex md: gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
