import './App.css';
import AnimalShow from "./AnimalShow";
import {useState} from "react";


const getRandomAnimal = () => {
    const animals = ['cow', 'horse', 'dog', 'gator'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App () {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, idx) => {
        return <AnimalShow type={animal} key={idx}/>
    });


    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
};

export default App;
