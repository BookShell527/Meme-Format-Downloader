import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { context } from '../context/context';
import { Box, Image } from "@chakra-ui/core";

type Meme = {
    name: string;
    url: string;
}

const MemeCard: React.FC<Meme> = ({ name, url }) => {
    const { download, dark } = React.useContext(context)
    return (
        <Box textAlign="center" maxW="sm" borderWidth="1px" overflow="hidden" pb="3" d="inline-block" ml="3" mt="3" className={`hover:shadow-md rounded-md ${dark && "text-white"}`} style={{backgroundColor: dark && "#181a1b", width: "18rem"}} >
            <Image src={url} alt={name} />
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated py="2" textAlign="center" >
                {name}
            </Box>
            <button className="card-btn hover:bg-teal-500" onClick={() => download(url)}>Download</button>
        </Box>
    )
}

export default MemeCard
