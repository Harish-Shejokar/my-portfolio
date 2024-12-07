import React from "react";
import { HashLink } from 'react-router-hash-link';




const Header = () => {
  return (
    <header className="bg-gray-100">
    <div className="h-[70px] flex justify-between items-center text-black mx-[100px]">
        <div className="text-2xl font-bold">{"</>"}</div>
      <ul className="flex justify-between w-[40%] text-xl">
        <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded p-2"><HashLink smooth to="#about">About</HashLink></li>
          <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded p-2">
            <HashLink smooth to="#tech-stack">TechStack</HashLink>
          </li>
          <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded p-2">
          <HashLink smooth to="#projects">Projects</HashLink></li>
        <button className="cursor-pointer hover:bg-blue-500 hover:text-white rounded p-2">DownloadCV</button>
       </ul>
      </div>
      </header>
  );
};

export default Header;
