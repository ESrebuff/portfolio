"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "../MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(true);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-3xl text-white font-semibold">Esteban</Link>
                <button onClick={toggleTheme} className="p-2 rounded-full text-foreground">
                    {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
                <div className="mobile-menu block md:hidden">
                    {
                        !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-2 border rounded slate-200 hover:text-white hover:border-white text-slate-200">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded slate-200 hover:text-white hover:border-white text-slate-200">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) =>
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {navBarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );

}

export default NavBar