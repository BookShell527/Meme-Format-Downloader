import React, { useState } from 'react'
import { context } from "../context/context";
import MemeCard from "../components/MemeCard";
import {useSpring, animated} from 'react-spring'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
    const { meme } = React.useContext(context);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")

    React.useEffect(() => {
        if (meme[0] !== undefined) {
            setLoading(false);
        }
    }, [meme])
    
    const loadProps = useSpring({
        transform: "rotate(360deg)",
        from: {transform: "rotate(0deg)"}
    })

    const searchFilter = (item: any) => {
        if (search !== "" && item.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
            return null
        }
        return (
            <MemeCard 
                key={item.id}
                name={item.name}
                url={item.url}
            />
        )
    }

    if (loading) {
        return (
            <animated.div style={loadProps} className="loader absolute" />
        )
    } else {
        return (
            <div className="pt-20">
                <input className="form-control ml-auto col-2 mr-10" type="search" placeholder="Search" aria-label="Search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                <div>
                    {
                        meme.map((m: any) => {
                            return (
                                searchFilter(m)
                            )
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default Home