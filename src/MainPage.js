import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf';

const MainPage = props => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf books={props.currentlyReadingBooks} title={"Currently Reading"} onSelect = {props.onSelect}/>
                    <Shelf books={props.wantToReadBooks} title={"Want to Read"} onSelect = {props.onSelect}/>
                    <Shelf books={props.readBooks} title={"Read"} onSelect = {props.onSelect}/>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    Add Books
                </Link>
            </div>
        </div>

    );
}

export default MainPage;