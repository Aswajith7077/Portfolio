"use client";

import React from "react";
import { motion } from "framer-motion";
import { navLinks,nav_link_animation } from "@/Constants/NavStyles";

const NavBar = () => {
  return <nav className="navbar fixed w-full flex flex-row justify-center py-3 backdrop-blur-xl z-[100]">
      <div className="flex flex-row">
        {navLinks.map((value, key) => {
          return <div className="font-semibold font-[lato] text-white text-lg px-10 py-4" key={key}>
              <a href={value.link} >
                <motion.h1 whileHover={nav_link_animation} whileTap={{ scale: 0.9 }} className="cursor-pointer">
                  {value.title}
                </motion.h1>
              </a>
            </div>;
        })}
      </div>
    </nav>;
};

export default NavBar;
