import React from "react";
import reactIcon from "../../assets/reaact-2.png";
import nodejs from "../../assets/nodejs.png";
import javascript from "../../assets/js.png";
import sql from "../../assets/sql.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import express from "../../assets/express.png";
import tailwinds from "../../assets/tailwinds.svg";
import mongodb from "../../assets/MongoDB_ForestGreen.png";
import Github from "../../assets/github-logo.png";
import Typescript from "../../assets/ts-logo-256.png";
import Docker from "../../assets/docker-logo-blue.png";

const TechStack = () => {
  return (
    <div>
      <div className="w-[1280px] mx-auto border border-black">
        <div id="tech-stack" className="p-2 mx-[100px] py-10 my-10">
          <h1 className="mt-4 text-3xl font-semibold text-center">
            The Skills, Tools and Technologies I'm really good at:
          </h1>
          <div className="mt-10 flex gap-x-[90px] gap-y-[60px] flex-wrap justify-center mx-[50px]">
            <div>
              <img className="w-[120px] h-[80px]" src={nodejs} alt="nodejs" />
              <div className="text-center font-medium text-xl">NodeJs</div>
            </div>

            <div>
              <img className="w-[120px] h-[80px]" src={express} alt="express" />
              <div className="text-center font-medium text-xl">ExpressJs</div>
            </div>
            <div className="">
              <img className="w-[120px] h-[80px]" src={reactIcon} alt="react" />
              <div className="text-center font-medium text-xl">ReactJs</div>
            </div>
            <div>
              <img
                className="w-[120px] h-[80px]"
                src={javascript}
                alt="javascript"
              />
              <div className="text-center font-medium text-xl">Javascript</div>
            </div>
            <div>
              <img
                className="w-[120px] h-[80px]"
                src={Typescript}
                alt="mongodb"
              />
              <div className="text-center font-medium text-xl">Typescript</div>
            </div>
            <div>
              <img className="w-[120px] h-[80px]" src={Docker} alt="mongodb" />
              <div className="text-center font-medium text-xl">Docker</div>
            </div>
            <div>
              <img className="w-[120px] h-[80px]" src={sql} alt="sql" />
              <div className="text-center font-medium text-xl">SQL</div>
            </div>

            <div>
              <img className="w-[120px] h-[80px]" src={mongodb} alt="mongodb" />
              <div className="text-center font-medium text-xl">MongoDb</div>
            </div>
            <div>
              <img className="w-[120px] h-[80px]" src={html} alt="html" />
              <div className="text-center font-medium text-xl">HTML</div>
            </div>
            <div>
              <img className="w-[120px] h-[80px]" src={css} alt="css" />
              <div className="text-center font-medium text-xl">CSS</div>
            </div>
            <div className="">
              <img
                className="w-[100px] h-[80px] mx-4"
                src={tailwinds}
                alt="tailwinds"
              />
              <div className="text-center font-medium text-xl">
                Tailwinds CSS
              </div>
            </div>
            <div>
              <img className="w-[100px] h-[80px]" src={Github} alt="github" />
              <div className="text-center font-medium text-xl">Git/Github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
