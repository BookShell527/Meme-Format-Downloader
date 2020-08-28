import React from 'react'
import { context } from '../context/context'

const Error: React.FC = () => {
    const { dark } = React.useContext(context);
    return (
        <div className="absolute m-auto w-64" style={{top: "40%", right: "0", left: "10%"}}>
            <h1 className={dark ? "text-white" : ""}>
                <b className="mr-1">404</b> 
                <span style={{fontSize: "34px"}} className="font-light mr-1 m-auto">|</span> 
                Page Not Found
            </h1>
        </div>
    )
}

export default Error
