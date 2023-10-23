import React from "react";
import Image from "next/image";

const AboutSection = () =>{
    return(
      <section>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/makima.jpeg" width={500} height={500} />
            <div>
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    Hi! 👋 I am Brill Riña and I'm currently finishing my BS Computer Science degree in the University of the Philippines Diliman. 
                    <br></br><br></br>
                    I have experience working with Python, C, JavaScript, React, Next, HTML, and Git. I am always eager to learn new things and looking to expand my skill set and hone it further. You can check out my stuff in my <span className="text-[#a8bae8]"><a href="https://github.com/riru12" target="_blank">GitHub profile</a></span>!
                    <br></br><br></br>
                    I am also a freelance digital artist! I like to paint and draw in my leisure time. I am very knowledgeable in graphic design as well. If you're interested in seeing some of my artwork, check out <span className="text-[#a8bae8]"><a href="https://twitter.com/artofriru" target="_blank">my twitter</a></span>!
                </p>
            </div>
        </div>
    </section>
    );
};

export default AboutSection