import React from "react";
import Image from "next/image";
import Link from "next/link";

import LinkedinIcon from "../../public/In-White-96.png";
import GithubIcon from "../../public/github-mark-white.svg";
import TwitterIcon from "../../public/twitter-logo.svg";

const AboutSection = () =>{
    return(
      <section id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">
            <div className="ml-0 md:ml-10">
                <Image src="/images/makima.jpeg" width={500} height={500} />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-[#ADB7BE] text-base lg:text-lg mb-10">
                    Hi! 👋 I am Brill Riña and I'm currently finishing my Computer Science degree in the University of the Philippines Diliman. 
                    <br></br><br></br>
                    I have experience working with Python, C, JavaScript, React, Next, HTML, and Git. I am always eager to learn new things and looking to expand my skill set and hone it further. You can check out my stuff in my <span className="text-[#a8bae8]"><a href="https://github.com/riru12" target="_blank">GitHub profile</a></span>!
                    <br></br><br></br>
                    I am also a freelance digital artist! I like to paint and draw in my leisure time. I am very knowledgeable in graphic design as well. If you're interested in seeing some of my artwork, check out <span className="text-[#a8bae8]"><a href="https://twitter.com/artofriru" target="_blank">my twitter</a></span>!
                </p>
                <h2 className="text-white text-right">My Links</h2>
                <div className="socials mt-4 flex flex-row gap-8 justify-end">
                    <Link href="https://www.linkedin.com/in/brill-rina/ " target="_blank">
                        <Image src={LinkedinIcon} alt="LinkedinIcon" width={30} />
                    </Link>
                    <Link href="https://github.com/riru12" target="_blank">
                        <Image src={GithubIcon} alt="GithubIcon" width={30} />
                    </Link>
                    <Link href="https://twitter.com/artofriru" target="_blank">
                        <Image src={TwitterIcon} alt="TwitterIcon" width={30} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutSection