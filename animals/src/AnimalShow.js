import './AnimalShow.css';
import cow from './svg/cow.svg';
import horse from './svg/horse.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import {useState} from "react";

const svgMap = {
    cow,
    horse,
    dog,
    gator,
    heart
};

function AnimalShow ({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return (
        <div className="animal-show">
            <img alt="animal" className="animal"  src={svgMap[type]} />
            <img alt="heart" className="heart"  src={heart} style={{width: 10 + 10 * clicks}} onClick={handleClick} />
        </div>
    );
}

export default AnimalShow;
