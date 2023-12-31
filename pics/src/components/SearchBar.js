import { useState } from 'react';
import './SearchBar.css';
function SearchBar({ onSubmit }){
    const [term, setTerm] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        
    };
    
    return (
    <div className = "search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange = {handleChange} />
        </form>
    </div>
    )

}

export default SearchBar

// HANDLING TEXT INPUTS IN REACT:
// 1. Create a new piece of state to handle the input
// 2.Create an event handler to watch for the 'onChange' event
// 3. When the 'onChange' event fired, get the value from that input
// 4. Take that value from the input and use it ot update your state
// 5. Pass your state to the input as the value prop