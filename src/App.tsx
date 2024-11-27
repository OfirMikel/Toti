import './App.css'
import {useEffect, useState} from "react";
import ImageContainer from "./components/ImageContainer.tsx";
import Hearts from "./components/Hearts.tsx";
import Button from "./components/Button.tsx";
import {useSwipe} from "./hook/useSwipe.ts";
import Music from "./components/Music.tsx";


function indexToImage(index:number):string{
    if (index < 1){
        return `_ (1).webp`;
    }
    if (index > 20){
        return `_ (1).webp`;
    }
    return `_ (${index}).webp`;
}
function App() {
    const [image, setImage] = useState<number>(getRandomStaringImage());
    const { swipeDirection, swipeDistance } = useSwipe(75);
    useEffect(() => {
        if (swipeDirection === 'right') {
            setImage(prev => prev === 20 ? 1 : prev + 1);
        } else if (swipeDirection === 'left') {
            setImage(prev => prev === 1 ? 20 : prev - 1);
        }
    }, [swipeDirection, swipeDistance]);

    function handleClick() {
        setImage(prev => prev === 20 ? 1 : prev + 1);
    }

    return (
        <div className="images-page">
            <h1 className={"text-exo headline"}>Our Moments</h1>
            <ImageContainer image={indexToImage(image)}/>
            <Button onClick={() => handleClick()} />
            <Hearts />
            <Music/>
        </div>
    )
}

function getRandomStaringImage() {
    return Math.floor(Math.random() * 19 + 1);
}
export default App
