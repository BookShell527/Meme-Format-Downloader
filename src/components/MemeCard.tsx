import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { context } from '../context/context';

type Meme = {
    id: string;
    name: string;
    url: string;
}

const MemeCard: React.FC<Meme> = ({ id, name, url }) => {
    const { download } = React.useContext(context)
    return (
        <div className="card hover:shadow-md text-center d-inline-block ml-4 mt-5" style={{width: "18rem"}}>
            <img src={url} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button id={id} className="rounded no-underline bg-teal-400 p-2 text-white font-semibold mt-2" onClick={() => download(url)}>Download</button>
            </div>
        </div>
    )
}

export default MemeCard
