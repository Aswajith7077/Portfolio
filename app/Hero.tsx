"use client";

import React from "react";
import Image from "next/image";
import { FlipWords } from "../Components/ui/flip-words";
import { myself, resume_link } from "@/Constants/Details";
import { HiDocumentText } from "react-icons/hi";
import Button from "./Button";
import { motion } from "framer-motion";

const description: string =
  "I'm passionate UI/UX designer with a mission to create delightful and intuitive digital experiences.With a strong foundation in design principles and a keen eye for detail. I specialize in translating complex ideas.";

const designations: string[] = ["UI/UX designer", "Front End Developer"];

const Hero = () => {
  return (
    <div
      className="flex flex-row justify-center items-center w-full h-full mt-[5%]"
      id="home"
    >
      <div className="flex flex-col w-full items-center py-10">
        <Image
          src={myself}
          alt=""
          className=" select-none w-[30rem] shadow-xl rounded-[30px]"
        />

        {/* <h1 className='text-white'>Hi</h1> */}
      </div>
      <div className="h-[50rem] p-10 w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.1] bg-grid-small-black/[0.1] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="w-full flex flex-col z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.2
              }
            }}
            className="text-white font-semibold tracking-wider font-[montserrat] text-xl ml-2 lg:text-4xl"
          >
            {"Hello, I am Aswajith S, I am a\n"}
          </motion.h1>
          <FlipWords
            words={designations}
            className="font-semibold font-[lato] mt-2 bg-gradient-to-b from-blue-500 to-violet-700 text-6xl text-blue-400 bg-clip-text"
          />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.25
              }
            }}
            className="font-[lato] text-white my-10 mx-2 w-[50rem] text-lg"
          >
            {description}
          </motion.p>
          <div className="flex flex-row gap-10 my-[5%]">
            <Button title={"Git Hub"} icon={"github"} delay={0} />
            <Button title={"Figma"} icon={"figma"} delay={1} />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.25 + 0.25 * 2
                }
              }}
              className=" text-white px-3  bg-[#020617] cursor-pointer"
            >
              <motion.a
                href={resume_link}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.2
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-4 px-7 flex-row items-center gap-3 font-[lato] border-2 font-semibold rounded-3xl text-white text-md justify-center"
              >
                {<HiDocumentText size={24} />}
                {"CV"}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
