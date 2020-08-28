import React, { useState } from 'react';
import axios from "axios";

export const context: React.Context<any> = React.createContext(null);

type Context = {
    children: any;
}

const ContextProvider: React.FC<Context> = ({ children }) => {
    const [dark, setDark] = useState(false)
    const [meme, setMeme] = useState([])

    React.useEffect(() => {
        const getMemes = async () => {
            const memes = await axios.get("https://api.imgflip.com/get_memes");
            setMeme(memes.data.data.memes);
        }
        getMemes()
    }, [])

    const html: HTMLHtmlElement = document.querySelector("html")!
    const body: HTMLBodyElement = document.querySelector("body")!
    if (dark) {
        html.style.backgroundColor = "#181a1b";
        body.style.backgroundColor = "#181a1b";
    } else {
        html.style.backgroundColor = "#fff";
        body.style.backgroundColor = "#fff";
    }

    React.useEffect(() => {
        setDark(Boolean(localStorage.getItem("dark")))
    }, [setDark])
    
    const darkMode = () => {
        setDark(prev => !prev)
        if (dark) localStorage.setItem("dark", "false");
        else localStorage.setItem("dark", "true");
    }

    return (
        <context.Provider value={{dark, darkMode, meme}}>
            { children }
        </context.Provider>
    )
}

export default ContextProvider