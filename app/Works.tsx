"use client";

import React, { useEffect } from "react";
import { ProjectComponents } from "@/Constants/Projects";
import { domain_tags } from "@/Constants/Projects";
import { motion } from "framer-motion";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

type TagProps = {
  className:string,
  content: string;
  onClick: CallableFunction;
};

const Tag = ({ className,content, onClick }: TagProps) => {
  return <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=>onClick()} className={`py-3 px-7 rounded-full font-[lato] font-semibold ${className}`}>
      {content}
    </motion.button>;
};



const Works = () => {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(ProjectComponents[0]);

  // const TagRefs: React.RefObject<Ref<HTMLButtonElement>[]> = useRef([]);
  
  useEffect(
    () => {
      const newComponents:JSX.Element[] = ProjectComponents[selected];
      setCurrent(newComponents);
    },
    [selected]
  );

  // const change = (value: number) => {

  //   // if(TagRefs.current[selected] instanceof HTMLButtonElement){
  //   //   TagRefs.current[selected].style.backgroundColor = "#00000000";
  //   //   TagRefs.current[selected].style.border = "#00000000"
  //   // }
  //   // if(TagRefs?.current[selected] instanceof HTMLButtonElement) {
  //   //   TagRefs.current[selected].style.backgroundColor = "#0f172a";
  //   //   TagRefs.current[selected].style.border = "#FFFFFF";
  //   // }
  //   // // console.log(value,selected);
  //   setSelected(value as SetStateAction<number>);
  // };



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
          return <Tag key={key} className={(key == selected)?'bg-[#0F172A]':'bg-transparent'} content={value} onClick={()=>{
            setSelected(key);
            console.log(selected,key);
          }} />;
        })}
      </div>
      <div className="flex flex-row gap-10">
        {current}
      </div>
    </div>
  );
};

export default Works;
