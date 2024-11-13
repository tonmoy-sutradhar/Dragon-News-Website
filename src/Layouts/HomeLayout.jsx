import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../LayoutComponents/LeftNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins w-11/12 mx-auto">
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
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">right side</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
// className="w-11/12 mx-auto"
