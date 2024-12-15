"use client";

import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { address, email, myName, phone } from "@/Constants/Details";



type reqProps = {
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  message:string,
}




const Address = () => {

  const copyToClipboard = () => {

    navigator.clipboard.writeText(email)
      .then(()=>{
        alert('Mail Copied to Clipboard');
      })
      .catch((e)=>{
        alert(`Error Occured : ${e.message}`);
      })
  }


  return <div className="flex flex-col w-2/6 my-[5%] border-l-4 px-[5%]" id="contact">
    <motion.h1 initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.25
    }}} className="font-[montserrat] font-semibold text-4xl">Contact</motion.h1>  
    <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.5
    }}}  className="flex flex-row my-[10%] gap-10">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-5 rounded-full bg-black"
      >
        <IoLocationSharp size={36} />
      </motion.button>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-[montserrat] font-semibold text-2xl text-left w-full">
          Address
        </h2>
        <p className="w-[20rem]">
          {address}
        </p>
      </div>
    </motion.div>
    <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.75
    }}}  className="flex flex-row my-[5%] gap-10">
      <motion.button
      onClick={copyToClipboard}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-5 py-5 rounded-full bg-black"
      >
        <FaPhoneAlt size={28} />
      </motion.button>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-[montserrat] font-semibold text-2xl text-left w-full">
          Contact
        </h2>
        <div>
          <p>{`Phone ${phone}`}</p>
          <p>{`Mail ${email}`}</p>
        </div>
      </div>
    </motion.div>
  </div>;
}


const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");



  const handleClick = async () => {
    const req = JSON.stringify({
      firstName:firstName,
      lastName:lastName,
      email:email,
      phone:phone,
      message:message
    });


    fetch('http://localhost:3000/api/sendmail',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:req
    })
    .then((res)=>{
      alert(`Message Sent Successfully ${res.formData}`)
    })
    .catch(err=>alert(err.message))


    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  return <div>
      <motion.div  initial={{ y: 100,opacity:0 }}
      whileInView={{ y: 0,opacity:1,transition:{
        duration:0.5,
        delay:0.25
      } }} 
      className="flex flex-row items-center gap-10 mx-[10%]">
        <motion.h1  className="text-[224px] text-purple-600 select-none">{"Let's Talk"}</motion.h1>
        <RxArrowTopRight size={192} />
      </motion.div>
      <div className="flex flex-row">
        <form className="flex flex-col  gap-5 w-4/6 justify-center" action={ handleClick }>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.25
    }}}  className="flex flex-row w-full gap-10 py-2 items-center justify-center">

            <input type="text" placeholder="First Name" className="w-[30%] bg-transparent border-b-2 outline-none px-5 py-4" onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" className="w-[30%] bg-transparent border-b-2 outline-none px-5 py-4" onChange={e => setLastName(e.target.value)} />
          </motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.5
    }}}  className="flex flex-row justify-center items-center gap-10">
            <input type="email" placeholder="Email" className="w-[30%] bg-transparent border-b-2 outline-none px-5 py-4" onChange={e => setEmail(e.target.value)} />
            <input type="phone" placeholder="Number" className="w-[30%] bg-transparent border-b-2 outline-none px-5 py-4" onChange={e => setPhone(e.target.value)} />
          </motion.div>
          <motion.textarea initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.75
    }}}  rows={5} placeholder="Your Message" onChange={e => setMessage(e.target.value)} className="mx-[18%] bg-[#0f172a] px-5 py-4 my-2 rounded-[15px] " />
          <motion.button initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{
      duration:0.5,
      delay:0.75
    }}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex py-4 px-7 w-[20%] mx-[18%] flex-row items-center gap-3 font-[lato] border-2 font-semibold rounded-3xl text-white text-lg justify-center">
            Send Message
          </motion.button>
        </form>
        <Address />
      </div>
      <footer className="py-10 font-[lato] font-semibold text-lg text-center">
        {`2025 ${myName}. All rights Reserved`}
      </footer>
    </div>;
};


export type{
  reqProps,
};

export default Contact;
