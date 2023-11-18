import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/book';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
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
