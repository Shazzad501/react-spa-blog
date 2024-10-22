import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3">
      <div className="border border-blue-400 bg-slate-300 rounded-md p-4 mb-7">
        <h2 className="font-bold text-base">Spend time on read: {readingTime} min</h2>
      </div>
      <div className="bg-slate-100 p-5 rounded-md">
      <h2 className="text-xl font-bold mb-5">Bookmarked Blog: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
      </div>
    </div>
  );
};

export default Bookmarks;