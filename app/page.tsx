"use client";

import Hero from "@/app/Hero";
// import { Spotlight } from "@/Components/ui/spotlight";
import Contact from "@/app/Contact";
import Works from "@/app/Works";
import Education from "@/app/Education";
import SkillsComponent from "@/app/SkillsComponent";

const page = () => {
  return (
    <main className="flex flex-col bg-black-100 justify-center">
      {/* <Spotlight
        className="-top-40 left-0 md:left-[57.5vw] md:-top-20  h-full"
        fill="blue"
      /> */}
      <Hero />
      <Works />
      <Education />
      <SkillsComponent />
      <Contact />
    </main>
  );
};

export default page;
