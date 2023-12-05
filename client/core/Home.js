import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import BookIcon from '@material-ui/icons/Book';
import Footer from './footer'; 
import auth from './../auth/auth-helper';
import { Redirect } from 'react-router-dom';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [showSignInMessage, setShowSignInMessage] = useState(false);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch ('/api/books');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  
  const handleDelete = async (id) => {
    if (!auth.isAuthenticated()) {
      setShowSignInMessage(true);
      return;
    }
    

    try {
      
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });
      

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
    
  };

  return (
    <div>
      <h1 align="center"><u>Book List</u></h1>
  
      <Link to="/books/create" style={{ marginLeft: '20px' }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add New Book
        </Button>
      </Link>
      {books.map((book) => (
        <Card
          key={book._id}
          style={{ margin: '20px', padding: '20px', border: '1px solid #343a40' }}
        >
          <CardContent>
          {showSignInMessage && (
              <div style={{ fontSize:'25px',fontWeight:'bold',textAlign: 'center', color: 'red', marginBottom: '10px' }}>
                Please sign in to delete a book.
              </div>
            )}
            <BookIcon style={{ fontSize: 40, marginBottom: 10 }} />

            <Typography style={{ color: 'orange', fontWeight:'bold' }} variant="h6" component="div">
              {book.title}
            </Typography>
            <Typography color="text.secondary">Author: {book.author}</Typography>
            <Typography color="text.secondary">Price: ${book.price}</Typography>
            <Typography color="text.secondary">Category: {book.category}</Typography>
            <Typography color="text.secondary">Description: {book.description}</Typography>
            <Link to={`/edit/${book._id}`}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                style={{ margin: '10px' }}
              >
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
