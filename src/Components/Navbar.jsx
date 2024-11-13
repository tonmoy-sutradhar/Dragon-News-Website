import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-1">
      <div></div>
      <div className="space-x-4">
        <Link to="/">HOME</Link>
        <Link to="/career">CAREER</Link>
        <Link to="about">ABOUT</Link>
      </div>
      <div className="flex gap-1 items-center">
        <img className="w-11" src={profile} alt="" />
        <button className="bg-gray-500 px-4 py-1 text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
