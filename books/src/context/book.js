import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  //GET all the books in our db.json
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  //POST request to db.json
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  //DELETE request to db.json
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  //PUT request to db.json
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return <BooksContext.Provider value={{ valueToShare }}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;

//CONTEXT:
//What props(functions or data) are we passing down to several other components? This will determine the primaray data of our app and this will become our Application State. We can pass this downfrom our Context file. State that is not primary, or is more localized to only a few components, can stay locally passed down.
//In case of our app, the books state is being used in all components and being modified.
