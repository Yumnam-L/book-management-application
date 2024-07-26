import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction`);
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Top Fiction Books</h1>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
