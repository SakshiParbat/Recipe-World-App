import React, { useState } from "react";

import { Search, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };
  return (
    <>
      <nav className="sticky to-0 z-50 bg-slate-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-b-cyan-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to={"/"}
              className="flex items-center text-2xl font-black text-white hover:text-cyan-400 transition duration-300 tracking-widest"
            >
              <Zap className="w-7 h-7 mr-2 text-indigo-400 fill-indigo-400/20" />
              <span className="text-cyan-400">Recipe</span>World
            </Link>

            <form
              onSubmit={searchHandler}
              className="flex-1 max-w-lg mx-4 hidden sm:flex"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search dishes, ingredients, or cuisine..."
                className="w-full px-5 py-2 border border-cyan-900 bg-slate-900 text-slate-50 rounded-l-full focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition placeholder-slate-500 shadow-inner shadow-black/50"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-cyan-600 to-cyan-500 text-white p-2.5 rounded-r-full hover:from-cyan-700 hover:to-cyan-600 transition duration-300 shadow-lg shadow-cyan-800/50 hover:shadow-xl hover:shadow-cyan-800/90"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
