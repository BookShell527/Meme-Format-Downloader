import React from 'react'
import { context } from "../context/context";
import MemeCard from "../components/MemeCard";
import {useSpring, animated} from 'react-spring'

const Home: React.FC = () => {
    const { meme } = React.useContext(context);
    const [loading, setLoading] = React.useState(true);
    console.log(meme[0]);

    React.useEffect(() => {
        if (meme[0] !== undefined) {
            setLoading(false);
        }

    }, [meme])
    
    const loadProps = useSpring({
        transform: "rotate(360deg)",
        animationIterationCount: "infinite",
        from: {transform: "rotate(0deg)"}
    })
    if (loading) {
        return (
            <animated.div style={loadProps} className="loader absolute" />
        )
    } else {
        return (
            <>
                <MemeCard 
                    box_count={meme[0].box_count}
                    id={meme[0].id}
                    name={meme[0].name}
                    url={meme[0].url}
                    height={meme[0].height}
                    width={meme[0].width}
                />
            </>
        )
    }
}

export default Home
