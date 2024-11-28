import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/books/BookSlice';

const BookForm = ({ currentBook, setEditing }) => {
  const [book, setBook] = useState(currentBook || { title: '', author: '', id: Date.now() });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(updateBook(book));
      setEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setBook({ title: '', author: '', id: Date.now() });
  };

  return (
    <>
      <h1  style={{marginLeft:"500px", marginTop:"100px", color:"darkblue"}} className='mb-4'>Book Management System</h1>
    <form onSubmit={handleSubmit} style={{marginLeft:"500px"}} >
    
      <input
        type="text"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        placeholder="Book Title"
        required
        className='form-control w-25'
        
      />
      <br />
      <input
        type="text"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        placeholder="Author Name"
        required
        className='form-control w-25'
      />
      <br />
      <button type="submit" className='btn btn-success d-grid w-25'>{currentBook ? 'Update' : 'Add'} Book</button>
    </form>
    </>
  );
};

export default BookForm;
