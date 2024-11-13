import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="w-[400px] mx-auto py-3">
        <img src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 text-center font-thin">
        Journalism Without Fear or Favour
      </h1>
    </div>
  );
};

export default Header;
