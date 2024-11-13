import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 justify-center my-5 bg-base-200 p-2">
      <p className="bg-[#D72050] px-2 py-1 text-white">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Next Bangladesh
          vs India Next Canada vs Germany — as it happened ! Match Highlights:
          Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
