import React from "react";
import Infscroll from "./InfiniteScroll/Infscroll";

const Skills = () => {
  return (
    <div className="skills w-full h-screen bg-bg-color pt-20">
      <div className="content items-center gap-8 mb-16 px-10 sm:px-10 md:px-20 lg:px-40">
        <div className="heading text-center sm:text-center lg:text-left">
          <p className="text-primary-color font-mono ">02. TECHNOLOGIES</p>
          <h1 className="text-cream-white font-main text-4xl font-semibold mt-3">
            Tech Stack
          </h1>
        </div>
        <div className="line mt-3 w-60 h-1 rounded-xl bg-line-color"></div>
      </div>
      <div className="skills-card mt-20">
        <Infscroll />
      </div>
    </div>
  );
};

export default Skills;
