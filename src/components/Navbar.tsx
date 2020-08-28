import React from 'react';
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import { context } from "../context/context";

const Navbar: React.FC = () => {
    const { dark, darkMode } = React.useContext(context)
    return (
        <div className={dark ? "navbar-dark" : "navbar-light"}>
            <Link to="/" className="text-decoration-none">
                <h1 className="text-2xl ml-6 text-white">Meme F Downloader</h1>
            </Link>
            {
                dark 
                ? <FaSun className="navbar-icons" onClick={darkMode} />
                : <FaMoon className="navbar-icons" onClick={darkMode} />
            }
        </div>
    )
}

export default Navbar