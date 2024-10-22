const Bookmark = ({bookmark}) => {
  const {author, title} = bookmark;
  return (
    <div className="bg-white p-3 rounded-md mb-5">
      <h2 className="font-bold text-base">{title}</h2>
      <p className="font-bold text-sm">{author}</p>
    </div>
  );
};

export default Bookmark;