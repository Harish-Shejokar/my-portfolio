import React from "react";
import Card from "./card";
import Card2 from "./card2";

const Projects = () => {
  return (
    <div>
      <div className="w-[1280px] mx-auto border border-black">
        <div id="projects" className="mx-[100px] px-8 py-4">
          <h2 className="text-center text-3xl font-bold">Projects</h2>
          <div className="flex gap-8 mt-8 flex-wrap justify-center lg:justify-around ">
            {/* <Card />
          <Card />
          <Card /> */}
            <Card2 />
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
