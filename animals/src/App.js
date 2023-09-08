import { useState } from 'react';

function getRandomAnimal(){
    const animals  = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}
// to clarify, Math.random() get a random float from 0-1, that why we can multiply by the length, round down with Math.floor() and still get a valid index


function App(){
    const [animals, setAnimals] = useState([]);

    function handleClick(){
        setAnimals([...animals, getRandomAnimal()])
    };
    
    return(
    <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>{animals}</div>
        
    </div>
    )
}

export default App