"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks,nav_link_animation } from "@/Constants/NavStyles";

const NavBar = () => {
  return <nav className="navbar fixed w-full flex flex-row justify-center py-3 backdrop-blur-xl z-[100]">
      <div className="flex flex-row">
        {navLinks.map((value, key) => {
          // console.log(value.title, key);
          return <div className="font-semibold font-[lato] text-white text-lg px-10 py-4" key={key}>
              <ScrollLink to={value.link} smooth={true} duration offset={-100}>
                <motion.h1 whileHover={nav_link_animation} whileTap={{ scale: 0.9 }} className="cursor-pointer">
                  {value.title}
                </motion.h1>
              </ScrollLink>
            </div>;
        })}
      </div>
    </nav>;
};

export default NavBar;