import React from 'react'
import { context } from "../context/context";
import MemeCard from "../components/MemeCard";
import {useSpring, animated} from 'react-spring'

const Home: React.FC = () => {
    const { meme } = React.useContext(context);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (meme[0] !== undefined) {
            setLoading(false);
        }
    }, [meme])
    
    const loadProps = useSpring({
        transform: "rotate(360deg)",
        from: {transform: "rotate(0deg)"}
    })
    if (loading) {
        return (
            <animated.div style={loadProps} className="loader absolute" />
        )
    } else {
        return (
            <>
                <div className="pt-10 px-10">
                    {
                        meme.map((m: any) => {
                            return (
                                <MemeCard 
                                    key={m.id}
                                    name={m.name}
                                    url={m.url}
                                />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Home