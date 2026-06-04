import { Key, Utensils } from "lucide-react";

import { Link } from "react-router-dom";

const CategorySelection = ({filterByCategory}) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];
  return (
    <>
      <section className="mt-20">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-8 tracking-tight border-1-4 border-indigo-400 pl-6 flex items-center">
          <Utensils className="w-7 h-7 mr-3 text-cyan-500" />
          Quick Filter by Primary Ingredient
        </h2>
        <br />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {featuredCategories.map((cat, index) => (
            <Link
              to={`search/${cat}`}
              key={index}
              onClick={()=>filterByCategory(cat)}
              className="bg-slate-800 p-6 sm:p-6 rounded-xl shadow-xl shadow-black/50 transition duration-300 text-center font-semibold text-slate-100 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transform hover:scale-[1.05] hover:bg-slate-700/50 mx-4 mt-6"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategorySelection;
