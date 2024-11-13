import google from "../assets/google.png";
import github from "../assets/github.png";

const SocialLogin = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold mb-3">Login With</h1>
        <button className="flex justify-center gap-2 items-center p-2 mb-2 w-full bg-gray-100 text-blue-400 border-2 border-gray-500 rounded-xl">
          <img className="w-7" src={google} alt="" />
          <h1 className="font-bold">Login with Google</h1>
        </button>
        <button className="flex justify-center gap-2 items-center p-2 mb-2 w-full bg-gray-100  border-2 border-gray-500 rounded-xl">
          <img className="w-7" src={github} alt="" />
          <h1 className="font-bold">Login with GitHub</h1>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
