import React from 'react'

type Meme = {
    box_count: number;
    height: number;
    id: string;
    name: string;
    url: string;
    width: number;
}

const MemeCard: React.FC<Meme> = ({box_count, height, id, name, url, width}) => {
    return (
        <div className="">
            
        </div>
    )
}

export default MemeCard
