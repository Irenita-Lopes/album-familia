"use client";
import Link from "next/link";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} fixed md:h-auto top-0 md:pr-30 bg-white z-80 w-full text-black flex flex-col md:flex-row align-center items-center p-0 md:p-5`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">    
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-full h-auto text-[20px] md:h-auto md:grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div></div>

                <div className="flex justify-center items-center">
                    <h1 className="text-center font-bold">Galeria de Família</h1>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end items-center">
                    <Link
                        className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                        href={"/"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Álbuns
                    </Link>

                    <Link
                        className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                        href={"/blog"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Blog
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;