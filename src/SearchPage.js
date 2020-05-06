import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';

import Book from './Book';

class SearchPage extends Component {
    state = { results: [] }

    handleInputChange = e => {
        const query = e.target.value;
        this.props.handleSearch(query)
            .then(res => {
                if (res && !res.error) {
                    res = res.map(resBook => {
                        const existed = this.props.currentBooks.find(currentBook => currentBook.id === resBook.id);
                        if (existed) return existed;
                        return resBook;
                    });
                    this.setState({ results: res });
                } else {
                    this.setState({results: []});
                }
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time='400' handler="onChange">
                            <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange} />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.map(result => {
                            return (
                                <li key={result.id}>
                                    <Book book={result} onSelect={this.props.onSelect} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;