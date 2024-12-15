"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

type ButtonProps = {
  title: string,
  icon: string,
  delay: number
};

const Button = ({ title, icon = "",delay }: ButtonProps) => {
  var element: any;
  var link: string = "";
  if (icon == "github") {
    element = <FaGithub size={24} />;
    link = "https://github.com/Aswajith7077";
  } else if (icon == "figma") {
    element = <FaFigma size={24} />;
    link =
      "https://www.figma.com/files/team/1344679975946761819/recents-and-sharing?fuid=1220748968210947621";
  }

  if(!link.length || !element)
    return

  return (
    <motion.div initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0,transition:{
        duration:1,
        delay:0.25 + 0.25 * delay
      }}}
      className=" text-white px-3  bg-[#020617] cursor-pointer">
      <motion.a
        href={link}
        whileHover={{ scale: 1.05,
          transition:{
            duration:0.2
          }
         }}
        whileTap={{ scale: 0.95,
          transition:{
            duration:0.2
          }
         }}
        className="flex py-4 px-7 flex-row items-center gap-3 font-[lato] border-2 font-semibold rounded-3xl text-white text-md justify-center"
      >
        {element}
        {title}
      </motion.a>
    </motion.div>
  );
};

export default Button;
