import React, { useState } from 'react';

export const context: React.Context<any> = React.createContext(null);

type Context = {
    children: any
}

const ContextProvider: React.FC<Context> = ({ children }) => {
    const [dark, setDark] = useState(false)

    React.useEffect(() => {
        setDark(Boolean(localStorage.getItem("dark")))
    }, [setDark])
    
    const darkMode = () => {
        setDark(prev => !prev)
        if (dark) localStorage.setItem("dark", "false");
        else localStorage.setItem("dark", "true");
    }

    return (
        <context.Provider value={{dark, darkMode}}>
            { children }
        </context.Provider>
    )
}

export default ContextProvider