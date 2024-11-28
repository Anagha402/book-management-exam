import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/BookSlice';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{marginLeft:"100px", color:"maroon"}} >Book List</h2>
      <ul >
        {books.map(book => (
          <li key={book.id} className='fw-bold mt-5' >
            {book.title} by {book.author}
            <button onClick={() => dispatch(deleteBook(book.id))} className='btn btn-danger ms-5'>Delete</button>
            <button className='btn btn-warning ms-5'>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
