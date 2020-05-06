import React from 'react';

const Book = props => {
    const { title, authors, shelf } = props.book
    const url = props.book.imageLinks ? props.book.imageLinks.thumbnail : '';
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <div className="book-shelf-changer">
                    <select value={shelf ? shelf : 'none'} onChange={(e) => props.onSelect(props.book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors ? authors.toString() : ''}</div>
        </div>
    );
}

export default Book;