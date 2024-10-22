import profile from "../../assets/profile.png"
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 w-10/12 mx-auto border-b-2">
      <h1 className='font-bold text-2xl'>Knowledge Cafe</h1>
      <img src={profile} alt="Profile img" />
    </div>
  );
};

export default Header;