


import myself from './../assets/myself.jpg';


const myName = "Aswajith S";
const email = "aswajith707@gmail.com";
const phone = "+91 93451 82091";
const resume_link = 'https://drive.google.com/file/d/1l6L3pfgiF-V6o9qrK08s3Ci8H_g5FH7l/view?usp=sharing';

const address = "177/139, Light House Road,Coimbatore, Tamil Nadu, India";

const skillsDescription = "I am a dedicated web designer with a strong focus on software development and machine learning. My expertise spans UI/UX design, adhering to industry standards, foundational knowledge of web development, and robust skills in machine learning and data handling."

const COMPLETED = 1;
const CURRENT = 2;


type EducationProps = {
    title:String,
    from:String,
    to:String,
    description:String,
    state:Number,
}


const education:EducationProps[] = [
    {
        title:'Master of Theoretical Computer Science from\nPSG College of Technology',
        from:'Aug 2022',
        to:'May 2027',
        description:'This degree is 5-year integrated programme with 3 internships',
        state:CURRENT
    },
];

const experiences:EducationProps[] = [

];



export type{
    EducationProps,
}

export{
    myself,
    COMPLETED,
    CURRENT,
    education,
    experiences,
    resume_link,
    email,
    phone,
    address,
    myName,
    skillsDescription
}


