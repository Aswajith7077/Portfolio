"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, EducationProps, experiences } from "@/Constants/Details";

type edProps = {
  content:EducationProps
}

const Card = ({ content }: edProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{x:0,opacity:1,transition:{
        duration:0.5,
        delay:0.25
      }}}
      className="flex flex-row items-center"
    >
      <div className="rounded-full bg-purple w-[1.5rem] h-[1.5rem] p-2" />

      <div className="bg-white rounded-[20px] dark:bg-slate-900 py-5 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col px-[5%] mx-5">
        <p className="text-left text-[#2f93bd] font-semibold w-full font-[source sans 3] my-3 text-[16px] text-">{`${content.from} - ${content.to}`}</p>
        <h1 className="font-[lato] font-semibold text-left text-2xl text-white">
          {content.title}
        </h1>
        <p className="text-left text-gray-400 w-full mt-7 mb-3 font-[source sans 3] text-md">
          {content.description}
        </p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="flex flex-row mx-[5%] my-[5%]" id="experience">
      <div className="flex flex-col w-full">
        <h1 className="font-[montserrat] font-semibold text-3xl">
          My Education
        </h1>
        <div className="flex flex-col my-10 mr-10">
          {education.length
            ? education.map((value, key) => {
                return <Card key={key} content={value} />;
              })
            : <p className="font-[lato] text-lg font-semibold">
                There is no education so far
              </p>}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="font-[montserrat] font-semibold text-3xl">
          My Experience
        </h1>
        <div className="flex flex-col my-[10%] items-center justify-center">
          {experiences.length
            ? experiences.map((value, key) => {
                return <Card key={key} content={value} />;
              })
            : <p className="font-[lato] text-lg font-semibold">
                There is no experience so far
              </p>}
        </div>
      </div>
    </div>
  );
};

export default Education;
