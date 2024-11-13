import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <>
      <div>
        <h1 className="font-semibold">All Category {categories.length}</h1>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {categories.map((c) => (
          <NavLink
            to={`/category/${c.category_id}`}
            className="text-gray-400 py-2 btn"
            key={c.category_id}
          >
            {c.category_name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default LeftNavbar;
