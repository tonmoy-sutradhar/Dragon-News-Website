import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins w-11/12 mx-auto my-10">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12 gap-3 pt-8">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>{" "}
        {/*this is main layout */}
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
// className="w-11/12 mx-auto"
