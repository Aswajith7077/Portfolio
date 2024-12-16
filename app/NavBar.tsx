"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks,nav_link_animation } from "@/Constants/NavStyles";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [collapse,setCollapse] = useState(false);
  return <nav className="navbar fixed w-full flex flex-row justify-end md:justify-center py-3 backdrop-blur-xl z-[100]">
      <div className="md:flex flex-row hidden">
        {navLinks.map((value, key) => {
          return <div className="font-semibold font-[lato] text-white text-md md:py-3 md:text-lg px-10 py-4" key={key}>
              <a href={value.link}>
                <motion.h1 whileHover={nav_link_animation} whileTap={{ scale: 0.9 }} className="cursor-pointer">
                  {value.title}
                </motion.h1>
              </a>
            </div>;
        })}
      </div>
      <div className="flex flex-col md:hidden">
        <motion.button
          whileHover={{scale:1.1,transition:{duration:0.2}}}
          whileTap={{scale:0.95,transition:{duration:0.2}}}
          className="p-4 bg-slate-900 rounded-2xl mx-5 my-3"
        >
          <IoMenu size={36} onClick={()=>setCollapse(!collapse)}/>
        </motion.button>
      </div>
    </nav>;
};

export default NavBar;
