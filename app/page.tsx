'use client';

import Hero from "@/Components/Hero";
import { Spotlight } from "@/Components/ui/spotlight";
import Contact from '@/Components/Contact';
import Works from "@/Components/Works";
import Education from "@/Components/Education";
import SkillsComponent from "@/Components/SkillsComponent";




const page = () => {
  return <main className="flex flex-col bg-black-100 justify-center">
      <Spotlight className="-top-40 left-0 md:left-[57.5vw] md:-top-20  h-full" fill="blue" />
      <Hero />
      <Works/>
      <Education/>
      <SkillsComponent/>
      <Contact/>
    </main>;
}

export default page

