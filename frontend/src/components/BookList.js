import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
