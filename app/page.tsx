'use client';

import Image from "next/image";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import { Spotlight } from "@/Components/ui/spotlight";
import Services from "@/Components/Services";
import Contact from '@/Components/Contact';
import Works from "@/Components/Works";
import Education from "@/Components/Education";
import SkillsComponent from "@/Components/SkillsComponent";




const page = () => {
  return <main className="flex flex-col bg-black-100 justify-center">
      <Spotlight className="-top-40 left-0 md:left-[57.5vw] md:-top-20  h-full" fill="blue" />
      {/* <Spotlight className="top-10 left-full right-full" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" /> */}
      <Hero />
      <Works/>
      <Education/>
      <SkillsComponent/>
      {/* <Services/> */}
      <Contact/>
    </main>;
}

export default page

