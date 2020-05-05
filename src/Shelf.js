import React from 'react';
import Book from './Book';

const Shelf = props => {
    const {books, title} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => {
                        return(
                            <li key={book.id}>
                                <Book book={book} onSelect={props.onSelect}/>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Shelf;