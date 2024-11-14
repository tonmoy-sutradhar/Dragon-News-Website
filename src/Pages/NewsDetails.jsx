import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h1 className="font-bold">Dragon News</h1>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
