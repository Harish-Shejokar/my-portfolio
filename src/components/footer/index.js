import React from "react";
import LindedInIcon from "../../assets/linkedIn.svg";
import Leetcode from "../../assets/leetcode.svg";
import Github from "../../assets/github.svg";
import MyDp from "../../assets/dp_2.jpg";

const Footer = () => {
  return (
    <footer className="h-[10rem] bg-slate-200 flex flex-col justify-center">
      <div className="w-[1280px] mx-auto border border-black">
        <div className="flex justify-center mx-[120px] items-center h-[90%]">
          {/* <div>logo</div> */}
          {/* <div className="text-3xl font-bold">{"</>"}</div> */}
          <div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
