"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillProps, Skills, TagProps } from "@/Constants/Skills";
import { skillsDescription } from "@/Constants/Details";

type tagProps = {
  content: TagProps
};

type skillProps = {
  content: SkillProps;
  delay: number;
};

const Tags = ({ content }: tagProps) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#000329]  px-5 rounded-full py-3 flex flex-row items-center gap-2 my-3 mx-2"
      >
        <h1 className="font-[source sans 3] font-semibold text-gray-400 ">
          {content.title}
        </h1>
      </motion.button>
    </div>
  );
};

const Card = ({ content, delay }: skillProps) => {
  return (
    <motion.div
      className="flex flex-row lg:mx-5 my-[5%]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 * delay }
      }}
    >
      <div className="flex flex-col gap-3 w-1/5 items-center justify-center rounded-full ">
        {content.icon}
        <h1 className="font-[manrope] text-xl px-3">{`${content.performance} %`}</h1>
      </div>
      <div className="w-4/5 mx-5">
        <h1 className="font-[lato] font-semibold text-3xl mx-2 my-3">
          {content.title}
        </h1>
        <div className="flex flex-wrap">
          {content.tags.map((value, key) => {
            return <Tags content={value} key={key} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsComponent = () => {
  return <div className="my-[3%] mx-[5%] flex flex-col lg:flex-row" id="skills">
      <div className="w-full lg:w-2/5">
        <h1 className="font-[montserrat] text-5xl font-semibold ">
          My Skills
        </h1>
        <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } }} className="font-[source sans 3] my-[10%] text-lg lg:mr-10">
          {skillsDescription}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/5">
        {Skills.map((value, key) => {
          return <Card key={key} content={value} delay={key - key / 2} />;
        })}
      </div>
    </div>;
};

export default SkillsComponent;
