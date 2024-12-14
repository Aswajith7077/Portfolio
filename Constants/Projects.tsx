import shopNex from "@/assets/ShopNex.png";
import axios from "@/assets/Axios.png";
import scanWizard from "@/assets/ScanWizard.png";

import gamingApp from "@/assets/GamingApp.png";
import login from "@/assets/Login.png";
import insightica from "@/assets/Insightica.png";
import mathElite from "@/assets/MathElite.png";

import pidClassifier from '@/assets/P-and-ID-Classification.png';
import decisionTreeClassifier from '@/assets/DecisionTreeClassifier.png';

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { CustomValueType, motion } from "framer-motion";
import { useState } from "react";



import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

const domain_tags = ["All", "Web", "UI/UX", "App", "ML"];

type CardProps = {
  content: {
    title: String;
    description: String;
    gitLink: String;
    image: StaticImageData;
  };
  delay: number;
};

const best_projects = [
  {
    title: "ShopNex - An Affiliate Marketing platform",
    image: shopNex,
    description:
      "Allows users to buy products, ensuring secure payment and dealers with products "
  },
  {
    title: "Axios(2024) - An Intercolleguate Technical Synposium",
    image: axios,
    description:
      "Collaborated with an Intercolleguate Technical Symposium for designing the foundation of a web application"
  },
  {
    title: "ScanWizard - A Smart QR Code Scanner",
    image: scanWizard,
    description:
      "Allowing users to scan through different QR codes, storing them in the secondary storage and gallery access to scanning"
  }
];

const projects: any[] = [
  [
    {
      title: "ShopNex - An Affiliate Marketing platform",
      image: shopNex,
      description:
        "Allows users to buy products, ensuring secure payment and dealers with products ",
      gitLink: "https://github.com/Aswajith7077/ShopNex"
    },
    {
      title: "Axios(2024) - An Intercolleguate Technical Synposium",
      image: axios,
      description:
        "Collaborated with an Intercolleguate Technical Symposium for designing the foundation of a web application",
      gitLink:
        "https://www.figma.com/design/fybnuFwelaoWON6GQe2xoq/main-website?node-id=0-1&p=f&t=suGUBeuo0wjzGm9G-0"
    },
    {
      title: "ScanWizard - A Smart QR Code Scanner",
      image: scanWizard,
      description:
        "Allowing users to scan through different QR codes, storing them in the secondary storage and gallery access to scanning",
      gitLink: "https://github.com/Aswajith7077/PRODIGY_AD_05"
    }
  ],
  [
    {
      title: "ShopNex - An Affiliate Marketing platform",
      image: shopNex,
      description:
        "Allows users to buy products, ensuring secure payment and dealers with products ",
      gitLink: "https://github.com/Aswajith7077/ShopNex"
    },
    {
      title: "Insightica - Trading Optimizer",
      image: insightica,
      description:
        "An AI / ML Solution for optimizing Trade Decision with real time stock monitoring.",
      gitLink: "https://github.com/Aswajith7077/TradeWiz"
    }
  ],
  [
    {
      title: "Axios(2024) - An Intercolleguate Technical Synposium",
      image: axios,
      description:
        "Collaborated with an Intercolleguate Technical Symposium for designing the foundation of a web application",
      gitLink:
        "https://www.figma.com/design/fybnuFwelaoWON6GQe2xoq/main-website?node-id=0-1&p=f&t=suGUBeuo0wjzGm9G-0"
    },
    {
      title: "Login(2023) - An Intercolleguate Technical Synposium",
      image: login,
      description:
        "Collaborated with an Intercolleguate Technical Symposium for designing the foundation of a Mobile application",
      gitLink:
        "https://www.figma.com/design/zGOCWaWpPcCQQiGwRytTpz/Login-App?node-id=0-1&p=f&t=vYYtyRdtJocfXOWM-0"
    }
  ],
  [
    {
      title: "ScanWizard - A Smart QR Code Scanner",
      image: scanWizard,
      description:
        "Allowing users to scan through different QR codes, storing them in the secondary storage and gallery access to scanning",
      gitLink: "https://github.com/Aswajith7077/PRODIGY_AD_05"
    },
    {
      title: "Gaming Application",
      image: gamingApp,
      description:
        "Allowing users with interative controll section, audio and sound settings, even enhanced by animating each move",
      gitLink: "https://github.com/Aswajith7077/PRODIGY_AD_04"
    },
    {
      title: "Math Elite",
      image: mathElite,
      description:
        "A Complex Calculator evaluating very long expressions(with a sequence of operators and operands). ",
      gitLink: "https://github.com/Aswajith7077/PRODIGY_AD_01"
    }
  ],
  [
    {
      title: "Decision Tree Classifier",
      image: decisionTreeClassifier,
      description:
        "Built a Decision Tree Classifier using CART algorithm, enhanced the user interactions with Stream Lit",
      gitLink: "https://github.com/Aswajith7077/DecisionTreePredictor"
    },
    {
      title: "P and ID component Classification",
      image: pidClassifier,
      description:
        "A Cascaded Classifiers utiling YOLOv8 model used to Classify the components,flows in a P&ID diagram",
      gitLink: "https://github.com/Aswajith7077/P-and-ID-Component_Detection"
    }
  ]
];

const Card = ({ content, delay }: CardProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.25 + 0.5 * delay }
      }}

      className="flex flex-col p-5 items-center rounded-[50px] w-[35rem] my-10"
    >
      <Image
        src={content.image}
        alt=""
        className=" select-none  shadow-xl rounded-[25px]"
      />
      <h1 className="font-[lato] font-semibold text-white text-3xl mt-10 mx-5 text-center">
        {content.title}
      </h1>
      <p className="mx-5 mt-7 mb-5 text-justify font-[source sans 3] font-semibold text-gray-400">
        {content.description}
      </p>
      <Link href={content.gitLink as Url}>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-row items-center gap-5 justify-center bg-slate-900 my-5 rounded-full py-2"
        >
          View Source
          <RxArrowTopRight size={20} />
        </motion.button>
      </Link>
    </motion.div>
  );
};

const ProjectComponents: any[] = [];
for (var i = 0; i < projects.length; i++) {
  ProjectComponents.push(
    <div className="flex flex-row gap-10 mx-[5%] my-10">
      {projects[i].map((value: any, key: any) => {
        return <Card key={key} content={value} delay={key} />;
      })}
    </div>
  );
}

export { best_projects, domain_tags, ProjectComponents };
