import React from "react";
import TwitterPic from "../../assets/twitter-thumnail.webp";

const Card2 = () => {
  return (
      <div className="flex gap-4">
      {/* picture-section */}
      <div className="w-[50%]">
        <img className="h-[300px] w-full  border rounded-2xl" src={TwitterPic} alt="" />
          </div>
          
       {/* description-section */}
      <div className="w-[50%] px-6">
              <h2 className="text-2xl font-semibold">Twitter-Clone</h2>
              <h3 className="text-lg font-semibold">Nodejs, Expressjs, Nextjs</h3>
              <p className=" mt-2 text-lg">Developed a Twitter clone leveraging modern web technologies including Node.js, Express.js, and Next.js for a robust backend and dynamic frontend. Utilized GraphQL for efficient API communication, Prisma ORM with PostgreSQL for seamless database interactions, and Tailwind CSS for a responsive and visually appealing UI.</p>
              <div className="mt-2 flex gap-4">
                  <button className="bg-black  text-white font-medium  border px-2 py-1 rounded-md border-black hover:bg-white hover:text-black">Visit Website</button>
                  
              </div>
      </div>
    </div>
  );
};

export default Card2;
