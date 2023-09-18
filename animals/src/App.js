import { useState } from 'react';
import AnimalShow from './AnimalShow';
import appCss from './App.css';
function getRandomAnimal(){
    const animals  = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}
// to clarify, Math.random() get a random float from 0-1, that why we can multiply by the length, round down with Math.floor() and still get a valid index


function App(){
    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow animal={animal} key={index}/>;
    })

    function handleClick(){
        setAnimals([...animals, getRandomAnimal()])
    };
    
    return(
    <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
        
    </div>
    )
}

export default App