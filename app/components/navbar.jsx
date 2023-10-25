"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/riru-stamp.png"
import NavLink from "./navlink"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MobileNavbar from './mobilenavbar';

const navLinks =[
    {
        title: "About",
        path: "#about",
    },    
]
{/*
    title: "Contact",
    path: "#contact",
*/}

const Navbar = () => {
    const [navbarOpen, setnavbarOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10">
            <div className="flex flex-wrap items-center justify-between ml-0 mr-auto p-4 sm:p-1 bg-[#111111]">
                <div className="ml-2 md:ml-4">
                    <Link href={"/"}>
                        <Image src={Logo} alt="Logo" width={30}/>
                    </Link>
                </div>

                <div className="mobile-menu block md:hidden"> {/* Mobile Navbar */}
                    {
                        navbarOpen ? (
                            <button className="flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white" onClick={() => {setnavbarOpen(false)}}>
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button className="flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white" onClick={() => {setnavbarOpen(true)}}>
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar"> {/* Desktop Navbar */}
                    <ul className="flex p-4 md:0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="bg-[#181818]">
                {navbarOpen ? (<MobileNavbar links={navLinks} />) : null}
            </div>
        </nav>
    )
}

export default Navbar