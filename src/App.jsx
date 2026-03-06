import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const App = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Text Search
        </h1>
        <a href="https://www.github.com" target="_blank"
         className="bg-black text-white px-4 py-2 rounded-full text-semibold flex items-center gap-2">
          <FaGithub /> <span>Repository</span>
        </a>
      </nav>
    </div>
  );
};

export default App;
