import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books, {
            id: Math.round(Math.random() * 9999)
            , 
            title}];
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
       const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };
        
    return (
    <div>
        <div className= "app">
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate  onCreate = {createBook} />
        </div>
        
        
    </div>
    );
}

export default App;

// Adding and editing information on the DOM 

// To update state with a new object, add a new object to the empty array in our state:
//CREATE A NEW ARRAY
//COPY ALL THE ELEMENTS FROM THE OLD ARRAY
//ADD NEW ELEMENTS TO THE END
// This alerts React that the new array differes from the old array and that it should rerender the screen!
//The spread operator allows us to creata copy of the old array, and then add the new object

// TO ADD AN ELEMENT AT A SPECIFIC INDEX:
//INSERT 'purple' at index 1
//[

//     ...colors.slice(0,1),
// 'purple',
// ...colors.slice(1)
// ];

// HOW TO REMOVE AN ELEMENT FROM USING .FILTER