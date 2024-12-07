import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="w-[1280px] mx-auto border border-black">
        <div className="py-4 mx-[100px]">
          <h1 className="text-3xl text-center font-bold py-2">Experience</h1>
          <div className="py-2">
            <h1 className="text-2xl font-bold ">
              FullStack Developer at SkimboxUs Technologies
            </h1>
            <h3 className="text-xl font-semibold">Jan 2024 - Present</h3>
            <div className="text-lg font-mono">
              Developed efficient and scalable backend systems using
              Node.js/Express.js to manage data effectively. Created intuitive
              and engaging web interfaces using React.js, ensuring a seamless
              user experience.
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-2xl font-bold ">
              FullStack Developer Intern at SkimboxUs Technologies
            </h1>
            <h3 className="text-xl font-semibold">Sep 2023 - Dec 2023</h3>
            <div className="text-lg font-mono">
              Gained expertise in both front-end (React.js) and back-end
              (Node.js/Express.js) development. Expanded database knowledge by
              working with both relational (MySQL) and NoSQL (MongoDB)
              databases.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
