import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BooksContext = createContext({
  books: [],
  setBooks: () => Promise,
  inputData: [],
  setInputData: () => Promise,
  handleDelete: () => null,
});

export const useBooks = () => useContext(BooksContext);

export default function BooksContextProvider({ children }) {
    const [books, setBooks] = useState([]);
  const [inputData, setInputData] = useState([]);

  // Get Value
  useEffect(() => {
    fetch('./mocks/books.json')
        .then(response => response.json())
        .then(result => setBooks(result.books))
        .catch(err => console.log("Fetch the Books Error :: ", err));
}, [])


  // Delete the Data
  const navigat = useNavigate();
  const handleDelete = (data) =>{
    const conf = window.confirm("Do You Want Delete");
    if(conf){
        setBooks(books.filter(item => item.title !== data.title));
        alert("Your Record has been Deleted");
        navigat('/')
    }
  }

  const value = {
    books,
    setBooks,
    inputData,
    setInputData,
    handleDelete,
  }

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  )
}