import { useContext } from "react";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center py-1">
      <div className="text-xl font-semibold">
        {/* {<span className="text-blue-500 ">{user && user.name}</span>} */}
        <h1>
          <span>User Email: </span>
          <span className="text-blue-500 font-semibold">
            {user && user.email}
          </span>
        </h1>
      </div>
      <div className="space-x-4 font-bold ">
        <Link to="/">HOME</Link>
        <Link to="/career">CAREER</Link>
        <Link to="about">ABOUT</Link>
      </div>
      <div className="flex gap-1 items-center">
        <img className="w-11 rounded-full" src={profile} alt="" />
        {user && user?.email ? (
          <button onClick={logOut} className="bg-gray-500 px-4 py-1 text-white">
            Log-out
          </button>
        ) : (
          <Link to="/auth/login" className="bg-gray-500 px-4 py-1 text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
