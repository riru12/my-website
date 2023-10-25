import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link href={href} className="block rounded md:p-0 text-[#ADB7BE] hover:text-white">{title}</Link>
    )
}

export default NavLink