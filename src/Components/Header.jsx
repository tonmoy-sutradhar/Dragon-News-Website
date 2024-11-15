import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  // console.log(import.meta.env.VITE_a);
  return (
    <div>
      <div className="w-[400px] mx-auto py-2">
        <img src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 text-center font-thin text-xl pb-2 ">
        Journalism Without Fear or Favour
      </h1>
      <p className="text-center">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
