import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    //GET all the books in our db.json
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };
    //call GET request only when the page first renders
    useEffect (() => {
        fetchBooks();
    }, []);

    //POST request to db.json
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{
            title
        });
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
        
    };
    //DELETE request to db.json
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
       const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    //PUT request to db.json
    const editBookById = async (id, newTitle) => {
       const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });
        console.log(response)

        const updatedBooks = books.map((book) => {
            if (book.id === id ) {
                return {...book, ...response.data};
            }
            return book;
        })
        setBooks(updatedBooks);
    }
        
    return (
    <div>
        <div className= "app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
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

// USEEFFECT:
// USED TO RUN CODE AT VERY  SPECIFIC TIMES, LIKE WHEN THE COMPONENT IS INTIALLY RENDERED. AND SOMETIMES WHEN IT IS RERENDERED. 
//The first argument is a function that contains code we want to run and the second is an array or nothing -- this controls whether the funciton is executed on rerenders. So it should either be an empty array or have some numbers in it
//When does the arrow function get called?-- Immediately after the first render, any other times depends on the second argument (empty array or not)
//What is the arrow functions return value?
