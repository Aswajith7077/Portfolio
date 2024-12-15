"use client";

import React, { SetStateAction, useEffect, useMemo, useRef } from "react";
import { ProjectComponents } from "@/Constants/Projects";
import { domain_tags } from "@/Constants/Projects";
import { motion } from "framer-motion";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

type TagProps = {
  ref:React.RefObject<HTMLButtonElement | null>,
  current:number,
  content: string;
  onClick: CallableFunction;
};

const Tag = ({ ref,current,content, onClick }: TagProps) => {
  return <motion.button ref={ref} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClick()} className={`py-3 px-7 ${current == 0 ? "bg-[#0f172a]" : "bg-black-100"} rounded-full font-[lato] font-semibold`}>
      {content}
    </motion.button>;
};



const Works = () => {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(ProjectComponents[0]);

  const TagRefs: React.RefObject<HTMLButtonElement | null>[] = useMemo(
  () => Array.from({ length: domain_tags.length }, () => useRef<HTMLButtonElement>(null)),
  [domain_tags.length]
);


  useEffect(
    () => {
      const newComponents:JSX.Element[] = ProjectComponents[selected];
      setCurrent(newComponents);
    },
    [selected]
  );

  const change = (value: number) => {
    const temp = selected;

    if(TagRefs[temp].current instanceof HTMLButtonElement){
      TagRefs[temp].current.style.backgroundColor = "#00000000";
      TagRefs[temp].current.style.border = "#00000000"
    }
    if(TagRefs[value]?.current instanceof HTMLButtonElement) {
      TagRefs[value].current.style.backgroundColor = "#0f172a";
      TagRefs[value].current.style.border = "#FFFFFF";
    }
    setSelected(value as SetStateAction<number>);
  };



  return (
    <div className="flex flex-col items-center my-[3%]" id="works">
      <h3 className="font-[lato] font-semibold my-3 text-lg">
        Best of my Works
      </h3>
      <h1 className="font-[montserrat] font-semibold text-5xl text-purple-300">
        Latest Project
      </h1>

      <div className="flex flex-row gap-5 mt-10">
        {domain_tags.map((value, key) => {
          return <Tag key={key} current={key} ref={TagRefs[key]} content={value} onClick={()=>change(key)} />;
        })}
      </div>
      <div className="flex flex-row gap-10">
        {current}
      </div>
    </div>
  );
};

export default Works;
