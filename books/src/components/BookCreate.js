import { useState } from 'react';

function BookCreate({ onCreate }){
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title)
        setTitle('');
    }

    return (
    <div className= "book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange= {handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
    )
}

export default BookCreate;

// Text Inputs are alwasy controlled Components!!
// Remembe, we do an onChange to the input to handle the change of state
// And then we do an onSubmit to the form to pas the data back to our App to actually create a NEW object to render on the screen.

 //CLEAR OUT THE TEXT
 //set the new state to an empty string