"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12"> {/*Section Div*/}
            <div className="col-span-7 ml-4 place-self-center text-center sm:text-left"> {/* Text Div takes 7 columns out of 12 when large screen*/}
                <h1 className="text-white mt-4 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-[#3667e3]">Hello, I'm{" "}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Brill',
                            1000,
                            'a Digital Artist',
                            1000,
                            'a Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-10">
                    Currently a BS Computer Science undergraduate at UP Diliman, <br></br> passionate in digital painting, and PC enthusiast.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-white text-black hover:bg-slate-300">About Me</button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent border border-slate-500 hover:bg-slate-900">button hehehe</button>
                </div>               
            </div>
            <div className="col-span-5 place-self-center mt-5 lg:mt-0 order-first sm:order-last"> {/* Picture Div, takes the remaining 5*/}
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
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