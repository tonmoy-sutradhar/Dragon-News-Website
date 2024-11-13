import fb from "../assets/fb.png";
import tw from "../assets/twitter.png";
import In from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3 mt-8">Find Us On</h1>

      <button className="flex justify-start gap-2 items-center p-2 w-full  text-black border-2 ">
        <img className="w-7" src={In} alt="" />
        <h1 className="font-bold">Facebook</h1>
      </button>
      <button className="flex justify-start gap-2 items-center p-2 w-full  text-black border-2  ">
        <img className="w-7" src={tw} alt="" />
        <h1 className="font-bold">Twitter</h1>
      </button>
      <button className="flex justify-start gap-2 items-center p-2 w-full  text-black border-2  ">
        <img className="w-7" src={In} alt="" />
        <h1 className="font-bold">Instagram</h1>
      </button>
    </div>
  );
};

export default FindUs;
