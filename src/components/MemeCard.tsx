import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { context } from '../context/context';
import { Box, Image } from "@chakra-ui/core";

type Meme = {
    id: string;
    name: string;
    url: string;
    width: number;
    height:number;
}

const MemeCard: React.FC<Meme> = ({ id, name, url, width, height }) => {
    const { download, dark } = React.useContext(context)

    const showAndHideImg = () => {
        const showImgDiv = document.getElementById(id) as HTMLDivElement;
        showImgDiv.toggleAttribute("hidden")
    }

    return (
        <Box textAlign="center" maxW="sm" borderWidth="1px" overflow="hidden" pb="3" d="inline-block" ml="3" mt="3" className={`hover:shadow-md rounded-md ${dark && "text-white"}`} style={{backgroundColor: dark && "#181a1b", width: "18rem"}} >
            <Image src={url} alt={name} onClick={showAndHideImg} className="cursor-pointer" />
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated py="2" textAlign="center" >
                {name}
            </Box>
            <button className="card-btn hover:bg-teal-500" style={{backgroundColor: dark && "#333"}} onClick={() => download(url)}>Download</button>
            <div className="showImgDiv" id={id} hidden onClick={showAndHideImg}>
                <Image src={url} alt={name} width={width/3} height={height/3} className="imgDiv" />
            </div>
        </Box>
    )
}

export default MemeCard
