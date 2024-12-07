import React from "react";
import html from "../../assets/html-5.png";
const Card = () => {
  return (
    <div className="bg-white h-[600px] w-[350px] border-2 px-6 py-6 rounded-3xl relative  transition-all duration-300 hover:scale-110">
      <div className="h-[210px] border-b-2 flex justify-center">
        <img className="w-[190px]" src={html} alt="" />
      </div>
      <div>
        <h3 className="text-xl text-center py-2">Project Title</h3>
        <div className="text-lg font-serif">
          A strong project description provides a roadmap for stakeholders and
          communicates the vision without getting bogged down in details. We’ve
          compiled expert tips and sample project descriptions to help you get
          started.
        </div>
        <div className="text-lg">
          <span className="font-medium">Tech stack : </span>
          <span>html, javascript, react, css</span>
        </div>
        <div className="flex justify-between text-md font-medium mx-2 my-2">
          <div>live-link</div>
          <div>github-link</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
