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
        setDark(Boolean(localStorage.getItem("dark")))
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

    const darkMode = () => {
        setDark((prev: boolean) => !prev);

        const isAlreadyDark = dark ? "" : "true";
        localStorage.setItem("dark", isAlreadyDark)
    }

    const download = async (img: string) => {
        try {
            const req = await axios({
                url: img,
                method: "GET",
                responseType: "blob"
            });
            const url: string = window.URL.createObjectURL(new Blob([req.data]));

            const link: HTMLAnchorElement = document.createElement('a');

            link.href = url;
            link.setAttribute('download', img);

            document.body.appendChild(link);

            link.click();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <context.Provider value={{dark, darkMode, meme, download}}>
            { children }
        </context.Provider>
    )
}

export default ContextProvider