import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/riru-stamp.png"
import NavLink from "./navlink"

const navLinks =[
    {
        title: "About",
        path: "#about",
    },
]

    {/*{
        title: "Contact",
        path: "#contact",
    }*/}

const Navbar = () => {
    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#111111]">
            <div className="flex flex-wrap items-center justify-between ml-0 sm:ml-3 mr-auto p-4 sm:p-1">
                <Link href={"/"}>
                    <Image src={Logo} alt="Logo" width={30}/>
                </Link>
                
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
        </nav>
    )
}

export default Navbar