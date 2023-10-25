"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { EnvelopeIcon,PhoneIcon } from '@heroicons/react/24/solid'

const Introduction = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12"> {/*Section Div*/}
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:1 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-center"
        >
            <h1 className="text-white mt-4 mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-[#3667e3]">Hello, I'm{" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Brill',
                        1000,
                        'a Developer',
                        1000,
                        'a Digital Artist',
                        1000,
                        'riru',
                        1000,
                        'ブリル',
                        1000,
                    ]}
                    style={{
                        display: 'inline-block',
                    }}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 md:mb-10 sm:mr-10">
                Currently a BS Computer Science undergraduate at 🌻 UP Diliman.
            </p>
            <div className="flex flex-col md:flex-row items-center sm:items-start md:gap-6 gap-2 md:mr-10 text-[#ADB7BE]">
                <div className ="flex gap-3">
                    <EnvelopeIcon className="h-6 w-6"/> bjg.rina@gmail.com
                </div>
                <div className="flex gap-1">
                    <PhoneIcon className="h-6 w-6"/> {"+63 (123)456-7890"}
                </div>
            </div>
            {/*
            <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-white text-black hover:bg-slate-300">About Me</button>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-black border border-slate-500 hover:bg-slate-950 hover:text-[#ADB7BE]">Contact Me</button>
            </div> 
            */}
        </motion.div>
            <div className="col-span-4 place-self-center mt-5 lg:mt-0 order-first sm:order-last justify-self-center"> {/* Picture Div, takes the remaining 5*/}
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/images/avatar.png"
                        alt="avatar image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>
    </section>);      
};

export default Introduction