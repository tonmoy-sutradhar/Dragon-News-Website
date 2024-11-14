import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9 p-4">
          <h1 className="font-bold mb-3">Dragon News</h1>
          {/* ////// */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img src={news.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">{news.title}</h2>
              <p className="text-sm text-gray-500">{news.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="text-white p-2 bg-[#D72050] flex items-center gap-2 mt-2"
                >
                  <FaArrowLeft></FaArrowLeft> All news in this category
                </Link>
              </div>
            </div>
          </div>
          {/* ////// */}
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
