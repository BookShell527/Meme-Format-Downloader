import React from 'react';
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import { context } from "../context/context";

const Navbar: React.FC = () => {
    const { dark, darkMode } = React.useContext(context)
    return (
        <div className={dark ? "navbar-dark" : "navbar-light"} style={{height: "3.5rem"}}>
            <Link to="/" className="no-underline">
                <h1 className="text-2xl ml-6 text-white">Meme F Downloader</h1>
            </Link>
            {
                dark 
                ? <FaSun className="text-white ml-auto mr-6 cursor-pointer" style={{transform: "scale(1.5)"}} onClick={darkMode} />
                : <FaMoon className="text-white ml-auto mr-6 cursor-pointer" style={{transform: "scale(1.5)"}} onClick={darkMode} />
            }
        </div>
    )
}

export default Navbar
