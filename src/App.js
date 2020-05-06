import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';

import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getAllBooks();
  }


  getAllBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  updateBookShelf = (bookID, newShelf) => {
    BooksAPI.update(bookID, newShelf).then(() => {
      this.getAllBooks();
    }).catch(err => console.log(err));
  }


  render() {
    const filter = books => shelf => books.filter(book => book.shelf === shelf);
    const filterBy = filter(this.state.books);
    const wantToReadBooks = filterBy('wantToRead');
    const currentlyReadingBooks = filterBy('currentlyReading');
    const readBooks = filterBy('read')
    return (
      <div className="app">
        <Route exact path='/' render={() => <MainPage wantToReadBooks={wantToReadBooks} currentlyReadingBooks={currentlyReadingBooks} readBooks={readBooks} onSelect={this.updateBookShelf} />} />
        <Route path='/search' render={() => <SearchPage onSelect={this.updateBookShelf} handleSearch={BooksAPI.search} currentBooks={this.state.books} />} />
      </div>
    )
  }
}

export default BooksApp
