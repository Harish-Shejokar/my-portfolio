import React from "react";
import LindedInIcon from "../../assets/linkedIn.svg";
import Leetcode from "../../assets/leetcode.svg";
import Github from "../../assets/github.svg";
import MyDp from "../../assets/dp_2.jpg";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div id="about" className="py-10 bg-gray-200 font-semibold font-mono ">
      <div className="w-[1280px] mx-auto border border-black">
        <div className="flex mx-[100px]">
          <div className="">
            <h1 className="mt-10 text-4xl font-bold">Hi I'm Harish 👋</h1>
            <div className="mt-4 text-4xl ">
              I'm a full-stack developer with a passion for crafting
              user-centric interfaces. I leverage my skills in React and Node.js
              to create fast, accessible, and visually stunning applications
              that adapt seamlessly to any device.
            </div>
            <div className="flex gap-10 mt-5">
              <a
                href="https://www.linkedin.com/in/Harish-Shejokar-/"
                target="_blank"
              >
                <img
                  className="w-10 cursor-pointer"
                  src={LindedInIcon}
                  alt=".."
                />
              </a>
              <a href="https://leetcode.com/u/Harish__/" target="_blank">
                <img className="w-10 cursor-pointer" src={Leetcode} alt=".." />
              </a>
              <a href="https://github.com/Harish-Shejokar" target="_blank">
                <img className="w-10 cursor-pointer" src={Github} alt=".." />
              </a>
            </div>
          </div>

          {/* db-section */}
          {/* <div className="flex justify-center w-[35%] ">
          <img
            className="h-[320px] w-[200px] shadow-[20px_20px] shadow-gray-500"
            src={MyDp}
            alt="db"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
