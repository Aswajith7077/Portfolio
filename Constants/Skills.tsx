import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiAndroidstudio } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

type TagProps = {
    title:String,
    icon:any
    
}

type SkillProps = {
    title:String,
    icon:any
    performance:Number,
    tags:TagProps[],
}

const Skills = [
    {
        title:'Web Development',
        icon:<FaReact size={24} color="#2f93bd"/>,
        performance:60,
        tags:[
            {
                title:'HTML',
                icon:<FaHtml5 size={20}/>,
            },
            {
                title:'CSS',
                icon:<FaCss3 size={20}/>,
            },
            {
                title:'JavaScript',
                icon:<FaJsSquare size={20}/>,
            },
            {
                title:'React JS',
                icon:<FaReact size={20}/>,
            },
            {
                title:'Next JS',
                icon:<TbBrandNextjs size={20}/>,
            },
            {
                title:'Express',
                icon:<SiExpress size={20}/>,
            }
        ]
    },
    {
        title:'App Development',
        icon:<SiAndroidstudio size={24} color="#1e40af"/>,
        performance:70,
        tags:[
            {
                title:'Kotlin',
                icon:<TbBrandKotlin size={20}/>,
            },
            {
                title:'Android Studio',
                icon:<SiAndroidstudio size={20}/>,
            },
            {
                title:'Java',
                icon:<FaJava size={20}/>,
            },
        ]
    },
    {
        title:'Database',
        icon:<SiMongodb size={24} color="#065f46"/>,
        performance:90,
        tags:[
            {
                title:'MySQL',
                icon:<SiMysql size={20}/>,
            },
            {
                title:'Oracle',
                icon:<SiOracle size={20}/>,
            },
            {
                title:'Mongo DB',
                icon:<SiMongodb size={20}/>,
            },
        ]
    },
    {
        title:'Machine Learning',
        performance:90,
        icon:<FaPython size={24} color="#fbbf24"/>,
        tags:[
            {
                title:'Python',
                icon:<FaPython size={20}/>,
            },
            {
                title:'Pandas',
                icon:<SiPandas size={20}/>,
            },
            {
                title:'Sci-Kit',
                icon:<FaJava size={20}/>,
            },
        ]
    }
];

export type{
    SkillProps,
    TagProps,
}

export{
    Skills,
};